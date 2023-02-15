import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Roboto, sans-serif;
        background-color: ${(props) => props.theme.primary } ;
        color: #404040;

    }

    header{
        a{
          color: #ffffff;
        }
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }

`