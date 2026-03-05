import Button from "../components/Button";
import Table from "../components/Table";
import users from "../data/Users"; 
import { Navigate,useNavigate } from "react-router-dom";

function Dashboard({ user, setUser }) {

    const navigate = useNavigate();

    if (  !user ||user.rol !== 'admin') {
        return <Navigate to='/profile' />
    }
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate('/login');
    }

    const goToProfile = () => {
        navigate('/profile');
    }
    return (
        <>
            <h1>Bienvenido al dashboard</h1>
            <Table users={users} />
            <Button text="Ir a perfil" action={goToProfile}/>
            <Button text="Cerrar sesión" action={handleLogout} />
        </>
    )
}

export default Dashboard;