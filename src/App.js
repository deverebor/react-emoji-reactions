import React, { useState } from "react"
import Message from "./Message"

const initialMessages = [
  {
    id: 1,
    content: "Essa é uma mensagem!",
    reactions: { "👍": 3, "🔥": 2 },
    userReactions: {},
  },
  {
    id: 2,
    content: "Outra mensagem interessante!",
    reactions: { "❤️": 5 },
    userReactions: {},
  },
  {
    id: 3,
    content: "Essa é uma mensagem sem reações.",
    reactions: {},
  },
]

function App() {
  const [messages, setMessages] = useState(initialMessages)

  const handleReaction = (messageId, emoji, userId) => {
    setMessages(
      messages.map((message) => {
        if (message.id === messageId) {
          const userHasReacted = message.userReactions[userId] === emoji

          // Se o usuário já reagiu com o emoji, removemos a reação
          const updatedReactions = userHasReacted
            ? { ...message.reactions, [emoji]: message.reactions[emoji] - 1 }
            : {
                ...message.reactions,
                [emoji]: (message.reactions[emoji] || 0) + 1,
              }

          const updatedUserReactions = userHasReacted
            ? { ...message.userReactions, [userId]: null } // Remove reação
            : { ...message.userReactions, [userId]: emoji } // Adiciona reação

          return {
            ...message,
            reactions: updatedReactions,
            userReactions: updatedUserReactions,
          }
        }
        return message
      })
    )
  }

  return (
    <div>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          onReact={handleReaction}
          userId="user123"
        />
      ))}
    </div>
  )
}

export default App
