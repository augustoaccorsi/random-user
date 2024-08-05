import styled from 'styled-components';

export const UserConteiner = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    margin-top: -5rem;
`;

export const InfoContainer = styled.div`
    display: flex;
`;

export const NameConteiner = styled.div`
    height: 15rem;
    width: 43rem;

    background: ${(props) => props.theme['base-post']};

    padding: 1rem;
    border-radius: 8px;

    display: flex;

    img {
        border-radius: 8px;
        border: 4px solid
            ${(props) =>
                props.variant === 'female'
                    ? props.theme['purple']
                    : props.theme['blue']};
    }

    main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-left: 2rem;
        gap: 1rem;

        h1 {
            color: ${(props) => props.theme['white']};
        }

        svg {
            background: ${(props) =>
                props.variant === 'female'
                    ? props.theme['purple']
                    : props.theme['blue']};
            color: ${(props) => props.theme['white']};
            height: 6rem;
            width: 6rem;
            border-radius: 50%;

            padding: 1rem;
        }
    }
`;

export const LocationContainer = styled.div`
    padding: 5rem;

    width: 25%;

    /* border: 0.1px solid
        ${(props) =>
        props.variant === 'female'
            ? props.theme['purple']
            : props.theme['blue']}; */

    header {
    }

    main {
        :first-child {
            display: flex;
            align-items: center;

            gap: 1rem;

            img {
                height: 4rem;
                width: 4rem;
            }
        }

        padding: 1rem 0rem;
        div {
            display: flex;
            gap: 0.5rem;
        }
    }

    footer {
        display: flex;
        gap: 0.5rem;
    }
`;

export const PersonalContainer = styled.div`
    padding: 5rem;

    width: 50%;

    main {
        display: grid;
        gap: 1rem;
        text-align: justify;
    }

    footer {
        display: flex;
        gap: 1rem;

        align-items: center;

        margin-top: 1rem;

        svg {
            margin-bottom: -0.5rem;
            margin-right: 1rem;
        }
    }

    border-bottom: 0.1px solid
        ${(props) =>
            props.variant === 'female'
                ? props.theme['purple']
                : props.theme['blue']};
`;

export const AccountContainer = styled.div`
    padding: 5rem;
    width: 25%;

    display: grid;

    span {
        display: flex;
        justify-content: left;

        svg {
            margin-bottom: -0.5rem;
            margin-right: 1rem;
        }
    }
`;
