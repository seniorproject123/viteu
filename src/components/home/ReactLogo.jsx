import React from 'react';
// import LogoReact from ''
import LogoSA from '../../assets/logo-saa.png';

const ReactLogo = ({ type, size }) => {
    const style = type === 'static' ? '' : 'hover:scale-125 hover:rotate-180 duration-1000';

    return (
        <div className='text-purple-950'>
            <img className={style} size={size} src={LogoSA} alt="Logo"/>
        </div>
    );
}

export default ReactLogo;