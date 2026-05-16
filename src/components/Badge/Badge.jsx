import React from 'react'
import './Badge.css'

function Badge({
  text = 'Badge',
  variant = 'primary',
  pill = false,
}) {
  return (
    <span
      className={`uiverse-badge uiverse-badge--${variant} ${
        pill ? 'uiverse-badge--pill' : ''
      }`}
    >
      {text}
    </span>
  )
}

export default Badge