import styled, { css, keyframes } from "styled-components";
import { useState } from "react";


const clickAnimation = keyframes`
  from {
    box-shadow: 0 0 0 0 rgba(255, 204, 0, 0.7);
  }
  to {
    box-shadow: 0 0 0 10px rgba(255, 204, 0, 0);
  }
`;

export const ShinyButtonStyle = css`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 7px;
    background: black;
    border-radius: 3px;
    border: 2px solid black;
    color: #fbfafd;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.8s ease;
    justify-content: center;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    height: 40px;
    min-width: 50px;
    svg {
        height: 20px;
    }

    ${props => props.size === 'l' && css`
        font-size: 1rem;
        padding: 5px 1em;
    `}

    &:hover {
        background: #fbfafd;
        border-color: #fbfafd;
        color: black;
    }

    &.active {
        animation: ${clickAnimation} 0.4s ease-out;
        background: #ffcc00; 
        color: black;
    }

    .text {
        display: none;
    }

    &:hover .text, &.active .text {
        display: inline;
    }
`;

const StyledBtn = styled.button`
    ${ShinyButtonStyle}
`;

export default function ShoppingBtn({ children, onClick, ...rest }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event) => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 400);

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <StyledBtn
            {...rest}
            className={isActive ? 'active' : ''}
            onClick={handleClick}
        >
            {children}
        </StyledBtn>
    );
}












