import './App.css'
import { Heroes } from './components/Heros'
import { useHeroes } from './hooks/useHeroes'
import { useSearch } from './hooks/useSearch'
import { useSearchForm } from './hooks/useSearchForm'
import { useSort } from './hooks/useSort'

function App() {
  const { sort, handleSort } = useSort() 
  const { search, setSearch, error} = useSearch()
  const { heroes, getHeroes, loading } = useHeroes({ search, sort })
  const { handleSubmit, handleChange } = useSearchForm({ getHeroes, setSearch })

return (
    <div className="page">
      <header>
        <h1>Star Wars</h1>
        <h2>Heroes Finder</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} name='search' value={search} placeholder="Luke, Leia, Anakin..." style={{border: "1px solid transparent", borderColor: error ? "red" : "transparent"}}/>
          <input type="checkbox" onChange={handleSort} checked={sort} />Sort by name
          <button type='submit'>buscar</button>
        </form>
        {error && <p style={{color: 'red'}} className='error'>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> :
          <Heroes heroes={heroes}/>
        }
      </main>
    </div>
  )
}

export default App
