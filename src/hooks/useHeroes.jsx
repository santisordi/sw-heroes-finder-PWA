import { useCallback, useMemo, useRef, useState } from 'react'
import { searchHeroes } from '../../services/heroService'

export function useHeroes ({ search, sort }){
    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

      //callback to creat the function only when search is use  
      const getHeroes =useCallback( 
        async ({search}) => {
        if(search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newHeroes = await searchHeroes({ search})
            setHeroes(newHeroes)
        } catch (e) {
            setError(e.message)
        }finally{
            setLoading(false)
        }
      },[])

    //useMemo for calculation
    const sortedHeroes = useMemo(()=>{
        console.log('object');
        return sort
    ? [...heroes].sort((a, b)=> a.name.localeCompare(b.name))
    : heroes

    }, [sort, heroes] ) 
    return { heroes: sortedHeroes, getHeroes, loading, error}
  }
  