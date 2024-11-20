import axios from 'axios';

// Function to upload image to cloud storage via backend
export const uploadImage = async (file) => {
    try {
        // First, get a pre-signed URL from your backend
        const response = await axios.post('/api/upload/presign', {
            fileName: file.name,
            fileType: file.type
        });

        // Upload the file directly to cloud storage using the pre-signed URL
        await axios.put(response.data.uploadUrl, file, {
            headers: {
                'Content-Type': file.type
            }
        });

        // Return the public URL of the uploaded image
        return response.data.publicUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};
