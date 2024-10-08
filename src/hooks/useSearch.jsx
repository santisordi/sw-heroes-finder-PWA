import { useEffect, useRef, useState } from "react"


export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
  
    if (search === ''){
      setError('Can search an empty Hero')
      return
    }
  
    if(search.length < 3){
      setError("La búsqueda debe tener al menos 3 caracteres")
    }
    setError(null)
  }, [search])

    return { search, setSearch, error }
  }