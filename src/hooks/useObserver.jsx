import { useEffect, useRef, useState } from "react";

export default function useObserver(options) {
  const [elements, setElements] = useState([])
  const [entries, setEntries] = useState([])

  const observer = useRef(new IntersectionObserver(observedEntries => {
    console.log(observedEntries)
    setEntries(observedEntries)
  }, options))

  useEffect(() => {
    const { current: currenObserver } = observer
    currenObserver.disconnect()
    if (elements.length > 0) {
      elements.forEach(element => currenObserver.observe(element))
    }
    return function cleanUp() {
      if (currenObserver) {
        currenObserver.disconnect()
      }
    }
  }, [elements])


  return [observer.current, setElements, entries]
}