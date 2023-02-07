import { LinearProgress } from "@mui/material";

const Loading = () => {
  return (
    <center>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt="whatsapp-logo"
          height="100px"
          width="100px"
          style={{ marginBottom: "2rem" }}
        />
        <LinearProgress color="success" sx={{ width: "200px" }} />
      </div>
    </center>
  );
};

export default Loading;
