'use client'

import { useEffect, useState } from 'react'

export default function ChatHistoryPage() {
  const [history, setHistory] = useState<any[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('tanvi-chat-history')
    if (stored) {
      setHistory(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="border-b border-red-500 bg-black sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center text-white">
            <span className="text-red-500">Tanvi</span> Chatbot History
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
          {history.length > 0 ? (
            history.map((msg, index) => (
              <div key={index} className={`text-sm px-4 py-2 rounded ${msg.role === 'user' ? 'bg-red-600' : 'bg-gray-700'}`}>
                <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No chat history found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
