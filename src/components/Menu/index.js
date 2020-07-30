import React from 'react';
import Logo from '../../assests/img/Logo.png';
import './menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'


function Menu(){
    return(
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="SNKFLIX Logo" />
            </a>
            <Button className='ButtonLink' href="/">
                NOVO VÍDEO
            </Button>
        </nav>

    );

}


export default Menu; 