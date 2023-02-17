import { useGlobalContext } from './context'
import ToggleTheme from './ToggleTheme'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (
    <>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <div className='flex'>
          <h2>Search HackerNews</h2>
          <ToggleTheme></ToggleTheme>
        </div>
        <input
          type='text'
          className='form-input'
          value={query}
          placeholder='Search for articles'
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </>
  )
}

export default SearchForm
