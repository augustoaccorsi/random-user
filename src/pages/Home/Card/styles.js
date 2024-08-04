import styled from 'styled-components';

export const CardConteiner = styled.div`
    background: ${(props) => props.theme['base-post']};

    height: 13rem;
    width: 32rem;

    margin: 1rem;

    border-radius: 8px;
    border: 0;

    padding: 1rem;

    header {
        display: flex;
        align-items: center;
        gap: 1rem;

        h1 {
            color: ${(props) => props.theme['white']};
            display: flex;
            align-content: baseline;
        }

        img {
            border-radius: 8px;
            border: 2px solid ${(props) => props.theme['blue']};
        }
    }

    main {
        margin: 1rem 0;
        color: ${(props) => props.theme['base-subtitle']};
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: left;

        gap: 1rem;

        svg {
            color: ${(props) => props.theme['white']};
        }

        span {
            color: ${(props) => props.theme['bse-span']};
        }
    }

    cursor: pointer;

    &:hover {
        border: 2px solid ${(props) => props.theme['purple']};
    }
`;
