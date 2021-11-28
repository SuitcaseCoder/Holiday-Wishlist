import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Heading() {
    return (
        <div>
            <Wrapper>
                <Title>My Holiday Wishlist</Title>
            </Wrapper>
        </div>
    )
}
