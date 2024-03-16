import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

    body {
        padding: 0;
        margin: 0;
        font-family: 'Rubik', sans-serif; // Default font
    }
    
`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles/>
            <Component {...pageProps} />
        </>
    );
}
