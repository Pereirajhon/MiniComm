import styled from 'styled-components'

export const HeaderContainer = styled.header`
    max-width: 100%;
    height: 2rem;
    padding: 2rem;
    background-color: ${props => props.theme.blue};
    color: #fff;
`

export const HeaderContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .material-symbols-outlined{
        display: flex ;
        span {
            display: flex;
            margin-top: -25% ;
            width: 100%;
            height: 100%;
            font-size: 0.8rem;
            padding: 0.3rem;
            color: #fff ;
            font-weight: bold ;
            background-color: rgb(227, 82, 20);
            border-radius: 50px;

        }

    }
`