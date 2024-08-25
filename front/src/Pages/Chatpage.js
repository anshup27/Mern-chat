import React, { useEffect, useState } from "react";
import axios from "axios";
import { Backend_url } from "../config";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      // Retrieve userInfo from localStorage and parse it
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      // Extract the token from userInfo
      const token = userInfo?.token;

      // If token exists, make the API request with Authorization header
      const { data } = await axios.get(`${Backend_url}/api/chat`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setChats(data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats?.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chatpage;
