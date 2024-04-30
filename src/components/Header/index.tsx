import * as C from './styles';
import Logo from '../../assets/logo.svg';
import { MenuItem } from '../MenuItem';
import IconUser from '../../assets/icon-user.svg';

export const Header = () => {
    return (
        <C.Header>
            <C.Container>
                <C.HeaderContent>
                    <div>
                        <C.Img src={Logo} alt="Logo Itau" />
                    </div>  
                    <C.Ul>
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