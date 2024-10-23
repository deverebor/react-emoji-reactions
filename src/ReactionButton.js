import React from "react"

const ReactionButton = ({ emoji, count }) => {
  return (
    <button>
      {emoji} {count}
    </button>
  )
}

export default ReactionButton
