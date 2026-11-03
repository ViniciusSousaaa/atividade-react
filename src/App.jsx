import { useState } from 'react'
import Accordion from './components/Accordion'
import Pagination from './components/Pagination'

const faqItems = [
  { title: 'Como faço um pedido?', content: 'Escolha o produto, clique em comprar e siga as etapas do carrinho.' },
  { title: 'Qual o prazo de entrega?', content: 'O prazo médio é de 5 a 10 dias úteis, dependendo da região.' },
  { title: 'Posso trocar um produto?', content: 'Sim, você tem até 7 dias após o recebimento para solicitar a troca.' },
]

const products = [
  'Notebook', 'Mouse', 'Teclado', 'Monitor',
  'Headset', 'Webcam', 'Impressora', 'Cadeira gamer',
  'Pendrive', 'HD externo', 'Roteador', 'Microfone',
]
const ITEMS_PER_PAGE = 4

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const visibleProducts = products.slice(start, start + ITEMS_PER_PAGE)

  return (
    <>
      <header className="header">
        <h1>Atividade React</h1>
      </header>

      <main className="grid">
        <section className="card">
          <h2>Acordeão (FAQ)</h2>
          <Accordion items={faqItems} />
        </section>

        <section className="card">
          <h2>Paginação (Produtos)</h2>
          <ul>
            {visibleProducts.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </section>
      </main>

      <footer className="footer">
        <p></p>
      </footer>
    </>
  )
}

export default App