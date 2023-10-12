import { useContext, useState } from "react"
import { BooksContext } from "../context/book"
import { Book } from "./Book"
import { ModalContext } from "../context/modal"
import { Modal } from "./Modal"
import { FiltersContext } from "../context/filters"
import { ListBook } from "./ListBook"

export const Discover = () => {
  const { books, myBooks, minRang, maxRang } = useContext(BooksContext)
  const { modal } = useContext(ModalContext)
  const { filters, setFilters } = useContext(FiltersContext)

  const [transition, setTransition] = useState(false)
  const [minPages, setminPages] = useState(43)

  const handleChange = (e) => {
    if (!isNaN(e.target.value)) {
      setminPages(e.target.value)
    }
    setFilters({
      ...filters,
      minPages: minPages
    })
  }
  const filteredBooks = books.filter(book => book.book.pages >= filters.minPages && (filters.genre === "All" ? book.book : book.book.genre == filters.genre) && (filters.search === "" ? book.book : book.book.title.toLowerCase().includes(filters.search)))

  return (
    <main>
      <h2 className="text-center text-8xl [letter-spacing:10px] border-b-4 border-text w-fit m-auto my-20 font-harry max-[460px]:text-6xl">
        DISCOVER
      </h2>
      <div>
        <nav className="m-auto w-fit">
          <ul className="flex gap-10 [&>li]:text-4xl [&>li]:font-harry [letter-spacing:3px] px-10">
            <li><button onClick={() => setTransition(false)} className={transition ? "" : "border-b-2 border-white"}>Books</button></li>
            <li><button onClick={() => setTransition(true)} className={transition ? "border-b-2 border-white" : ""}>MyBooks</button></li>
          </ul>
        </nav>
      </div>
      <section className={transition ? "translate-x-[-50%] flex items-start min-w-fit transition-all duration-500" : "translate-x-0 flex min-w-fit transition-all duration-500"}>
        <section className="h-fit w-screen flex flex-wrap justify-center">
          <div className="flex-1 min-h-full min-w-[500px] max-[500px]:min-w-fit book-container max-[840px]:order-2">
            {filteredBooks.map(book => (
              <Book key={book.book.title} {...book.book} author={book.book.author.name} />
            ))}
          </div>
          <article className="flex-[.25] pb-20 h-fit min-w-[300px] max-[840px]:min-w-[90svw] order-1 bg-[#15b7b711] flex flex-col mt-12 m-5 p-10 filters">
            <label htmlFor="">Search</label>
            <input onChange={(e) => {
              setFilters({
                ...filters,
                search: e.target.value
              })
            }} type="text" className="rounded-xl mb-5" />
            <label htmlFor="">Min Pages - {minPages}</label>
            <input onChange={handleChange} type="range" min={minRang} max={maxRang} name="" id="" className="mb-5" />
            <label htmlFor="">Genre</label>
            <select onChange={(e) => {
              setFilters({
                ...filters,
                genre: e.target.value
              })
            }} name="" id="" className="[&>option]:bg-[#000a]">
              <option value="All">All</option>
              <option value="Fantasía">Fantasy</option>
              <option value="Ciencia ficción">Science fiction</option>
              <option value="Zombies">Zombies</option>
              <option value="Terror">Terror</option>
            </select>
          </article>
        </section>



        <section className={transition ? "w-screen h-fit flex flex-col justify-start px-5" : "hidden"}>
          <h2 className="text-center text-6xl font-libro mt-[50px]">Your Book List</h2>
          <div className="flex-1 min-h-full list-book-container">
            {
              myBooks.map(book => <ListBook key={book.synopsis} {...book} />)
            }
          </div>
        </section>
      </section>
      <div className={modal ? "modal-show" : "modal-hidden"}>{
        modal ? <Modal /> : ""
      }</div>
    </main>
  )
}
