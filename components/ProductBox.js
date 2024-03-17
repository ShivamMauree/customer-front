import styled from "styled-components";
import PrimaryBtn from "@/components/PrimaryBtn";
import ShoppingBtn from "@/components/ShoppingBtn";
import Center from "@/components/Center";

const ProductWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Btnwrapper = styled.div`
    display: flex;
    padding-bottom: 20px;
    padding-top: 30px;
    gap: 10px; 
`;


const ProductContainer = styled.div`
    display: flex;
    position: relative; 
    align-items: start; 
    gap: 30px;
    &:hover .description-box {
        opacity: 1;
        visibility: visible;
        transform: translateX(0%); 
    }
`;

const WhiteBox = styled.div`
    background: white;
    padding: 20px;
    height: 150px;
    width: 250px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    img {
        max-width: 100px;
        max-height: 150px;
    }
`;


const DescriptionBox = styled.div`
    background: white;
    padding: 20px;
    height: 300px;
    width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: absolute; 
    top: 0; 
    left: 105%; 
    z-index: 10; 
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
    transform: translateX(10%); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    img {
        max-width: 100px;
        max-height: 150px;
    }
`;
const StyledTitle = styled.h1`
    font-weight: bold ;
    font-size: 1.6rem;
    margin: 0;
`;
const Desc= styled.p `
    color:#aaa;
    font-size: .9rem;
`
;

const StyledPrice = styled.h1`
    font-weight: bolder;
    font-size: 1.5rem;
    margin: 0;
`;


const ProductInfo = ({title,description,price})=>(
  <ProductWrapper>
      <DescriptionBox>
          <StyledTitle>{title}</StyledTitle>
          <Desc>{description}</Desc>
          <Btnwrapper>
              <PrimaryBtn>
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
      </DescriptionBox>
  </ProductWrapper>

);


export default function ProductBox({id, title, description, price, images}) {
    return (
        <Center>
            <ProductWrapper>
                <ProductContainer>
                    <WhiteBox>
                        <div>
                            <img src={images[0]} alt=""/>
                        </div>
                    </WhiteBox>
                    <DescriptionBox className="description-box">
                        <StyledTitle>{title}</StyledTitle>
                        <Desc>{description}</Desc>
                        <StyledPrice>${price}</StyledPrice>
                        <Btnwrapper>
                            <ShoppingBtn size="l">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6">
                                    <path
                                        d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/>
                                </svg>
                                <span className="text">Add to Cart</span>
                            </ShoppingBtn>
                        </Btnwrapper>
                    </DescriptionBox>
                </ProductContainer>
            </ProductWrapper>
        </Center>

    );
}