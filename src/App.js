import React, { useState } from "react"
import Message from "./Message"

const initialMessages = [
  { id: 1, content: "Essa é uma mensagem!", reactions: { "👍": 3, "🔥": 2 } },
  { id: 2, content: "Outra mensagem interessante!", reactions: { "❤️": 5 } },
]

function App() {
  const [messages, setMessages] = useState(initialMessages)

  const handleReaction = (messageId, emoji) => {
    setMessages(
      messages.map((message) =>
        message.id === messageId
          ? {
              ...message,
              reactions: {
                ...message.reactions,
                [emoji]: (message.reactions[emoji] || 0) + 1,
              },
            }
          : message
      )
    )
  }

  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} message={message} onReact={handleReaction} />
      ))}
    </div>
  )
}

export default App
