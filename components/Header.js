import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";

const StyledHeader = styled.header`
    background-color: black;
    padding: 0 0;

`;
const Logo = styled(Link)`
    color: aliceblue;
    text-decoration:none;
    padding: 30px 0;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content:space-between 
`;

const StyledNav = styled.nav`
    display: flex;
    gap:30px;
    padding-top: 20px;
`;





const NavLink = styled(Link)`
       color:#aaa;
    text-decoration:none;
`;
export default function Header() {
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}> We're Gonna have A logo Here Soon</Logo>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>Products</NavLink>
                        <NavLink href={'/categories'}>Categories</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>Shopping Cart</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}