import { useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ChatMessage from '../components/chat/ChatMessage';

export default function LocalChatPage() {
  const { chatMessages } = useApp();
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <div className="min-h-screen bg-stone-50 pb-20 flex flex-col">
      <div className="sticky top-0 bg-white border-b border-stone-100 z-10 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-green-100 rounded-xl">
            <User size={20} className="text-green-700" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-stone-800">Chat</h1>
            <p className="text-xs text-stone-500">Messages & booking requests</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide py-4 flex flex-col justify-end">
        {chatMessages.length > 0 ? (
          <div className="space-y-2 px-4">
            {chatMessages.map((msg) => (
              <ChatMessage key={msg.id} msg={msg} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 px-4 py-12 text-center">
            <div className="p-4 bg-stone-100 rounded-full">
              <User size={32} className="text-stone-400" />
            </div>
            <div>
              <h3 className="font-bold text-stone-600">No Activity Yet</h3>
              <p className="text-xs text-stone-400 mt-1">Your booking requests and confirmations will appear here</p>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}
