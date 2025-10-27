import React from 'react';

const ConsoleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M5.25 12v3.75m13.5-3.75v3.75M6 10.5h12v-3a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18.75h6" />
    </svg>
);

export default ConsoleIcon;
