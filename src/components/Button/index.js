
import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--bar);
    background: var(--bt);
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        color: var(--white);
        border: 1px solid var(--bar);
        background: var(--btHover);
    }
`;

export default Button;