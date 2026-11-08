
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === 'light'
          ? 'Activer le mode sombre'
          : 'Activer le mode clair'
      }
      title={
        theme === 'light'
          ? 'Activer le mode sombre'
          : 'Activer le mode clair'
      }
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
    >
      {theme === 'light' ? (
        <Moon size={18} />
      ) : (
        <Sun size={18} />
      )}
    </button>
  )
}

export default ThemeSwitcher
