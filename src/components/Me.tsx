import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Me = () => {
    return (
        <div className="flex items-center justify-center">
            <a
                className="mr-2 border-white text-white hover:border-b xl:border-black xl:text-black"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ederika"
            >
                Arsen Kudryashov
            </a>
            <FaGithub className="text-white xl:text-black" />
        </div>
    );
};

export default Me;
