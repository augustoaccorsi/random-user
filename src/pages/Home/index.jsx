import React, { useContext } from 'react';
import { HomeContainer } from './styles';
import Card from './Card/index';
import { UserContext } from '../../context/UserContext';

const Home = () => {
    const { users } = useContext(UserContext);
    return (
        <HomeContainer>
            {users?.map((user) => (
                <Card key={user.login.uuid} user={user} />
            ))}
        </HomeContainer>
    );
};

export default Home;
