import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../context/modal"
import { BooksContext } from "../context/book"

export const Modal = () => {
  const { modal, setModal } = useContext(ModalContext)
  const { addToMyBooks, removeFromMyBooks, isRepeat } = useContext(BooksContext)
  const [repeat, setRepeat] = useState(false)
  console.log(modal)
  useEffect(() => {
    setRepeat(isRepeat(modal))
  }, [])

  return (
    <div className={modal ? "modal-show" : "modal-hidden"}>
      <div className="bg-[#040b0bcc] backdrop-blur-[5px] min-h-screen h-fit min-w-screen flex flex-nowrap justify-center max-lg:flex-wrap">
        <figure className="w-1/3 min-w-[400px] max-h-screen p-10 max-[425px]:p-2 max-[425px]:min-w-[300px]">
          <img className="w-full h-full rounded" src={modal[0].cover} alt={modal[0].title} />
        </figure>
        <section className="flex flex-col p-10 min-w-[200px] max-w-full max-[376px]:p-2">
          <h2 className="text-5xl font-libro border-b-2 pb-1 pl-2 border-secondary">{modal[0].title}</h2>
          <ul className="flex flex-col gap-5 mb-10 pt-5 pl-5 [&>li]:first-line:font-bold [&>li]:text-secondary [&>li]:first-line:text-xl [&>li]:first-line:text-white">
            <li>Genre <br />{modal[0].genre}</li>
            <li>Year<br />{modal[0].year}</li>
            <li>Pages<br />{modal[0].pages}</li>
            <li>Sinopsis<br />{modal[0].synopsis}</li>
            <li>Author<br />{modal[0].author}</li>
          </ul>
          <div className="[&>button]:w-fit [&>button]:py-2 [&>button]:rounded [&>button]:px-5 flex gap-5">
            {
              repeat ? <button onClick={() => {
                removeFromMyBooks(...modal)
                setModal(null)
              }} className="bg-[#f007] hover:text-[#000a] transition-all">Remove from MyBooks</button>
                : <button onClick={() => {
                  addToMyBooks(...modal)

                  setModal(null)
                }} className="hover:bg-secondary hover:text-[#000a] transition-all">Add to MyBooks</button>
            }
            <button onClick={() => setModal(null)} className="hover:bg-secondary hover:text-[#000a] transition-all">Back</button>
          </div>
        </section>
      </div>
    </div>
  )
}
