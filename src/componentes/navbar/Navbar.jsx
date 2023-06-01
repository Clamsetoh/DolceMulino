import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <Barra></Barra>
      <NavContainer>
        <a href=""><img src="../src\assets\Img\CintaDolce.png" alt="DolceLogo"/></a>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="">Inicio</a>
          <a onClick={handleClick} href="2">Menu</a>
          <a onClick={handleClick} href="3">Nosotros</a>
          <a onClick={handleClick} href="4">Contacto</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const Barra = styled.div`
  padding: 1rem;
  background-color: #a778bc;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavContainer = styled.nav`
  img{
  width: 30%;
  height: 30%;
  }
  padding: .4rem;
  background-color: blanchedalmond;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #000000;
    text-decoration: none;
    margin-right: 1rem;
    
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #000000;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #000000;
        display: inline;
      }
      display: block;
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: #000000;
    }
  }

  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`