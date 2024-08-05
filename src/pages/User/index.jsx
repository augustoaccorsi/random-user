import React, { useContext, useEffect, useState } from 'react';
import {
    UserConteiner,
    NameConteiner,
    LocationContainer,
    PersonalContainer,
    InfoContainer,
    AccountContainer,
} from './styles';
import { UserContext } from '../../context/UserContext';
import { API } from '../../lib/axios';
import { FaMale, FaFemale, FaGithub, FaTwitter } from 'react-icons/fa';
import { findFlagUrlByCountryName } from 'country-flags-svg';
import { MdOutlineMailOutline, MdOutlineLocalPhone } from 'react-icons/md';
import { format } from 'date-fns';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { CiLinkedin } from 'react-icons/ci';

const User = () => {
    //const {selectedUser} = useContext(UserContext);
    const [selectedUser, setSelectedUser] = useState({});
    const [flag, setFlag] = useState('');

    const fetchUsers = async () => {
        const response = await API.get('/?results=1');
        setSelectedUser(response.data.results[0]);
        getCountryFlag(response.data.results[0].location.country);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const getCountryFlag = (country) => {
        const flag = findFlagUrlByCountryName(country);
        setFlag(flag);
    };

    return (
        <>
            <UserConteiner>
                <NameConteiner variant={selectedUser?.gender}>
                    <img src={selectedUser?.picture?.large} alt="" />
                    <main>
                        <h1>{`${selectedUser?.name?.title} ${selectedUser?.name?.first} ${selectedUser?.name?.last}`}</h1>
                        <span>
                            {selectedUser?.gender === 'male' ? (
                                <FaMale size={50} />
                            ) : (
                                <FaFemale size={50} />
                            )}
                        </span>
                    </main>
                </NameConteiner>
            </UserConteiner>
            <InfoContainer>
                <LocationContainer>
                    <h1>Location</h1>
                    <header>
                        <h2>Address Info</h2>
                    </header>
                    <main>
                        <div>
                            <h3>{`${selectedUser?.location?.city}, ${selectedUser?.location?.state} - ${selectedUser?.location?.country}`}</h3>
                            <img src={flag} alt="" />
                        </div>
                        <div>
                            <h3>Coordinates</h3>
                            <div>
                                <span>
                                    {
                                        selectedUser?.location?.coordinates
                                            ?.latitude
                                    }
                                </span>
                                <span>
                                    {
                                        selectedUser?.location?.coordinates
                                            ?.longitude
                                    }
                                </span>
                            </div>
                        </div>
                    </main>
                    <footer>
                        <span>{selectedUser?.location?.timezone?.offset}</span>
                        <span>
                            {selectedUser?.location?.timezone?.description}
                        </span>
                    </footer>
                </LocationContainer>
                <PersonalContainer>
                    <h1>Personal Data</h1>
                    <header>
                        <h2>Bio</h2>
                    </header>
                    <main>
                        <p>
                            I am a web developer with two years of experience in
                            the industry. Specializing in front-end development,
                            I have a keen eye for design and a passion for
                            creating visually stunning, user-friendly websites.
                            I'm proficient in HTML, CSS, JavaScript, and have
                            experience working with modern frameworks like React
                            and Vue.js.
                        </p>
                        <p>
                            Outside of coding, I'm an avid rock climber. Whether
                            scaling indoor walls or venturing out to natural
                            cliffs, I enjoy the physical challenge and the
                            thrill of reaching new heights. My climbing hobby
                            has instilled in me a strong sense of perseverance
                            and problem-solving, skills that I seamlessly apply
                            to my work in web development.
                        </p>
                    </main>
                    <footer>
                        <span>
                            <MdOutlineLocalPhone size={30} />
                            {selectedUser?.cell}
                        </span>
                        <span>
                            <LiaBirthdayCakeSolid size={30} />
                            {selectedUser?.dob?.date &&
                                format(
                                    new Date(selectedUser?.dob?.date),
                                    "LLLL' 'qo"
                                )}
                        </span>
                    </footer>
                </PersonalContainer>

                <AccountContainer>
                    <h1>Account Info</h1>
                    <span>
                        <MdOutlineMailOutline size={30} />
                        {selectedUser?.email}
                    </span>
                    <span>
                        <FaGithub size={30} />
                        {selectedUser?.login?.username}
                    </span>
                    <span>
                        <FaTwitter size={30} />
                        {selectedUser?.login?.username}
                    </span>
                    <span>
                        <CiLinkedin size={30} />
                        {selectedUser?.login?.username}
                    </span>
                </AccountContainer>
            </InfoContainer>
        </>
    );
};

export default User;
