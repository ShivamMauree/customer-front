import styled from "styled-components";
import css from "styled-jsx/css";
import {ShinyButtonStyle} from "@/components/PrimaryBtn";

const StyledBtn = styled.button`
    ${ShinyButtonStyle}
    }
`;

export default function ShoppingBtn({ children, ...rest }) {
    return (
        <StyledBtn {...rest}>
            {children}
        </StyledBtn>
    );
}














