import React, { Component, Fragment } from 'react';
import {FormGroup, Label, Input, Container, Form, Button, FormControl, Col, Row} from 'reactstrap';

class SearchBar extends Component {


    render() {

      return (
        <Container>
          <Form>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                     type="search"
                     name="search"
                     id="exampleSearch"
                     placeholder="Start exploring here, e.g:deepdish Pizza"
                   />
               </Col>
               <Col>
                 <Button>Submit</Button>
               </Col>
              </Row>
             </FormGroup>
           </Form>
        </Container>
      );
    }
  }

  export default SearchBar;
