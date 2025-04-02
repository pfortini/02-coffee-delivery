import { CartContainer, HeaderContainer, IconsContainer, PinContainer } from './styles';
import logo from '../../assets/logo.png';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { defaultTheme, TextSBold } from '../../styles/themes/default';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Products';

export function Header() {
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((acc, item) => acc += item.qty, 0);

  return (
    <HeaderContainer>
      <nav>
        <NavLink to='/' title='Home'>
          <img src={logo} />
        </NavLink>

        <IconsContainer>
          <PinContainer>
            <MapPin weight='fill' size={22} color={defaultTheme['purple-dark']} />
          São José dos Campos, SP
          </PinContainer>

          <NavLink to='/cart' title='Cart'>
            <CartContainer>
              <ShoppingCart weight='fill' size={22} color={defaultTheme['yellow-dark']} />
              { totalItems ? <TextSBold>{totalItems}</TextSBold> : '' }
            </CartContainer>
          </NavLink>
        </IconsContainer>
      </nav>
    </HeaderContainer>
  );
}
