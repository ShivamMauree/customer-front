import Header from "@/components/Header"
import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductBox from "@/components/ProductBox";

const Title= styled.h1`
    font-size: 1.5em;
    padding:20px;
`;
const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
`;
export default function ProductsPage({products}) {
    return (
        <>
        <Header/>
            <Center>
                <Title> All Products</Title>
                <ProductsGrid>
                    {products?.length > 0 && products.map(product => (
                        <ProductBox {...product}></ProductBox>
                    ))}
                </ProductsGrid>
            </Center>
        </>

    );

}


export async function getServerSideProps(){
    await mongooseConnect();
    const products = await Product.find({}, null,{sort: {'_id':-1}});
    return{
        props:{
            products: JSON.parse(JSON.stringify(products)),
        }};
}