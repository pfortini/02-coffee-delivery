// import { Minus, Plus, Trash } from 'phosphor-react';
import { Minus, Plus, Trash } from 'phosphor-react';
import { CartContext, CartItem } from '../../contexts/Products';
import { ButtonM, defaultTheme, TextMBold, TextMRegular } from '../../styles/themes/default';
// import { ButtonM, defaultTheme, TextMRegular } from '../../styles/themes/default';
import { ActionsLine, CountActionsCol, ImgCol, ItemCountContainer, PriceCol, RemoveCol, RemoveItemContainer, SimpleCoffeeCardContainer, TextAndActionsCol, TextLine } from './styles';
import { useContext } from 'react';

export function SimpleCoffeeCard(item: CartItem) {
  const { increaseItemAmount, decreaseItemAmount, removeItem } = useContext(CartContext);

  function handleIncreaseCount() {
    increaseItemAmount(item.product);
  }

  function handleDecreaseCount() {
    decreaseItemAmount(item.product);
  }

  function handleRemoveItem() {
    removeItem(item.product);
  }

  return (
    <SimpleCoffeeCardContainer>
      <ImgCol>
        <img src={item.product.img} />
      </ImgCol>
      <TextAndActionsCol>
        <TextLine>
          <TextMRegular color={defaultTheme['base-subtitle']}>{item.product.name}</TextMRegular>
        </TextLine>
        <ActionsLine>
          <CountActionsCol>
            <ItemCountContainer>
              <Minus color={defaultTheme['purple']} weight='bold' onClick={handleDecreaseCount} />
              {item.qty}
              <Plus color={defaultTheme['purple']} weight='bold' onClick={handleIncreaseCount}/>
            </ItemCountContainer>
          </CountActionsCol>
          <RemoveCol>
            <RemoveItemContainer onClick={handleRemoveItem}>
              <Trash color={defaultTheme['purple']} weight='bold' />
              <ButtonM color={defaultTheme['base-text']}>Remover</ButtonM>
            </RemoveItemContainer>
          </RemoveCol>
        </ActionsLine>
      </TextAndActionsCol>
      <PriceCol>
        <TextMBold color={defaultTheme['base-text']}>R${(item.qty * item.product.price).toFixed(2)}</TextMBold>
      </PriceCol>
    </SimpleCoffeeCardContainer>
  );
}
