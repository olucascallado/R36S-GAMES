import React from 'react';

const GameIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.75v3m1.5-1.5h-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12h.008v.008H8.25V12Zm3.75 0h.008v.008h-.008V12Zm3.75 0h.008v.008h-.008V12Z" />
    </svg>
);

export default GameIcon;
