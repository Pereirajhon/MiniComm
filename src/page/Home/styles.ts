import styled from 'styled-components'

export const Main = styled.main`
    margin: auto;

`
export const GridContainer = styled.div`
    max-width: 60%;
    width: 100%;
    margin: 1rem auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    
`

export const Product = styled.div`

    padding: 0.4rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #ffffff;
    

    h3{
        text-align: left;
        font-weight: 400;
    }

    strong{
        font-size: 1.3rem;
    }

    img{
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    &:hover{
        box-shadow: rgba(74, 74, 76, 30%) 0 6px 15px;
        border: none;
    }

`

export const ButtonAddToCart = styled.button`
    height: 3rem;
    padding: 1rem;
    font-size: 1rem;
    line-height: 0;
    background-color: #151513 ;
    border: none;
    color: #fff;
    border-radius: 0.4rem;

`