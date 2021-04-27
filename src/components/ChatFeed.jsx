import React from 'react'
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
  
    const chat = chats && chats[activeChat];
  
    
  };
  
  export default ChatFeed; 