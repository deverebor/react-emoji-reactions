import React, { useState } from "react"
import ReactionButton from "./ReactionButton"

const emojiTray = ["👍", "❤️", "🔥", "😂", "😢", "😮"]

const Message = ({ message, onReact }) => {
  const [isEmojiTrayOpen, setIsEmojiTrayOpen] = useState(false)

  const toggleEmojiTray = () => {
    setIsEmojiTrayOpen(!isEmojiTrayOpen)
  }

  const handleEmojiClick = (emoji) => {
    onReact(message.id, emoji)
    setIsEmojiTrayOpen(false) // Fechar bandeja após selecionar emoji
  }

  return (
    <div style={{ marginBottom: "20px", position: "relative" }}>
      <p>{message.content}</p>
      <div>
        {Object.entries(message.reactions).map(([emoji, count]) => (
          <ReactionButton key={emoji} emoji={emoji} count={count} />
        ))}
        <button onClick={toggleEmojiTray} style={{ marginLeft: "10px" }}>
          😊
        </button>
      </div>

      {/* Bandeja de Emojis */}
      {isEmojiTrayOpen && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            top: "40px",
            zIndex: 100,
            display: "flex",
            gap: "5px",
          }}
        >
          {emojiTray.map((emoji) => (
            <button key={emoji} onClick={() => handleEmojiClick(emoji)}>
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Message
