import {GlobalStyle} from './styles/global'
import {defaultTheme} from './styles/default'
import {ThemeProvider} from 'styled-components'
import {Header} from './component/Header/Header'
import { Home } from './page/Home/home'
import { Cart } from './page/Cart/Cart'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'

function App() {
  //const dispatch = useAppDispatch()

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <div className="App">
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}  />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
            
          </BrowserRouter>
          
        </div> 
    </ThemeProvider>
    
  )
}

export default App
