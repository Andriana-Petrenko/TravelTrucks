import { Suspense } from 'react'
import Loader from '../Loader/Loader'
import css from './Layout.module.css'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'


const Layout = ({ children }) => {
    return (
    <>
     <Suspense fallback={<Loader />}>
        <header className={css.header}>
            <Logo/>
            <Navigation/>
       </header>
        <main>{children} </main>
     </Suspense>
        </>
    
    
  )
}

export default Layout