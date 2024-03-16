import Link from "next/link";
import styled from "styled-components";
import {ShinyButtonStyle} from "@/components/PrimaryBtn";

const StyledLink = styled.link ` 

    ${ShinyButtonStyle}

`;

export default function LinkBtn(props){
    return (
        <Link {...props}/>
    );
}