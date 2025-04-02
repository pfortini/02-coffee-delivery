import styled from 'styled-components';

export const LargeCoffeeCardContainer = styled.div`
  display: grid;
  text-align: center;

  gap: 0.5rem;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.25rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  & img {
    margin-top: -20px;
    justify-self: center;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  text-transform: uppercase;

  margin-bottom: 0.5rem;

  & h1 {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ItemCountContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.575rem;
  margin-left: auto;

  border-radius: 8px;

  background: ${(props) => props.theme['base-button']};
`;

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  padding: 0.5rem;
  border-radius: 8px;

  background: ${(props) => props.theme['purple-dark']};
`;
