
import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
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
        color: var(--black);
        border: 1px solid var(--black);
        background: var(--white);
    }
`;

export default Button;