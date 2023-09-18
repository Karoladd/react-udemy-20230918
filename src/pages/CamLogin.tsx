import { useRef } from "react";
import Webcam from "react-webcam";
import FormContainer from '../components/FormContainer'
import Button from 'react-bootstrap/Button';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const CamSignup = () => {
  const webcam = useRef<Webcam>(null);
  return (
    <FormContainer>
    <h1>Facial - Login</h1>
    <Webcam
    audio={false}
    height={500}
    screenshotFormat="image/png"
    width={600}
    videoConstraints={videoConstraints}
  >
    {({ getScreenshot }) => (
      <Button variant="success"
        onClick={() => {
          const imageSrc = getScreenshot()
        }}
      >
        Capturar
      </Button>
    )}
  </Webcam>
    </FormContainer>
  )
}

export default CamSignup
