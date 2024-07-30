import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setchats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");

    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div> Chat Page </div>;
};

export default Chatpage;