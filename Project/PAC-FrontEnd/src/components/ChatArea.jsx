/* eslint-disable no-unused-vars */
// src/components/ChatArea.jsx
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../css/ChatArea.css';

const ChatArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);
  const chatMessagesRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (message.trim() !== '') {
      const newMessage = { text: message, user: true };
      setMessages([...messages, newMessage]);
      setMessage('');

      try {
        const response = await axios.post("http://localhost:3001/api/chat", {
          message,
        });

        const botReply = { text: response.data.reply, user: false };
        setMessages((prevMessages) => [...prevMessages, botReply]);
      } catch (error) {
        console.error('Error sending message to backend:', error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = chatMessagesRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      scrollToBottom();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={`chat-area ${isOpen ? 'open' : ''}`}>
      <div className="chat-icon" onClick={toggleChat}>
        {isOpen ? 'Close Chat' : 'Chat with Us'}
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header" onClick={toggleChat}>Chat with Us</div>
          <div className="chat-messages" ref={chatMessagesRef} onScroll={handleScroll}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.user ? 'user-message' : ''}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatArea;
