import { createContext, useState } from "react";
import { library } from "../mocks/books.json"

export const BooksContext = createContext()

export function BooksProvider({ children }) {
    const initialMyBooks = JSON.parse(localStorage.getItem("myBooks")) || []
    const books = library
    const [myBooks, setMyBooks] = useState(initialMyBooks)
    const numOfPages = []
    for (let i = 0; i < library.length; i++) {
        numOfPages.push(library[i].book.pages)
    }
    const minRang = Math.min(...numOfPages)
    const maxRang = Math.max(...numOfPages)

    const addToMyBooks = (book) => {
        setMyBooks([...myBooks, book])
        window.localStorage.setItem("myBooks", JSON.stringify([...myBooks, book]))
    }

    const removeFromMyBooks = (book) => {
        const newBooks = myBooks.filter(myBook => myBook.title != book.title)
        setMyBooks(newBooks)
        window.localStorage.setItem("myBooks", JSON.stringify(newBooks))
    }

    const isRepeat = (book) => {
        for (let i = 0; i < myBooks.length; i++) {
            if (myBooks[i].title == book[0].title) {
                return true
            } else {
                return false
            }

        }
    }

    return (
        <BooksContext.Provider value={{ books, myBooks, setMyBooks, minRang, maxRang, addToMyBooks, removeFromMyBooks, isRepeat }}>
            {children}
        </BooksContext.Provider>
    )
}