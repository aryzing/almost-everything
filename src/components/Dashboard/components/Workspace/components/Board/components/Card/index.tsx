import React from 'react';
import styled from 'styled-components';

import arrow from '../../../../../../../../assets/arrow.png';

const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  height: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: grid;
  grid-template-areas:
    'photo data'
    'arrows arrows';
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 5fr;
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

const Name = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
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
}

export const Card = (props: ICardProps) => {
  return (
    <Container>
      <Img src={props.image} />
      <Data>
        <Name>
          {props.name.first} {props.name.last}
        </Name>
        <Email href={`mailto:${props.email}`}>{props.email}</Email>
        <Phone href={`tel:${props.phone}`}>{props.phone}</Phone>
      </Data>
      <Arrows>
        <ArrowLeft src={arrow} />
        <ArrowRight src={arrow} />
      </Arrows>
    </Container>
  );
};
