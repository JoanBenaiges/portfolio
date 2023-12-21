import { Routes, Route } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<About />} />
            <Route path={'/contact-me'} element={<p> prueba </p>} />
        </Routes>
    )
}

export default AppRoutes