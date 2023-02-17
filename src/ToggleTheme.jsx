import { useGlobalContext } from './context'

const ToggleTheme = () => {
  const { theme, toggleTheme } = useGlobalContext()
  return (
    <button
      className='btn'
      onClick={() => {
        toggleTheme(theme)
      }}
    >
      {theme === 'lightTheme' ? 'Dark' : 'Light'}
    </button>
  )
}

export default ToggleTheme
