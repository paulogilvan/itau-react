import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80px;
    background-color: #ec7000;
`;

export const Container = styled.div`
    width: 100%;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1246px;
    padding: 0 15px;
    margin: 0 auto;
`;

export const Img = styled.img`
    display: flex;
    align-items: center;
    margin: 0 20px;
    cursor: pointer;
`;

export const Ul = styled.ul<{showMenu: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 0 20px 0 0;    

    @media(max-width: 425px) {
        display: ${showMenu => showMenu ? 'none' : 'block'};
    } 
`;

export const Li = styled.li`
    list-style: none;
`;

export const ButtonAccessHeader = styled.div`
    display: flex;
    align-items: center;
    height: 70%;
    padding: 0 20px;
    background-color: #106eb0;
    border-radius: 5px;
    cursor: pointer;

    @media(max-width: 425px) {
        height: 50%;
        padding: 0 10px;
        margin-right: 120px;
    }
`;

export const ButtonAccess = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: 5px;
    color: #FFF;
    font-weight: bold;
    height: 100%;
    cursor: pointer;
`;

export const MenuHambuger = styled.div`
    @media(max-width: 425px) {
        width: 1.97rem;
        height: 2.87rem;
        position: absolute;
        right: 1.25rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    } 
    
`;

export const SpanLine = styled.span`
    @media(max-width: 425px) {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #FFF;
    }    
`;

