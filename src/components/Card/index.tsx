import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { paths } from '../../constants/paths';
import { ICharacter } from '../../types/character';

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 6px;
  padding: 6px;
  overflow: hidden;
  list-style-type: none;
  border-radius: 0.5rem;
  color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 0.5px 0 rgb(0 0 0 / 12%) img {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 5px 15px rgb(0 0 0 / 30%);
  }

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  min-height: 102px;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 18px 6px 18px 18px;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.color.copper_coin};
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.color.copper_coin};
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
    transition: ${({ theme }) => theme.transition.transitionFast};
  }
  &:active {
    opacity: 1;
    transition: ${({ theme }) => theme.transition.transitionFast};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  margin-top: auto;
  text-decoration: none;
`;

const TextName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

const TextSpecies = styled.p`
  font-size: 18px;
`;

const TextStatus = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const Card = (item: ICharacter) => {
  return (
    <CardWrapper>
      <img src={item.image} alt={item.name} />
      <CardInfo>
        <TextName>{item.name}</TextName>
        <TextSpecies>{item.species}</TextSpecies>
        <TextStatus>{item.status}</TextStatus>
      </CardInfo>
      <StyledLink to={{ pathname: paths.detail, state: item }}>
        <Button onClick={() => {}}>Details</Button>
      </StyledLink>
    </CardWrapper>
  );
};

export default Card;
