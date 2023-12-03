import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import home from "./pages/home"


function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
