import {HeaderContainer, HeaderContent} from './styles'
import { NavLink } from 'react-router-dom'
import {useAppSelector} from '../../store/store'


export const Header = () => {
    const {cart} = useAppSelector(state => state.cart)

    //console.log(quantityItem)
   // const items: Items[] = JSON.parse(localStorage.getItem('cartItems'))
    //console.log(items)
    const quant = cart?.map(item => item.quantity).reduce((acc, q) => acc += q, 0)
       
    //console.log(quant)

    return(
        <HeaderContainer>
            <HeaderContent>
                <NavLink to='/' >
                    <h2>MiniComm</h2> 
                </NavLink>
                <NavLink to='/cart' >
                    <div className="material-symbols-outlined">
                        shopping_cart
                        { quant > 0 ? (
                            <span> {quant} </span>
                            ) : ''}
                    </div>
                </NavLink>
                
                
 
            </HeaderContent>
        </HeaderContainer>
    )

}
