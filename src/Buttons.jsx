import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()
  return (
    <div className='btn-container'>
      <button onClick={() => handlePage('decrease')} disabled={isLoading}>
        Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => handlePage('increase')} disabled={isLoading}>
        Next
      </button>
    </div>
  )
}

export default Buttons
