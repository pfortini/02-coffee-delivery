import styled from 'styled-components';

export const SimpleCoffeeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1.25rem;

  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};
`;

export const ImgCol = styled.div`
  height: 4rem;
  width: 4rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const TextAndActionsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PriceCol = styled.div`
  text-align: end;
`;

export const TextLine = styled.div``;

export const ActionsLine = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ItemCountContainer = styled.div`
  display: flex;
  align-items: center;

  text-transform: uppercase;

  gap: 0.25rem;
  padding: 0.575rem;
  margin-left: auto;

  border-radius: 8px;

  background: ${(props) => props.theme['base-button']};

  & svg {
    cursor: pointer;
  }
`;

export const RemoveItemContainer = styled(ItemCountContainer)`
  cursor: pointer;
`;

export const CountActionsCol = styled.div``;
export const RemoveCol = styled.div``;
