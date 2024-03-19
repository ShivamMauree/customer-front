import Header from "@/components/Header";
import Featured from "@/components/Featured";
import React from "react";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-weight: 700 ;
    font-size: 1.6rem;
    margin: 0;
`;
const StyledPage =styled.div`
background-color: #dad9da
`
;
export default function HomePage({product, recentProducts}) {
    console.log({recentProducts});
    return (
    <StyledPage>
    <Header/>
        <Featured product={product}/>
        <NewProducts products={recentProducts}/>
    </StyledPage>
);

}

export  async function getServerSideProps(){
     const featuredProductId = '65c55a9fd2564f636c2bed8e';
     await mongooseConnect();
     const product = await Product.findById(featuredProductId);
     const recentProducts = await Product.find({},null,{sort:{'_id':-1}, limit:10});
     return {
         props: {
             product: JSON.parse(JSON.stringify(product)),
             recentProducts: JSON.parse(JSON.stringify(recentProducts)) },
         };
}