import { Discover } from "./components/Discover"
import { Editorial } from "./components/Editorial"
import { Welcome } from "./components/Welcome"
import { FiltersProvider } from "./context/filters"
import { ModalProvider } from "./context/modal"

function App() {
  return (
    <>
      <Welcome />
      <Editorial />
      <ModalProvider>
        <FiltersProvider>
          <Discover />
        </FiltersProvider>
      </ModalProvider>
    </>
  )
}
export default App
