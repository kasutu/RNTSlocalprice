import React, { Component } from 'react';
import {
  Container,
  Heading,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text
} from 'native-base';

export default class HeaderIconTextButton extends Component {
  render() {
    return (
      <Container>
        <Heading>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Heading>
      </Container>
    );
  }
}
