import { useContext, useEffect } from "react"
import { BooksContext } from "../context/book"
import { SliderItem } from "./Slider/SliderItem"
import useObserver from "../hooks/useObserver"

export const Editorial = () => {
  const { books } = useContext(BooksContext)
  const classes1 = ['hidden-left', 'show', 'hidden-right']

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null
  })

  useEffect(() => {
    const images = document.querySelectorAll(".lazy")
    setElements(images)
  }, [setElements])

  useEffect(() => {
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
        const lazyImg = entry.target
        lazyImg.classList.remove("lazy")
        observer.unobserve(lazyImg)
      }
    })
  }, [entries, observer])

  return (
    <>
      <section className="flex flex-wrap p-20 max-lg:pr-5 items-center bg-primary max-[839px]:p-5 max-[800px]:text-center max-[450px]:p-0">
        <div className="flex-1 min-w-[300px] max-[450px]:px-5">
          <h2 className="text-3xl font-bold">We are an international Editorial who wants to extends this beautiful world</h2>
          <p className="text-xl mt-10">Take a tour of this incredible world of reading, from the most terrifying books to the most exciting ones</p>
        </div>
        <div className="flex-[1] min-w-[400px] max-[450px]:min-w-[300px] mx-5 max-[840px]:mt-20 max-[840px]:mx-0 flex flex-col items-center">
          <div className="slider flex">
            {
              books.slice(0, 3).map((book, index) => (
                <SliderItem key={book.book.ISBN} cover={book.book.cover} className={classes1[index]} />
              ))
            }
          </div>
          <h3 className="text-center font-bold">Enjoy your jouney with our titles</h3>
        </div>
      </section>
      <div className="layer2 bg-[url('src/svg/layer2.svg')] h-[360px]"></div>
    </>
  )
}
