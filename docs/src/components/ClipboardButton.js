import React from 'react';

export default function ClipboardButton({children, link}) {
    return (
        <span>
            <button onClick={
                () => navigator.clipboard.writeText(link)}>
                Copy tag
            </button>
        </span>
    );
}
