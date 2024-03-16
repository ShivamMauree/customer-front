import Center from "@/components/Center";
import styled from "styled-components";
import PrimaryBtn from "@/components/PrimaryBtn";
import ShoppingBtn from "@/components/ShoppingBtn";
import {useState} from "react";

const Bg = styled.div`
    background-color:black;
    color: aliceblue;
    padding: 50px 0;

`;

const StyledTitle = styled.h1`
    margin:0;
    font-weight: bold;
    color: aliceblue;
`;

const Desc= styled.p `
    color:#aaa;
    font-size: .9rem;
`
;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    img {
        max-width: 100%;
        border-radius: 4px;
        background:transparent;
    }
`
;

const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Btnwrapper = styled.div`
    display: flex;
`;

const ReadMoreContent = ({product})=> (
    <Wrapper>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 style={{ width: '200px', height: '123px' }}>
                <path
                    d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"/>
            </svg>
        </div>
        <Desc>{product.description}</Desc>
    </Wrapper>
);

export default function Featured({product}) {
    const [showMore, setShowMore] = useState(false);
    console.log(product);
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <div>
                            <StyledTitle>{product.title}</StyledTitle>
                            <Desc>Yep its the Shiv, but better</Desc>
                        </div>
                        <Btnwrapper>
                            <PrimaryBtn size="l" onClick={() => setShowMore(!showMore)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-6 h-6">
                                       <path
                                           d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"/>
                                   </svg>
                                      <span className="text">Read More</span>
                               </PrimaryBtn>
                               <ShoppingBtn size="l">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-6 h-6">
                                       <path fill-rule="evenodd"
                                             d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                                             clip-rule="evenodd"/>
                                   </svg>
                                   <span className="text">Add to Cart</span>
                               </ShoppingBtn>
                           </Btnwrapper>
                       </Column>
                       <img src="https://shiv-next-ecommerce.s3.amazonaws.com/1710118842884.png" alt=""/>
                       <div>

                       </div>
                   </Wrapper>
                   {showMore && <ReadMoreContent product={product} />}
               </Center>

           </Bg>

    );
}