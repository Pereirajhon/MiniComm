import {Main, GridContainer, Product, ButtonAddToCart} from './styles'
import { useGetAllProductsQuery} from '../../store/features/productApi'
import { useAppDispatch} from '../../store/store'
import { addToCart } from '../../store/features/cartSlice'
import { currencyFormatter } from '../../services/formatter'

export const Home = () => {

  const {data} = useGetAllProductsQuery()

  const dispatch = useAppDispatch()
 // const [addProduct] = usePostProductByIdMutation()
 // const {entities} = useAppSelector(state => state.productApi)
    
  return (
    <div>
        <Main>
          <h2>Produtos</h2>
          <GridContainer>    
            {data && data?.map((prod) => (
              <Product key={prod.id}>
                <img src={prod.image} alt={prod.name} />
                <h3>{prod.name}</h3>
                <strong>{currencyFormatter.format(prod.price) }</strong>
                <ButtonAddToCart onClick={() => dispatch(addToCart(prod))} >
                  Adicionar ao carrinho
                </ButtonAddToCart>
              </Product>
              ))}  
          </GridContainer>
          

        </Main>
    </div>
  )
}
