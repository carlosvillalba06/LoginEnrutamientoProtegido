import {useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import users  from "./data/Users";
import Input from "../components/Input";
import Button from "../components/Button";
import InputPassword from "../components/InputPassword";

function Login({user, setUser}) {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if(user){
        if(user.rol === 'admin'){
            return <Navigate to="/dashboard" replace />
        }
        return <Navigate to="/profile" replace />
    }

    const handleLogin = () => {

        const usuarioIniciado = users.find(
            (usuario) => usuario.user === username && usuario.contrasena === password
        );

        if (usuarioIniciado) {

            setUser(usuarioIniciado);
            if (usuarioIniciado.rol === 'admin') {
                navigate("/dashboard");
            } else {
                navigate("/profile");
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    }

    return (
        <>
            <h1>Login</h1>
            <div>
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <InputPassword
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button text="Iniciar sesion" action={handleLogin} />

        </>
    );
}

export default Login;   