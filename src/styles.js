import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TodoList = styled.div`
    background: #FFFFFF;
    padding: 20px;
    border-radius: 5px;
`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    font-size: 15px;
    font-weight: 400;
    outline: none;
    padding-left: 10px;
`;

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    height: 40px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 20px;

    &:hover{
        opacity: 0.8;

        &:active{
            opacity: 0.5;
        }
    }
`;

export const List = styled.ul`
    padding: 0;
    margin-top: 30px;
`

export const Item = styled.li`
    background: #E4E4E4;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    color: #000000;
    font-size: 15px;
    font-weight: 400;
    height: 60px;
    list-style-type: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;