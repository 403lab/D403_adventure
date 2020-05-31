import React from 'react';
// import '../../stylesheets/Main.css'
import { Button, Alert } from 'react-bootstrap';
import Header from '../Header/Header.js';



class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  componentDidMount() 
  {
    console.log("Main Mounted.")
    // this.props.history.push("/");
  }


  render() {
    return (
      <div className="Main">
        <Header />
        <Button />
      </div>
    );
  }
}

export default Main;