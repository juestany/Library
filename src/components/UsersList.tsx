import MenuAppBar from "./MenuAppBar";
import Book from "./Book";
import React, {useEffect, useState} from "react";
import { TextField, Button, Grid, Box, Container } from '@mui/material'
import {useApi} from "../api/ApiProvider";
import User from "./User";


function UsersList() {

    const apiClient = useApi();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        apiClient.getUsers().then((response) => {
            console.log(response.data);
            setUsers(response.data);
        });
    }, []);

    return (
        <>
            <MenuAppBar/>
            <Container>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.length > 0 && users.map(user => (
                        <User
                            key={user.id}
                            id={user.id}
                            username={user.username}
                            email={user.email}
                            name={user.name}
                            role={user.role}
                        />
                    ))}
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default UsersList;