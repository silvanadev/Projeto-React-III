import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portifolio from '../pages/Portifolio/Portifolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Diario from '../pages/Diario/Diario'
import Menu from '../components/Menu/Menu'
import Contatos from '../pages/Contatos/Contatos'
import Footer from '../components/Footer/Footer'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Sobre />} />
                <Route path='portifolio' element={<Portifolio />} />
                <Route path='comentarios' element={<Comentarios />} />
                <Route path='diario' element={<Diario />} />
                <Route path='contatos' element={<Contatos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default ApplicationRoutes