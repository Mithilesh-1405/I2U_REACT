import React, { useEffect, useState } from 'react';

const PostContent = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('./temp.txt')
            .then(response => response.text())
            .then(data => setContent(data))
            .catch(error => console.error('Error fetching the post content:', error));
    }, []);

    return (
        <div className="post-content">
            <h1>Blog Post</h1>
            <p>{content}</p>
        </div>
    );
};

export default PostContent;
