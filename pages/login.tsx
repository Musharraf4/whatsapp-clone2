import { auth, provider } from "@/firebase";
import { Button } from "@mui/material";
import Head from "next/head";
import styled from "styled-components";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login to whatsapp</title>
      </Head>

      <LoginContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" />
        <Button
          onClick={signIn}
          variant="outlined"
          sx={{ border: "1px solid green", marginTop: "20px", color: "green" }}
        >
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;
const Logo = styled.img`
  height: 100px;
  width: 100px;
`;
