import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import styled from 'styled-components'
const Container=styled.div({
    display:'flex',
    width:'99vmax',
    fontWeight:'bold',
    fontSize:'14px',
    padding:'3px 0',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#efd6c2',
    cursor:'pointer',
    position:'fixed',
    top:'0',
     
     
    zIndex:'1'
     
     
   
     
    
})
 




const Announcements = () => {
  return (
    
      <Container>
         Super Deal ! Free Shipping for first 5 orders of this month </Container>
     
  )
}

export default Announcements
