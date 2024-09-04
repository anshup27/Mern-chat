// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Backend_url } from "../config";

import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import ChatBox from "../Components/ChatBox";
import MyChats from "../Components/MyChats";

const Chatpage = () => {
  const { user } = ChatState();
  // console.log(user.name);
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {/* {user && <SideDrawer />} */}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {/* {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )} */}
      </Box>
    </div>
  );
};

export default Chatpage;
