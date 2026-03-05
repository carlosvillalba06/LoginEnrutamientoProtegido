import Button from "../components/Button";
import Table from "../components/Table";
import users from "../data/Users";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard({ user, setUser }) {

    const navigate = useNavigate();

    if (!user || user.rol !== 'admin') {
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
        <div className="contenedor">

            <div className="menu">
                <Button text="Ir a perfil" action={goToProfile} />
                <div className="cerrar-sesion">
                    <Button text="Cerrar sesión" action={handleLogout} />
                </div>
            </div>
            <h1>Dashboard</h1>
            <h3>Administrador: {user.nombreCompleto}</h3>
            <Table users={users} />


        </div>
    )
}

export default Dashboard;