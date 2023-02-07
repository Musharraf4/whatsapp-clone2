import { Avatar, Button, IconButton } from "@mui/material";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import emailvalidator from "email-validator";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
function SideBar() {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user?.email);
  const [chatsSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt(
      "Please enter an email for the user you wish to chat with"
    );
    if (!input) return null;

    if (
      emailvalidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user?.email
    ) {
      db.collection("chats").add({
        users: [user?.email, input],
      });
    }
  };

  const chatAlreadyExists = (recipientEmail: any) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user: any) => user === recipientEmail)?.length >
        0
    );

  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()} src={user?.photoURL} />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <div style={{ textAlign: "center" }}>
        <SidebarButton onClick={createChat} fullWidth>
          Start a new chat
        </SidebarButton>
      </div>
      <div className={inter.className}>
        {/* Lists of Chat */}
        {chatsSnapshot?.docs?.map((chat) => {
          return (
            <Chat key={chat?.id} id={chat?.id} users={chat?.data().users} />
          );
        })}
      </div>
    </Container>
  );
}
export default SideBar;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;
const SidebarButton = styled(Button)`
  color: black;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const IconsContainer = styled.div``;
