import { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import ChatMessage from './ChatMessage';

export default function ChatWindow() {
  const { chatMessages } = useApp();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <div className="flex-1 overflow-y-auto py-3" style={{ paddingBottom: 8 }}>
      {chatMessages.map(msg => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
