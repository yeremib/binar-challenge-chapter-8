import "./Table.css";

const Table = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <td>id</td>
                    <td>username</td>
                    <td>email</td>
                    <td>experience</td>
                    <td>level</td>
                    <td>Action</td>
                </tr>
            </thead>

            <tbody>
                { props.players.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.experience}</td>
                            <td>{item.level}</td>
                            <td>
                                <button onClick={() => props.onEditData(item)}>edit</button>
                                <button onClick={() => props.onDeleteData(item)}>delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default Table;