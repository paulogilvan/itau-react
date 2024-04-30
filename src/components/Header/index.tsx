import { useState } from 'react';
import * as C from './styles';
import Logo from '../../assets/logo.svg';
import { MenuItem } from '../MenuItem';
import IconUser from '../../assets/icon-user.svg';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <C.Header>
            <C.Container>
                <C.HeaderContent>
                    <div>
                        <C.Img src={Logo} alt="Logo Itau" />
                    </div>  
                    
                    <C.Ul showMenu={showMenu}>
                        <C.Li>
                            <MenuItem name="Para você" />                            
                        </C.Li>
                        <C.Li>
                            <MenuItem name="Para empresas" />                            
                        </C.Li>
                        <C.Li>
                            <MenuItem name="Serviços" />                            
                        </C.Li>
                        <C.Li>
                            <MenuItem name="Ajuda" />                            
                        </C.Li>
                    </C.Ul>
                    
                    <C.MenuHambuger onClick={toggleMenu}>
                        <C.SpanLine></C.SpanLine>
                        <C.SpanLine></C.SpanLine>
                        <C.SpanLine></C.SpanLine>
                    </C.MenuHambuger>
                    <C.ButtonAccessHeader>
                        <C.ButtonAccess>
                            <img src={IconUser} alt="Icone Usuario" />
                            <span>Acessar Conta</span>
                        </C.ButtonAccess>
                    </C.ButtonAccessHeader>
                </C.HeaderContent>                  
            </C.Container>
        </C.Header>        
    );
}