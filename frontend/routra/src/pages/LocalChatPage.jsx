import { useState, useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ChatMessage from '../components/chat/ChatMessage';

export default function LocalChatPage() {
  const { chatMessages, sendChatMessage } = useApp();
  const [messageText, setMessageText] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSend = () => {
    const trimmed = messageText.trim();
    if (!trimmed) return;
    sendChatMessage(trimmed);
    setMessageText('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="min-h-screen bg-[#eaf3fb] pb-0 flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}telegrambg.png')` }}
    >
      <div className="sticky top-0 bg-white/95 border-b border-stone-100 z-10 px-4 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-[#447c89]/10 rounded-xl">
            <User size={20} className="text-[#447c89]" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-stone-800">Chat</h1>
            <p className="text-xs text-stone-500">Messages & booking requests</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide py-4 px-4">
        {chatMessages.length > 0 ? (
          <div className="space-y-3">
            {chatMessages.map((msg) => (
              <ChatMessage key={msg.id} msg={msg} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 px-4 py-12 text-center">
            <div className="p-4 bg-white/90 rounded-full shadow-sm">
              <User size={32} className="text-[#447c89]" />
            </div>
            <div>
              <h3 className="font-bold text-white">No Activity Yet</h3>
              <p className="text-xs text-white mt-1">Your booking requests and confirmations will appear here</p>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="sticky bottom-0 bg-white/95 border-t border-stone-200 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#447c89]/30 focus:border-[#447c89] bg-white"
          />
          <button
            type="button"
            onClick={handleSend}
            className="rounded-2xl bg-[#447c89] hover:bg-[#3a6b76] text-white text-sm font-semibold px-4 py-3 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
