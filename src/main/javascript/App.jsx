import React from 'react';
import { Button, Container } from 'semantic-ui-react';


export default class App extends React.Component {

  static propTypes = {
    dpapp: React.PropTypes.object,
    ui: React.PropTypes.func.isRequired
  };

  render() {
    return (<div>Hello World</div>);
  }
}