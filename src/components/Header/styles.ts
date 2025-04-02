import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & nav {
    display: contents;
  }

  img {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const BaseIconContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  padding: 0.5rem;
`;

export const PinContainer = styled(BaseIconContainer)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`;

export const CartContainer = styled(BaseIconContainer)`
  background: ${(props) => props.theme['yellow-light']};
  position: relative;

  h1 {
    position: absolute;
    bottom: 1.75rem;
    left: 1.75rem;
    
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['white']};
    
    width: 1.25rem;
    height: 1.25rem;
  }
`;
