import React, { createContext, useEffect, useState } from 'react';
import { API } from '../lib/axios';
import { findFlagUrlByCountryName } from 'country-flags-svg';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [users, serUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [flag, setFlag] = useState('');

    const fetchUsers = async () => {
        const response = await API.get('/?results=30');
        serUsers(response.data.results);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const setCurrentUser = (user) => {
        setSelectedUser(user);
        setFlag(getCountryFlag(user.location.country))
    };

    const getCountryFlag = (country) => {
        const flag = findFlagUrlByCountryName(country);
        debugger
        return flag
     }



    return (
        <UserContext.Provider value={{ users, selectedUser, setCurrentUser, flag }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
