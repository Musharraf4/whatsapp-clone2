import SideBar from "@/components/SideBar";
import Head from "next/head";
import styled from "styled-components";
const ChatRoute = () => {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <SideBar />
    </Container>
  );
};

export default ChatRoute;

const Container = styled.div`
  display: flex;
`;
