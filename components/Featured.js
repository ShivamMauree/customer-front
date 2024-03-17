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
                 style={{width: '200px', height: '123px'}}>
                <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"/>
                <path fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                      clip-rule="evenodd"/>
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
                                    <path
                                        d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/>
                                </svg>
                                <span className="text">Add to Cart</span>
                            </ShoppingBtn>
                        </Btnwrapper>
                    </Column>
                    <img src="https://shiv-next-ecommerce.s3.amazonaws.com/1710118842884.png" alt=""/>
                    <div>
                    </div>
                </Wrapper>
                {showMore && <ReadMoreContent product={product}/>}
            </Center>
        </Bg>

    );
}