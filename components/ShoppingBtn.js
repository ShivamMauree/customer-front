import styled from "styled-components";
import css from "styled-jsx/css";

const StyledBtn = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center; /* Ensure SVG and text are aligned */
    gap: 7px;
    background: #222; /* Mid-tone gray as the base color */
    border-radius: 3px;
    border: 2px solid #222; /* Keeping the border the same for consistency */
    color: #fbfafd; /* Light text color for readability */
    margin: 0.5em 1em;
    padding: 0.25em; /* Start with padding that fits the SVG */
    overflow: hidden; /* Hide the overflow (the text) */
    white-space: nowrap; /* Prevent text wrapping */
    transition: all 0.3s ease; /* Smooth transition for the color, shadow, and width */
    width: 50px; /* Initial width to fit only SVG */
    justify-content: center; /* Center the SVG when the text is hidden */

    svg {
        height: 20px;
    }

    ${props =>
            props.size === 'l' && css`
                font-size: 1rem;
                padding: 5px;
            `}

    &:hover {
        background: #fbfafd; /* Change to desired hover background color */
        border: 2px solid #fbfafd; /* Adjust border color on hover */
        color: black; /* Change to desired hover text color */
        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3), 0 10px 20px rgba(255, 255, 255, 0.25);
        width: auto; /* Expand width on hover to fit the text */
        padding: 0.25em 1em; /* Adjust padding to match initial styles */
    }

    .text {
        display: none; /* Initially hide the text */
    }

    &:hover .text {
        display: inline; /* Show the text on hover */
    }
`;

export default function ShoppingBtn({ children, ...rest }) {
    return (
        <StyledBtn {...rest}>
            {children}
        </StyledBtn>
    );
}














