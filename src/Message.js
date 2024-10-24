import React, { useState } from "react"

const emojiTray = ["👍", "❤️", "🔥", "😂", "😢", "😮"]

const Message = ({ message, onReact, userId }) => {
  const [isEmojiTrayOpen, setIsEmojiTrayOpen] = useState(false)

  const toggleEmojiTray = () => {
    setIsEmojiTrayOpen(!isEmojiTrayOpen)
  }

  const handleEmojiClick = (emoji) => {
    onReact(message.id, emoji, userId)
    setIsEmojiTrayOpen(false) // Fecha a bandeja após a seleção
  }

  // Obter a lista de emojis reagidos e calcular a soma total das reações
  const totalReactions = Object.values(message.reactions).reduce(
    (sum, count) => sum + count,
    0
  )
  const reactedEmojis = Object.keys(message.reactions).filter(
    (emoji) => message.reactions[emoji] > 0
  )

  return (
    <div style={{ marginBottom: "20px", position: "relative" }}>
      <p>{message.content}</p>

      {/* Botão de reações (emojis reagidos + total de reações) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
          padding: "5px 10px",
          backgroundColor: "#f3f3f3",
          borderRadius: "20px",
        }}
        onClick={toggleEmojiTray} // O mesmo botão abre a bandeja
      >
        {/* Exibe todos os emojis reagidos */}
        {reactedEmojis.map((emoji) => (
          <span key={emoji} style={{ fontSize: "20px" }}>
            {emoji}
          </span>
        ))}

        {/* Exibe a soma total de reações */}
        {totalReactions > 0 && (
          <span style={{ fontSize: "20px", marginLeft: "10px" }}>
            {totalReactions}
          </span>
        )}

        {/* Se não houver reações, mostre um emoji genérico */}
        {totalReactions === 0 && <span style={{ fontSize: "20px" }}>😊</span>}
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
            top: "5px",
            zIndex: 100,
            left: "200px",
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
