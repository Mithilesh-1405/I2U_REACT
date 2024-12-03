import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/api/submit-form.php', formData);
            setMessage(response.data.message || 'Form submitted successfully!');
        } catch (error) {
            setMessage('Error submitting form. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {/* Add your form fields here */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default Form;
