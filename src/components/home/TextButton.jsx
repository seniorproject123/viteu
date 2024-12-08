import React from 'react';

const TextButton = ({ text, type }) => {
    const bg_color = type === 'primary' ? ' bg-[#45064F]' : ' bg-[#45064F]';
    const text_color = type === 'primary' ? ' text-white' : ' text-white';
    const hover_color = type === 'primary' ? ' hover:bg-purple-950' : ' hover:bg-purple-950';
    const active_color = type === 'primary' ? ' active:bg-purple-900' : ' active:bg-purple-900';

    const style = 'w-[200px] mx-auto py-3 px-5 rounded-xl font-bold mt-4 md:text-xl transition ease-in-out hover:scale-105 items-end' +
        bg_color + text_color + hover_color + active_color;

    return (
        <button className={style}>
            {text}
        </button>
    );
}

export default TextButton;