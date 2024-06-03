import {Link} from 'react-router-dom'
import logo from './assets/react.svg'

const Home = () =>{
    return (
        <>
            <Link to="/inicio">
            <img src={logo} width="100" alt="logo" class="home"/>
            </Link>

        </>
    )
}
export default Home