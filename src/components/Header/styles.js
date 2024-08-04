import styled from 'styled-components';

export const HeaderConteiner = styled.div`
    height: 20rem;

    background: ${(props) => props.theme['base-profile']};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 10rem;
        width: 15rem;
    }
`;

export const Name = styled.span`
    font-size: 2rem;
    color: ${(props) =>
        props.variant === 'primary'
            ? props.theme['purple']
            : props.theme['blue-light']};
    margin-left: -4rem;
    margin-right: -4rem;
`;
