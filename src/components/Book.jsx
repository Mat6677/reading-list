import { useContext } from "react"
import { ModalContext } from "../context/modal"

export const Book = ({ title, pages, genre, cover, synopsis, year, author }) => {
  const { modal, setModal } = useContext(ModalContext)
  const handleClick = () => {
    setModal([{ title, pages, genre, cover, synopsis, year, author }])
  }
  return (
    <>
      <div onClick={() => handleClick()} className="bg-[#15b7b711] rounded items-center p-5 cursor-pointer">
        <figure>
          <img className="rounded" src={cover} alt={title} />
        </figure>
        <h3 className="font-bold text-center">{title}</h3>
        <p className="text-xs">{genre}</p>
      </div>
    </>
  )
}
