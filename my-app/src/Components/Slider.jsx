import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSlotProps } from '@mui/base';
import { lightBlue, yellow } from '@mui/material/colors';
import MyImage from '../images/fas.png'
const Container=styled.div({
 
display:'flex',
backgroundColor:'#e4c4c4',
height:'100vh',
width:'99vmax',
position:'relative',
margin:'10px 0'

})

const Arrow=styled.div`
    background-color:white;
    border-radius: 50%;
    color: #383434;
    height: 50px;
    display: flex;
    width:50px;
    opacity: 0.5;
    align-items:center;
    justify-content:center;
     
    margin: auto;
    top:0;
    bottom:0;

    margin-left: ${props=> props.direction==="left" && "10px"};
    margin-right: ${props=> props.direction==="right" && "15px"};
    
     
    
     
     

`;
 const Wrapper=styled.div`
   
 height: 100%;
 width: 100%;
  
 
  
  
 
    
 `;
 
const SlideContainer=styled.div`
    display :flex ;
     
    height: 90%;
    width: 100%;
    margin: 100px 10px;
    align-items:center;
     
`;
const ImageContainer=styled.div`
flex:1;
height: 100%;
padding: 20px 40px ;

 
`;
const Image=styled.img`
    height: 85%;
    
`;

const InfoContainer=styled.div`
flex:1;
margin-right:100px;
    
`;
const InfoTitle=styled.h1`
    font-family: 'Urbanist', sans-serif;
    font-size:3.5rem;
    font-weight: 500;
    letter-spacing:2px;
    
   
`;
const Desc=styled.p`
  font-size :0.7 rem ;
  letter-spacing:2px;
  margin:30px 0;
`;
const Button=styled.button`
     font-size: 1.3rem;
    background-color: #f3ecec;
    &:hover{
      color: #dcaf6f;
background-color: #2b1616;
}
`;

const Slider = () => {
  return (
 <Container>
  <Arrow direction="left">
  <ArrowBackIosIcon fontSize='small'/>
 
  </Arrow>
   <Wrapper>
   <SlideContainer>
         <ImageContainer>
          <Image src={MyImage}/>
             
         </ImageContainer>
         <InfoContainer>
            <InfoTitle>SUMMER SALE</InfoTitle>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% ON NEW ARRIVALS</Desc>
            <Button>SHOW ME</Button>
         </InfoContainer>
        
    </SlideContainer>
    
    </Wrapper>
  <Arrow direction="right">
  <ArrowForwardIosIcon fontSize='small'/>
  </Arrow>
   
    
   </Container>
  )
}

export default Slider
