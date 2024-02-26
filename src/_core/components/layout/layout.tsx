import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className='h-full overflow-scroll bg-countries-100 dark:bg-countries-900'>
            <header className='bg-white dark:bg-countries-500 h-20 shadow-md fixed inset-0'>
                <div className='h-full container px-4 flex items-center justify-between mx-auto'>
                    <h2 className='text-black dark:text-white text-xl font-bold'>Where in the world?</h2>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className={
                            'text-black dark:text-white text-lg flex items-center gap-2 rounded-md p-2 hover:bg-gray-100 hover:dark:bg-countries-900'
                        }
                    >
                        {theme === 'light' ? (
                            <>
                                <MdDarkMode />
                                Dark Mode
                            </>
                        ) : (
                            <>
                                <MdOutlineDarkMode />
                                Light Mode
                            </>
                        )}
                    </button>
                </div>
            </header>

            <main className='container p-4 mx-auto mt-20'>{children}</main>
        </div>
    )
}

export default Layout
