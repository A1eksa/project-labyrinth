import React from "react"
import styled from "styled-components"

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <Text>Developed and Designed by Pinar & Alexandra © 2021</Text>
      </FooterBox>
    </>
  )
}

const FooterBox = styled.div`
  position: fixed;
  left: 30%;
  bottom: 20px;
  color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    left: 20px;
  }
`

const Text = styled.h5`
  margin: 20px 0 0 0;
  color: grey;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-text: center;
`
