import styled from "styled-components";
import {css} from "styled-components";

export const ShinyButtonStyle = css`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 7px;
    background: #222;
    border-radius: 3px;
    border: 2px solid #222;
    color: #fbfafd;
    margin: 0.5em 1em;
    padding: 0.25em;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.8s ease;
    width: 50px;
    justify-content: center;
    text-decoration: none;

    svg {
        height: 20px;
    }

    ${props =>
            props.size === 'l' && css`
                font-size: 1rem;
                padding: 5px;
            `}

    &:hover {
        background: #fbfafd;
        border: 2px solid #fbfafd;
        color: black;
        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3), 0 10px 20px rgba(255, 255, 255, 0.25);
        width: auto;
        padding: 0.25em 1em;
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