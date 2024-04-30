import * as C from './styles';
import { ItemList } from '../ItemList';
import PhoneIcon from '../../assets/icon-phone.svg';
import SolutionsIcone from '../../assets/icon-solutions.svg';
import OptionsIcone from '../../assets/icon-options.svg';
import CardIcone from '../../assets/icon-card.svg';
import PhoneImage from '../../assets/phone.png';

export const SectionService = () => {
    return (
        <C.Section>
            <C.Wrapper>
                <C.ContainerLeft>
                    <C.Span>Serviços exclusivos</C.Span>
                    <C.H2>Gerencie suas finanças sem sair de casa</C.H2>
                    <C.P>Veja como você pode cuidar das suas finanças pelo app itaú de forma segura, rápida e o melhor, no coforto da sua casa.</C.P>
                    <C.Ul>
                        <C.Li>
                            <ItemList img={PhoneIcon} alt="Icone Phone" p="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver."/>
                        </C.Li>
                        <C.Li>
                            <ItemList img={SolutionsIcone} alt="Icone Solutions" p="Soluções de empréstimos e negociação para organizar suas finanças."/>
                        </C.Li>
                        <C.Li>
                            <ItemList img={OptionsIcone} alt="Icone Options" p="Diversas opções de investimentos, de acordo com o seu perfil de investidor."/> 
                        </C.Li>
                        <C.Li>
                            <ItemList img={CardIcone} alt="Icone Card" p="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual."/>
                        </C.Li>
                    </C.Ul>
                </C.ContainerLeft>
                <div>
                    <C.Img src={PhoneImage} alt="Phone image" />
                </div>
            </C.Wrapper>
        </C.Section>
    );
}