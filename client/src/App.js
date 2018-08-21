import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/authentication/registration/Registration'
import { Container } from 'reactstrap'
import "./App.css";


class App extends Component {
  render() {
    return (
     <Container>
        <Registration />
     </Container>
    );
  }
}

export default App;
