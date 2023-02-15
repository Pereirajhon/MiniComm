import { Container, CartContainer, ContentItems, GridItem, Total, ButtonTotal } from "./styles"
import { useAppDispatch, useAppSelector} from "../../store/store"
import { useEffect } from "react"
import { addToCart, decrement, getTotals, removeItemInCart} from "../../store/features/cartSlice"
import { currencyFormatter } from "../../services/formatter"


export const Cart = () => {
    const {cart, cartTotalAmount} = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTotals())
    },[cart, dispatch])

    return (
        <Container>
            <CartContainer>
            <h2>Meu Carrinho</h2>
                <ContentItems>
                    <ul>
                        {cart && cart.map((item) => (
                            <GridItem key={item.id}>                                         
                                <img src={item.image} alt='imagem do produto' />
                                <h4>{item.name}</h4>
                                <div>
                                    <button onClick={() => dispatch(decrement(item))}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(addToCart(item))} >
                                        +
                                    </button>
                                </div>
                                <strong>{currencyFormatter.format(item.price * item.quantity)}</strong>
                                <button onClick={() => dispatch(removeItemInCart(item))}>
                                    remover
                                </button>
                            </GridItem>
                        
                        ))}
                    </ul>
                </ContentItems>

            </CartContainer>
            <Total>
                <ButtonTotal>Finalizar Compra</ButtonTotal>
                <div>
                    <span>TOTAL</span>
                    <strong>{currencyFormatter.format(cartTotalAmount)}</strong>
                </div>
                     
            </Total>
        </Container>
    )
}