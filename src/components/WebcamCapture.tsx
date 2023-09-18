import React, { useState } from 'react';
import Webcam from "react-webcam";
import {Container,Button } from 'react-bootstrap';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


    return (

    <Container>
        <Container>
            {image == '' ?    <Webcam
                audio={false}
                height={400}
                ref={webcamRef}
                screenshotFormat="image/png"
                width={500}
                videoConstraints={videoConstraints}
            /> : <img src={image} />}
        </Container>
        <Container>
            {image != '' ?
            <Button variant="success"
            onClick={(e) => {
                e.preventDefault();
                setImage('')
            }}>
                Retake Image
            </Button>:
            <Button variant="success"
            onClick={(e) => {
                e.preventDefault();
                capture();
            }}>Capture</Button>
        }
        </Container>
    </Container>
     
    );
}

export default WebcamCapture