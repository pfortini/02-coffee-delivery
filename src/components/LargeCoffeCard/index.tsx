import { useContext, useState } from 'react';
import { CartContext, CoffeeType } from '../../contexts/Products';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { defaultTheme, Tag, TextS, TitleM, TitleS } from '../../styles/themes/default';
import { ActionsContainer, CartIconContainer, ItemCountContainer, LargeCoffeeCardContainer, PriceContainer, TagsContainer } from './styles';

export function LargeCoffeeCard(product: CoffeeType) {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(1);

  function handleDecreaseCount() {
    setCount(state => {
      if (state > 1) return state - 1;
      return 1;
    });
  }

  function handleIncreaseCount() {
    setCount(state => state + 1);
  }

  function handleAddToCart(product: CoffeeType) {
    addItem(product, count);
  }

  return (
    <LargeCoffeeCardContainer>
      <img src={product.img} width={120} height={120} />

      <TagsContainer>
        {
          product.tags.map(tag => (<Tag key={tag.id} color={defaultTheme['yellow-dark']}>{tag.text}</Tag>))
        }
      </TagsContainer>

      <TitleS color={defaultTheme['base-subtitle']}>{product.name}</TitleS>
      <TextS color={defaultTheme['base-label']}>{product.description}</TextS>

      <ActionsContainer>
        <PriceContainer>
          <TextS>R$</TextS>
          <TitleM>{product.price.toFixed(2)}</TitleM>
        </PriceContainer>

        <ItemCountContainer>
          <Minus color={defaultTheme['purple']} weight='bold' onClick={handleDecreaseCount} />
          {count}
          <Plus color={defaultTheme['purple']} weight='bold' onClick={handleIncreaseCount}/>
        </ItemCountContainer>

        <CartIconContainer>
          <ShoppingCart size={22} weight='fill' color={defaultTheme['white']} onClick={() => { handleAddToCart(product); }} />
        </CartIconContainer>
      </ActionsContainer>
    </LargeCoffeeCardContainer>
  );
}
