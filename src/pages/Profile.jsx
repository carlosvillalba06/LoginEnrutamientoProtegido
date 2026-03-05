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
        <div className="contenedor">

            <div className="menu">
                <Button text="Perfil" action={() => navigate('/profile')} />

                {user.rol === 'admin' && (
                    <Button text="Dashboard" action={irDashboard} />
                )}

                <Button text="Cerrar sesión" action={handleLogout} />
            </div>

            <h1>Perfil</h1>

            <div className="perfil">
                <p><strong>Nombre:</strong> {user.nombreCompleto}</p>
                <p><strong>Rol:</strong> {user.rol}</p>
            </div>

        </div>
    );
}

export default Profile;