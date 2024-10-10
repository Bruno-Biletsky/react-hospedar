import { Link } from "react-router-dom"

const Nav =()=>{
    return(
        <>
        <h1>!--NAV--!</h1>
        <Link to='/'>Home</Link>
        <Link to='/produto'>Cadastrar Produto</Link>

        </>
    )
}
export default Nav