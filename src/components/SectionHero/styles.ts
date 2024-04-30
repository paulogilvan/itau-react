import styled from 'styled-components';
import Background from '../../assets/bg-hero.jpg';

export const Section = styled.section`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;   
    background-position: center;
    width: 100%;
    height: 704px;

    @media(max-width: 768px) {
        height: 550px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1246px;
    padding: 0 50px;
    margin: 0 auto;
`;

export const ContainerLeft = styled.div`
    flex: 1;
    max-width: 500px;
`;

export const H1 = styled.h1`
    color: #FFF;
    font-size: 4.5rem;
    margin-bottom: 1rem;

    @media(max-width: 768px) {
        font-size: 3.5rem;
    }
`;

export const P = styled.p`
    color: #FFF;
    font-size: 1.25rem;
    max-width: 25.5rem;
    margin-bottom: 2rem;

    @media(max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ButtonArea = styled.div`
    margin-bottom: 6rem;
    display: flex;
    gap: 0.62rem;
`;

export const ButtonApps = styled.button`
    background-color: transparent;
    border: none;    
    cursor: pointer;

    @media(max-width: 768px) {
        font-size: 50px;
    }
`;

export const ButtonExplore = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: 0.93rem;
`;

export const Span = styled.span`
    color: #FFF;
    font-weight: bold;
`;

export const WomanImage = styled.img`
    margin-right: -2.56rem;

    @media(max-width: 768px) {        
        height: 400px;
    } 

    @media(max-width: 425px) {
        display: none;
    }
`;