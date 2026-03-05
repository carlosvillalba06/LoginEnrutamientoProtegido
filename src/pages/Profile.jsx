import { Navigate,useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Profile({ user, setUser }) {

        const navigate = useNavigate();


    if (!user) {
        return <Navigate to="/login" />
    }

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
                navigate('/login');

    };

      const irDashboard = () => {
       navigate('/dashboard');
    }

    return (
        <>
            <h2>Bienvenido a tu perfil</h2>
            <p>Nombre : {user.nombreCompleto}</p>
            <p>Rol : {user.rol}</p>

            {user.rol === 'admin' && ( 
                <Button text="Dashboard" action={irDashboard} />

            )}

            <Button text="Cerrar sesion" action={handleLogout} />

        </>
    );
}

export default Profile;