import React, { useState } from "react";
import FormContainer from '../components/FormContainer'
import Button from 'react-bootstrap/Button';
import WebcamCapture from '../components/WebcamCapture'


const CamSignup = () => {

      
  return (
    <FormContainer>
    <h1>Facial - Cadastro</h1>
    <WebcamCapture/>
    </FormContainer>
  )
}

export default CamSignup
