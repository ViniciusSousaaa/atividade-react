import { useState } from 'react'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={index} className="accordion-item">
            <h3>
              <button
                id={`accordion-button-${index}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${index}`}
                onClick={() => handleToggle(index)}
              >
                {item.title} {isOpen ? '-' : '+'}
              </button>
            </h3>
            <div
              id={`accordion-panel-${index}`}
              role="region"
              aria-labelledby={`accordion-button-${index}`}
              aria-hidden={!isOpen}
              className={isOpen ? 'accordion-panel open' : 'accordion-panel'}
            >
              <p>{item.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion