import './App.css'
import {GlobalStyle} from './styles/global'
import {defaultTheme} from './styles/default'
import {ThemeProvider} from 'styled-components'
import {Header} from './component/Header/Header'
//import {useDispatch} from 'react-redux'
import {useAppDispatch} from './store/store'
import {decrement, increment} from './features/productSlice'

function App() {
  const dispatch = useAppDispatch()

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <div className="App">
          <Header/>  
          <div className="App-container">
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())} >+</button> 
          </div>  
        </div> 
    </ThemeProvider>
    
  )
}

export default App
