
import bigCoffee from '../../assets/big-coffee.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { defaultTheme, TextLRegular, TextMRegular, TitleL, TitleXL } from '../../styles/themes/default';
import { Products } from '../../contexts/Products';
import { CartIconContainer, CoffeeIconContainer, CoffeeListContainer, HomeContainer, InstructionContainer, LandingContainer, LandingInstructions, LandingText, PackageIconContainer, ProductsContainer, TimerIconContainer } from './styles';
import { LargeCoffeeCard } from '../../components/LargeCoffeCard';

export function Home() {
  return (
    <HomeContainer>
      <LandingContainer>
        <LandingText>
          <TitleXL color={defaultTheme['base-title']}>Encontre o café perfeito para qualquer hora do dia</TitleXL>
          <TextLRegular color={defaultTheme['base-subtitle']}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</TextLRegular>

          <LandingInstructions>
            <InstructionContainer>
              <CartIconContainer>
                <ShoppingCart weight='fill' size={22} />
              </CartIconContainer>
              <TextMRegular>Compra simples e segura</TextMRegular>
            </InstructionContainer>

            <InstructionContainer>
              <PackageIconContainer>
                <Package weight='fill' size={22} />
              </PackageIconContainer>
              <TextMRegular>Embalagem mantém o café intacto</TextMRegular>
            </InstructionContainer>

            <InstructionContainer>
              <TimerIconContainer>
                <Timer weight='fill' size={22} />
              </TimerIconContainer>
              <TextMRegular>Entrega rápida e rastreada</TextMRegular>
            </InstructionContainer>

            <InstructionContainer>
              <CoffeeIconContainer>
                <Coffee weight='fill' size={22} />
              </CoffeeIconContainer>
              <TextMRegular>O café chega fresquinho até você</TextMRegular>
            </InstructionContainer>
          </LandingInstructions>
        </LandingText>
        <img src={bigCoffee} />
      </LandingContainer>

      <ProductsContainer>
        <TitleL color={defaultTheme['base-subtitle']}>Nossos Cafés</TitleL>
        <CoffeeListContainer>
          {
            Object.values(Products).map(product => (<LargeCoffeeCard key={product.id} {...product} />))
          }
        </CoffeeListContainer>
      </ProductsContainer>
    </HomeContainer>
  );
}
