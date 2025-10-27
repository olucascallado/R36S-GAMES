import React from 'react';

const GameControllerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 8.25H8.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5c0 1.293.75 2.51 1.875 3.125l.02.013c.83.498 1.832.812 2.88.812h11.95c1.048 0 2.05-.314 2.88-.812l.02-.013c1.125-.616 1.875-1.832 1.875-3.125v-3c0-1.293-.75-2.51-1.875-3.125l-.02-.013A6.993 6.993 0 0 0 19.005 6h-14.01a6.993 6.993 0 0 0-2.88.812l-.02.013C.999 7.44.25 8.657.25 9.953v3.547Z" />
    </svg>
);

export default GameControllerIcon;