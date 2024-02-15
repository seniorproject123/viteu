import React from 'react';
// import LogoReact from ''
import { BiLogoReact } from 'react-icons/bi';

const ReactLogo = ({ type, size }) => {
    const style = type === 'static' ? '' : 'hover:scale-125 hover:rotate-180 duration-1000';

    return (
        <div className='text-purple-950'>
            <BiLogoReact className={style} size={size} />
        </div>
    );
}

export default ReactLogo;