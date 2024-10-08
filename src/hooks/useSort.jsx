import { useState } from 'react'

export function useSort(initialValue = false) {
  const [sort, setSort] = useState(initialValue)

  const handleSort = () => {
    setSort(prevSort => !prevSort)
  }

  return { sort, handleSort }
}
