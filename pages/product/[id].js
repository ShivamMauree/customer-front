import Header from "@/components/Header";
import Center from "@/components/Center";
import ProductBox from "@/components/ProductBox";
import styled from "styled-components";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductImages from "@/components/ProductImages";
import {CartContext} from "@/components/CartContext";
import {useContext} from "react";
import ShoppingBtn from "@/components/ShoppingBtn";


const Title= styled.h1`
    font-size: 1.5em;
    padding:20px;
`;
const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap:40px;
    margin-top:60px;
`;
const WhiteBox = styled.div`
    background: white;
    padding: 20px;
    height: 150px;
    width: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    img {
        max-width: 850px;
        max-height: 850px;
    }
`;
const Box = styled.div`
    background: white;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default function ProductPage({product}){
    const {setCartProducts} = useContext(CartContext);
    function addFeaturedToCart() {
        setCartProducts(prev => [...prev, product._id])

    }
    return(
        <>
        <Header/>
            <Center>
            <ColWrapper>
                <WhiteBox>
                    <ProductImages images={product.images} alt=""/>
                </WhiteBox>
                <Box>
                    <Title>{product.title}</Title>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <ShoppingBtn size="l" onClick={addFeaturedToCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path
                                d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/>
                        </svg>
                        <span className="text">Add to Cart</span>
                    </ShoppingBtn>
                </Box>
            </ColWrapper>
            </Center>
        </>
    );
}

export async function getServerSideProps(context){
    await mongooseConnect();
    const {id}= context.query;
    const product = await Product.findById(id);
    return{
        props:{
            product: JSON.parse(JSON.stringify(product)),
        }};
}