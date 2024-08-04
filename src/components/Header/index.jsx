import React from 'react';
import { HeaderConteiner, Name } from './styles';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <HeaderConteiner>
            <Name variant="primary">random</Name>
            <img src={logo} alt="" />
            <Name variant="secondary">user</Name>
        </HeaderConteiner>
    );
};

export default Header;
