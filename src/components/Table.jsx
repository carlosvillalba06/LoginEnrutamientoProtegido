function Table({ users }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Nombre completo</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                {users.map((u,item) => (
                    <tr key={u.user}>
                        <td>{u.user}</td>
                        <td>{u.nombreCompleto}</td>
                        <td>{u.rol}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;