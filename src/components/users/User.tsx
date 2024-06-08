import React from "react";

interface User {
    id: number,
    username: string,
    email: string,
    name: string,
    role: string,
    // password: string,
}

const User: React.FC<User> = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.name}</td>
            <td>{props.role}</td>
            {/*<td>{props.password}</td>*/}
        </tr>
    );
};

export default User;