import Accordion from './components/Accordion'

const faqItems = [
  { title: 'Como faço um pedido?', content: 'Escolha o produto, clique em comprar e siga as etapas do carrinho.' },
  { title: 'Qual o prazo de entrega?', content: 'O prazo médio é de 5 a 10 dias úteis, dependendo da região.' },
  { title: 'Posso trocar um produto?', content: 'Sim, você tem até 7 dias após o recebimento para solicitar a troca.' },
]

function App() {
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
      </main>

      <footer className="footer">
        <p></p>
      </footer>
    </>
  )
}

export default App