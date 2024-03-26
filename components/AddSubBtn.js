import styled from "styled-components";
import css from "styled-jsx/css";
import {ShinyButtonStyle} from "@/components/PrimaryBtn";

const StyledBtn = styled.button`
cursor: pointer;
    display: flex;
    align-items: center;
    gap: 7px;
    background: #DDDCDD;
    border-radius: 3px;
    border: 2px solid #DDDCDD;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    color:#888888;;
    margin: 0.5em 1em;
    padding: 0.25em 1em; 
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.8s ease;
    justify-content: center;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    height: 20px; 
    width: 20px; 
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

export default function AddSubBtn({ children, ...rest }) {
    return (
        <StyledBtn {...rest}>
            {children}
        </StyledBtn>
    );
}
