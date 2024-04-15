import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
    width: 100%;  
    height: 100%;
    object-fit: contain; 
`;
const BigImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
`;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
    border-color: #ccc;
  ` : `
    border-color: transparent;
  `}
    height: 60px; 
    width: 60px; 
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
    display: flex; 
    justify-content: center; 
    align-items: center; 
`;
const BigImageWrapper = styled.div`
    text-align: center;
    min-width: 400px; 
    min-height: 400px;
    width: 100%;
    height: 100%;
    margin-top: 100px;
`;


export default function ProductImages({images}) {
    const [activeImage, setActiveImage] = useState(images?.[0]);
    return (
        <>
            <BigImageWrapper>
                <BigImage src={activeImage} />
            </BigImageWrapper>
            <ImageButtons>
                {images.map(image => (
                    <ImageButton
                        key={image}
                        active={image === activeImage}
                        onClick={() => setActiveImage(image)}>
                        <Image src={image} alt="" />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    );
}