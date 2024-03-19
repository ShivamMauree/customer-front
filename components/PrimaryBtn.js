import styled from "styled-components";
import {css} from "styled-components";

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

    ${props =>
            props.size === 'l' && css`
                font-size: 1rem;
                padding: 5px 1em; 
            `}

    &:hover {
        background: #fbfafd;
        border-color: #fbfafd;
        color: black;
        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3), 0 10px 20px rgba(255, 255, 255, 0.25);
    }

    .text {
        display: none;
    }

    &:hover .text {
        display: inline;
    }
`;


const StyledBtn = styled.button`
      ${ShinyButtonStyle}
`;

export default function PrimaryBtn({ children, ...rest }) {
    return (
        <StyledBtn {...rest}>
            {children}
        </StyledBtn>
    );
}