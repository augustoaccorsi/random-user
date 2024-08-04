import React from 'react';
import { CardConteiner } from './styles';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Card = ({ user }) => {
    const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    return (
        <CardConteiner>
            <header>
                <img src={user.picture.medium} alt="" />
                <h1>{userName}</h1>
            </header>
            <main>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                itaque, ducimus numquam veniam suscipit consectetur hic iste
            </main>
            <footer>
                <span>
                    <FaUser />
                    {` ${user.login.username}`}
                </span>
                <span>
                    <MdEmail />
                    {` ${user.email}`}
                </span>
            </footer>
        </CardConteiner>
    );
};

export default Card;
