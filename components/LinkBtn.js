import Link from "next/link";
import styled from "styled-components";
import {ShinyButtonStyle} from "@/components/PrimaryBtn";

const StyledLink = styled(Link)` 

    ${ShinyButtonStyle}

`;

export default function LinkBtn(children){
    return (
        <StyledLink {...children}/>
    );
}