import { useEffect } from 'react'

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [message, onClose])

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <span>{message}</span>
      <button onClick={onClose} aria-label="Fechar notificação">
        ×
      </button>
    </div>
  )
}

export default Toast