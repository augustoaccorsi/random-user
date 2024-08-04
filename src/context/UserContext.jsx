import React, { createContext, useEffect, useState } from 'react';
import { API } from '../lib/axios';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [users, serUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    const fetchUsers = async () => {
        const response = await API.get('/?results=30');
        serUsers(response.data.results);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const setCurrentUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <UserContext.Provider value={{ users, selectedUser, setCurrentUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
