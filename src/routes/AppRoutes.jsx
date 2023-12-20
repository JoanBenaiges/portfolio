import { Routes, Route } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<About />} />
            <Route path={'/contactme'} element={<Contact />} />
        </Routes>
    )
}

export default AppRoutes