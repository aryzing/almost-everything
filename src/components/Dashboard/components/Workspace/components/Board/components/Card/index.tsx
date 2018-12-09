import React from 'react';
import styled from 'styled-components';

import arrow from '../../../../../../../../assets/arrow.png';

const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: grid;
  grid-template-areas:
    'photo data'
    'arrows arrows';
  grid-template-rows: auto auto;
  grid-template-columns: 22% 78%;
`;

const Data = styled.div`
  padding-left: 1rem;
  grid-area: data;
`;

const Arrows = styled.div`
  /* as grid parent */
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* as grid child */
  grid-area: arrows;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;

  grid-area: photo;
  justify-self: start;
`;

/*
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100px;
    display: block;
    overflow: hidden
*/

const Name = styled.div`
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`;

const City = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`;

const Link = styled.a`
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;

  color: black;
  :hover {
    text-decoration: underline;
  }
`;

const Email = styled(Link)`
  display: block;
`;
const Phone = styled(Link)`
  display: block;
`;

const ArrowLeft = styled.img`
  display: block;
  place-self: center start;
  transform: rotate(180deg);

  :hover {
    cursor: pointer;
  }
`;

const ArrowRight = styled.img`
  display: block;
  place-self: center end;

  :hover {
    cursor: pointer;
  }
`;

export interface ICardProps {
  name: {
    first: string;
    last: string;
  };
  image: string;
  email: string;
  phone: string;
  city: string;
  handlePrev?: () => void;
  handleNext?: () => void;
}

const capitalizeFirstLetter = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const Card = (props: ICardProps) => {
  return (
    <Container>
      <Img src={props.image} />
      <Data>
        <Name>
          {capitalizeFirstLetter(props.name.first)}{' '}
          {capitalizeFirstLetter(props.name.last)}
        </Name>
        <City>{capitalizeFirstLetter(props.city)}</City>
        <Email href={`mailto:${props.email}`}>{props.email}</Email>
        <Phone href={`tel:${props.phone}`}>{props.phone}</Phone>
      </Data>
      <Arrows>
        {(props.handlePrev && (
          <ArrowLeft src={arrow} onClick={props.handlePrev} />
        )) || <div />}
        {(props.handleNext && (
          <ArrowRight src={arrow} onClick={props.handleNext} />
        )) || <div />}
      </Arrows>
    </Container>
  );
};
