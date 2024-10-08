import { useCallback } from 'react'
import debounce from 'just-debounce-it'

export function useSearchForm({ getHeroes, setSearch }) {
  // Debounce para controlar el delay en la búsqueda
  const debouncedGetHeroes = useCallback(
    debounce(search => {
      getHeroes({ search })
    }, 500),
    [getHeroes]
  )

  // Manejo del submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    getHeroes({ search: event.target.search.value })
  }

  // Manejo del cambio en el input
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetHeroes(newSearch)
  }

  return { handleSubmit, handleChange }
}
