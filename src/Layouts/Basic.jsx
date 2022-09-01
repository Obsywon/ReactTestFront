import {useContext} from 'react'
import Navigation from '../Components/Navigation'
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContext';

/**
 * Basic layout with a navigation bar
 * @returns Layout
 */
export default function Basic() {
    const {theme} = useContext(ThemeContext)

    return (
        <>
        <header className={theme ? 'darkContainer' : 'lightContainer'}>
            <Navigation />
        </header>
        <main className={theme ? 'page darkContainer' : 'page lightContainer'}><Outlet/></main>
        </> 
    )
}
