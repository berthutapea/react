import React from 'react';
import { tutorial } from '../utils/content';

function Posts({ locale }) {
    return (
        <ul className="posts">
            {tutorial[locale].map((title) => (
                <li key={title}>
                    <h3>{title}</h3>
                </li>
            ))}
        </ul>
    );
}

export default Posts;
