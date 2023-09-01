import { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({setError, error,selectedNumber,setSelectedNumber}) => {


    const arrNumber=[1, 2, 3, 4, 5, 6];


    const numberSelectorHandler = (value) =>
    {
      setSelectedNumber(value)
      setError("")
    }


  return (
    <NumberSelectorContainer>
  <p className="error">{error}</p>
    <div className="flex">
    {arrNumber.map((value,i) => (
    <Box 
    isSelected={value == selectedNumber}
    key= {i}
    onClick={() => numberSelectorHandler (value)} > 
    {value}
    </Box>
    ))}
    </div>
    <p>
        Select Number
    </p>
    </NumberSelectorContainer>

  );
};

export default NumberSelector;
const NumberSelectorContainer=styled.div`
display:flex;
flex-direction: column;
align-items: end;

.flex{

    display: flex;
    gap:24px;

}
p{
    font-size: 24px;
    font-weight: 700;
}
.error{

  color:red;
}
`;
const Box=styled.div`
display:flex;
width: 72px;
height: 72px;
padding: 18px 0px;
justify-content: center;
align-items: center;
border: 1px solid #000;
background: #FFF;
font-size: 24px;
font-style: normal;
font-weight: 700;
background-color: ${(props) => (props.isSelected ? "Black" : "white")};
color: ${(props) => (!props.isSelected ? "Black" : "white")};
`;
