 import React from 'react'
 import styled from "styled-components"
 import SearchIcon from '@mui/icons-material/Search';
 import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { display, fontSize, textAlign } from '@mui/system';
import { lightBlue } from '@mui/material/colors';
import { Badge } from '@mui/material';
  
  const Title=styled.div`
  
  position: fixed;
   top:24px;
  z-index: 3;
   scroll-behavior: smooth;
   margin-top:0;
   background-color:white;
    width:99vmax;
        
    min-width:130px;
      
     
    
     `;
     
  
  
  const Wrapper=styled.div({
     
    display:'flex',
     
    justifyContent:'space-between',
    padding: '10px 20px',
    alignItems:'center',
    width:'100%',
     
     
    
    
  });
  
const Left=styled.div({
flex:'1',
display:'flex',
alignItems:'center',
marginRight:'20px'

});
const Language=styled.span({
  fontSize:'13px',
  cursor:'pointer'
});
const SearchContainer=styled.div({
  padding:'3px 5px',
  display:'flex',
  alignItems:'center',
  marginLeft:'15px',
   
   
 border:'0.5px solid lightgray'
});

const Input=styled.input({
border:'none',
 fontSize:'14px',
marginRight:'7px'

});
const Right=styled.div({
  flex:'1',
  display:"flex",
  justifyContent:'flex-end',
 marginRight:'20px',
 marginLeft:'20px',
    
   
  

});
const MenuItem=styled.h1({
  display:'flex',
  fontSize:'0.75rem',
  fontWeight:'bold',
  margin:'auto 15px auto 0',
  cursor:'pointer'
  
   
})
const Center=styled.div`
  
  font-size:2.2rem;
  font-weight: 600;
  letter-spacing:5px;


  font-family: 'Urbanist', sans-serif;
  flex:'1';
   

`;

  
      
  
  
 function Navbar() {
  return (
    <Title>
      <Wrapper>
        <Left><Language>EN</Language>
           
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color:'gray',fontSize:'16px' }}/>
            </SearchContainer>
        </Left>
        <Center>E-Store.</Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>ABOUT</MenuItem>
          <MenuItem>
          
          <Badge badgeContent={0} color='primary' showZero>
          <ShoppingCartOutlinedIcon  />
          </Badge>
             
             
          </MenuItem>
        </Right>
      
      </Wrapper>
      
    </Title>
//     <nav class="navbar navbar-expand-lg bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Store</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
         
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search Item" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
  );
}
 
 export default Navbar
 
