import styled from 'styled-components' 

export const Container = styled.section`

    //background-color: #fff;
    display: flex;
    flex-direction: column;
    margin: auto;
    h2{
        margin: 2rem;
    }

`

export const CartContainer = styled.div`
    max-width: 90%;
    margin: 0 auto;
    margin-top: 1.2rem ;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`

export const ContentItems = styled.div`
    width: 100%;
    margin: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar{
        display: none;
    }

    ul{
        display: flex;
        flex-direction: column;
    }
`

export const GridItem = styled.div`
    border-top: 0.5px solid rgb(204, 204, 204);
    padding: 0.8rem;
    display: grid;
    grid-template-columns: 20% 40% 20% 20%;
    justify-content: center;
    align-items: center;
    img{
        max-width: 110px;
    }
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    position: sticky;
    bottom: 0;
    max-width: 100%;
    padding: 2% 5%;
    box-shadow: 0 -3px 5px rgb(0 0 0 / 15%);
    border-radius: 0.3rem 0.3rem 0 0;
    z-index: 999;

    h3{
        font-weight: bold;
        font-size: 1.4em;
    }

`

export const ButtonTotal = styled.button`
    height: 2.6rem;    
    line-height: 0;
    width: 50%;
    background-color: rgba(16,16,18);
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.3rem;
    &:hover{
        filter: brightness(0.8);
    }
`