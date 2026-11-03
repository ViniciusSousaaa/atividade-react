import { useState, useEffect, useRef } from 'react'

function Dropdown({ label, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSelect(option) {
    option.onClick()
    setIsOpen(false)
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} ▾
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index}>
              <button onClick={() => handleSelect(option)}>{option.label}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown