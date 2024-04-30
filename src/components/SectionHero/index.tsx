import * as C from './styles';
import BtnAppleStore from '../../assets/btn-apple-store.svg';
import BtnGooglePlay from '../../assets/btn-google-play.svg';
import Arrow from '../../assets/arrow-explorer.svg';
import WomanImage from '../../assets/woman.png';

export const SectionHero = () => {
    return (
        <C.Section>
            <C.Container>
                <C.ContainerLeft>
                    <C.H1>Tenha seu Banco na palma da mão</C.H1>
                    <C.P>Todas as operações que você precisa em um só lugar. Simples, completo e feito para você.</C.P>
                    <C.ButtonArea>
                        <C.ButtonApps>
                            <img src={BtnAppleStore} alt="Apple Store" />
                        </C.ButtonApps>
                        <C.ButtonApps>
                            <img src={BtnGooglePlay} alt="Google Play" />
                        </C.ButtonApps>
                    </C.ButtonArea>
                    <C.ButtonExplore>
                        <img src={Arrow} alt="Arrow Down" />
                        <C.Span>Continue explorando</C.Span>
                    </C.ButtonExplore>
                </C.ContainerLeft>
                <C.WomanImage src={WomanImage} alt="Woman" />
            </C.Container>
        </C.Section>
    );
}