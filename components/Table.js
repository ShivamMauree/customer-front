import styled from "styled-components";

const StyledTable = styled.table`  
    width: 100%;
    background-color: #dad9da;
    border-collapse: separate; 
    border-spacing: 15px 10px; 

    th{
        text-align: left;
        text-transform: uppercase;
        color:#aaa;
        font-size: .7rem;
        font-weight: 500;
        background-color: #dad9da;
        padding-left: 10px;
        padding-right: 20px;
    }
    thead{
        background-color: #dad9da;
    }
`;
export default function Table(props) {
    return <StyledTable{...props}/>
}