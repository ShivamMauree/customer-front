import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import PrimaryBtn from "@/components/PrimaryBtn";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap:40px;
    margin-top: 20px;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
`;
export default function CartPage (){
    const{cartProducts} = useContext(CartContext);
    return (
        <>
        <Header/>
            <Center>
                <ColumnWrapper>
                    <Box>
                        {!cartProducts?.length && (
                            <div> Your cart is empty </div>
                            )}
                    </Box>
                    {!!cartProducts.length && (
                        <Box>
                            <h2> Order Information</h2>
                            <input type="text" placeholder="Address"/>
                            <input type="text" placeholder="Address 2"/>
                            <PrimaryBtn>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/>
                                </svg>
                                <span className="text">Proceed to Payment</span>
                            </PrimaryBtn>
                        </Box>
                    )}
                </ColumnWrapper>
            </Center>
        </>
    );
}