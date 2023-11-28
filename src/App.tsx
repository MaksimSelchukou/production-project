import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./pages/mainPage/mainPage.async";
import {AboutPageAsync} from "./pages/aboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    console.log('app перерисовывается')
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About me</Link>
            <Suspense fallback={<div>...LOADING</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;