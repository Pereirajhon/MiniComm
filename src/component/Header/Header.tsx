import {HeaderContainer, HeaderContent} from './styles'
import {useAppSelector} from '../../store/store'


export const Header = () => {
    const {product} = useAppSelector(state => state.product)

    return(
        <HeaderContainer>
            <HeaderContent>
                <h2>MiniComm
                </h2>
                <span>{product}</span>
            </HeaderContent>
        </HeaderContainer>
    )

}
