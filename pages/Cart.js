import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import PrimaryBtn from "@/components/PrimaryBtn";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Link from "next/link";
import Input from "@/components/Input";
import CartBtn from "@/components/CartBtn";
import AddSubBtn from "@/components/AddSubBtn";

const StyledPage =styled.div`
background-color: #dad9da
`
;


const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap:40px;
    margin-top: 20px;
`;

const Box = styled.div`
    background-color: #dad9da;
    border-radius: 10px;
`;

const ProductInfoCell = styled.td`
    padding:10px;
`;

const ProductImgBox = styled.div`
    max-width: 150px;
    ,sx-hei
`;
const WhiteBox = styled.div`
    background: #DDDCDD;
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
        max-width: 150px;
        max-height: 150px;
    }
`;
const TotalBox = styled.div`
    background: #DDDCDD;
    padding: 5px;
    height: 10px;
    width: 150px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    img {
        max-width: 150px;
        max-height: 150px;
    }
`;
const QuantityLabel = styled.span`
padding:0 10px;
`;

const StyledProductLabel = styled.div`
    padding:10px;
    color:#aaa;
`
;

const TotalLabel = styled.div`
    padding:10px;
    color:#888888;
`
;
const LocationInfo = styled.div`
    display:flex;
    gap: 10px;
`;

const ButtonHolder = styled.div`
    display:flex;
    gap: 10px;
`;

const SubHolder = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    color:#888888;
`;
export default function CartPage (){

    const{cartProducts,addProduct, removeProduct, clearCart} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [name, setName]= useState('');
    const [email , setEmail] = useState('');
    const [city, setCity]= useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry]= useState('');

    useEffect(()=> {
        if (cartProducts?.length >0){
            axios.post('/api/Cart', {ids:cartProducts})
                .then(response=> {
                    setProducts(response.data);
                });
        } else {
            setProducts([]);
        }
    },[cartProducts]);

    function moreOfThisProduct(id){
            addProduct(id);
    }

    function lessOfThisProduct(id){
        removeProduct(id);
    }

    function clearShoppingCart(){
        clearCart([]);
    }


    useEffect(() => {
        let newTotal = 0;
        for (const product of products) {
            const quantity = cartProducts.filter(id => id === product._id).length;
            newTotal += quantity * product.price;
        }
        setTotal(newTotal);
    }, [products, cartProducts]);

    return (
        <StyledPage>
        <Header/>
            <Center>
                <ColumnWrapper>
                    <Box>
                        {!cartProducts?.length && (
                            <div> Your cart is empty </div>
                        )}
                        <h2>Cart</h2>
                        {products?.length > 0 && (
                        <Table>
                            <thead>
                            <tr>
                                <th>
                                    <SubHolder>
                                        Product
                                </SubHolder>
                                    </th>
                                <th>
                                    <SubHolder>
                                    Quantity
                                </SubHolder></th>
                                <th>
                                    <SubHolder>
                                    Price
                                </SubHolder></th>
                            </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr>
                                        <ProductInfoCell>
                                            <WhiteBox>
                                                <img src={product.images[0]} alt=""/>
                                                <StyledProductLabel>
                                                    {product.title}
                                                </StyledProductLabel>
                                            </WhiteBox>
                                            </ProductInfoCell>
                                        <td>
                                            <SubHolder>
                                                <AddSubBtn onClick ={()=> lessOfThisProduct(product._id)}>-</AddSubBtn>
                                                <QuantityLabel>
                                                    {cartProducts.filter(id => id === product._id).length}
                                                </QuantityLabel>
                                                <AddSubBtn
                                                    onClick ={()=> moreOfThisProduct(product._id)}
                                                >+</AddSubBtn>
                                            </SubHolder>
                                        </td>
                                        <td>
                                            <SubHolder>
                                                $ {cartProducts.filter(id => id === product._id).length * product.price}
                                            </SubHolder>
                                        </td>
                                    </tr>
                                ))}
                            <tr>
                            <td></td>
                                <td>

                                </td>
                                <td>
                                    <TotalBox>
                                        <TotalLabel>
                                            Total :
                                            ${total}
                                        </TotalLabel>
                                    </TotalBox>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        )}
                    </Box>
                    {!!cartProducts.length && (
                        <Box>
                            <h2> Order Information</h2>
                            <form method="post" action="/api/checkout">
                                <Input type="text"
                                       placeholder="Name"
                                       value={name}
                                       name="name"
                                       onChange={ev => setName(ev.target.value) }/>
                                <Input type="text"
                                       placeholder="e-mail"
                                       value={email}
                                       name="email"
                                       onChange={ev => setEmail(ev.target.value)} />
                                <LocationInfo>
                                    <Input type="text"
                                           placeholder="Street Address"
                                           value={streetAddress}
                                           name="streetAddress"
                                           onChange={ev => setStreetAddress(ev.target.value)} />
                                    <Input type="text"
                                           placeholder="City"
                                           name="city"
                                           value={city}
                                           onChange={ev => setCity(ev.target.value)} />
                                </LocationInfo>
                                <Input type="text"
                                       placeholder="Zip-Code"
                                       value={zipcode}
                                       name="zipcode"
                                       onChange={ev => setZipcode(ev.target.value)}/>
                                <Input type="text"
                                       placeholder="Country"
                                       value={country}
                                       name="country"
                                       onChange={ev => setCountry(ev.target.value)}/>
                                <ButtonHolder>
                                    <CartBtn onClick={() => clearShoppingCart()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="w-6 h-6">
                                            <path fill-rule="evenodd"
                                                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </CartBtn>
                                    <CartBtn type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5"
                                             stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/>
                                        </svg>
                                        <span className="text">Proceed to Payment</span>
                                    </CartBtn>
                                </ButtonHolder>
                                <input type="hidden"
                                       name="products"
                                       value={cartProducts.join(',')}/>
                            </form>

                        </Box>
                    )}
                </ColumnWrapper>
            </Center>
        </StyledPage>
    );
}