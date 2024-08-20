import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setchats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");

    setchats(data);
  };

  useEffect(() => {
    fetchChats();//whenever this componet is render thisfetchchat function will be called
  }, []);

  return(
   <div> 
       {chats.map((chat) => (
      <div key={chat._id} >{chat.chatName}</div>
   ))} 
   </div>
   );
};

export default Chatpage;
