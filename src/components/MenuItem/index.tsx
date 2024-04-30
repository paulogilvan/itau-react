import * as C from './styles';
import ArrowDown from '../../assets/arrow-down.svg';

type Props = {
    name: string;
}

export const MenuItem = ({ name }: Props) => {
    return (
        <C.ButtonMenu>
            <span>{name}</span>
            <img src={ArrowDown} alt="Seta" />
        </C.ButtonMenu>
    );
}