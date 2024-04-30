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

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 0 20px 0 0;
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