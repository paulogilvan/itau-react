import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 965px;
    padding-top: 8rem;    

    @media(max-width: 425px) {
        padding-top: 4rem;
    }
`;

export const Wrapper = styled.div`
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
    max-width: 594px;
`;

export const Span = styled.span`
    display: block;
    font-size: 0.87rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #ec7000;
    margin-bottom: 2.18rem;
`;

export const H2 = styled.h2`
    color: #33303e;
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 3.81rem;
    margin-bottom: 1.5rem;

    @media(max-width: 768px) {
        font-size: 2.5rem;
        line-height: 2.81rem;
    }
`;

export const P = styled.p`
    font-size: 1.12rem;
    max-width: 34.62rem;
    margin-bottom: 4.25rem;
    color: #4e4b59;

    @media(max-width: 768px) {
        font-size: 1rem;        
    }
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2.25rem;
`;

export const Li = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.25rem;
    padding-bottom: 2.25rem;
    border-bottom: 1px solid #7a7786;
`;

export const Img = styled.img`
    transform: translateX(-30%);

    @media(max-width: 768px) {
        display: none;
    }
`;