import styled from "styled-components";
import { Avatar } from "@mui/material";
import getRecipientEmail from "@/utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";

const Chat = ({ id, users }: any) => {
  const router = useRouter();
  const [user]: any = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  const recipientEmail: any = getRecipientEmail(users, user);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]} </UserAvatar>
      )}

      <p>{recipientEmail}</p>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  gap: 10px;
  word-break: break;
  cursor: pointer;

  :hover {
    background-color: #eeee;
  }
`;
const UserAvatar = styled(Avatar)`
  margin: 5px;
`;
