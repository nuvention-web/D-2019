import React, { Component, Fragment } from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, FormGroup, Label, Input, Container, Form, Button, FormControl, Col, Row} from 'reactstrap';
import "./style.css";

class SearchBar extends Component {


    render() {

      return (
        <Container id="centerit">


          <InputGroup size="lg">
            <Input placeholder="Start exploring here, e.g:deepdish Pizza"/>
            <InputGroupAddon addonType="append">
              <Button>Search!</Button>
            </InputGroupAddon>
          </InputGroup>
        </Container>
      );
    }
  }

  export default SearchBar;
