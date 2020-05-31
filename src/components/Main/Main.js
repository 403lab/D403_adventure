import React from 'react';
// import '../../stylesheets/Main.css'
import { Button } from 'reactstrap';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  componentDidMount() 
  {
    console.log("Mounted.")
    // this.props.history.push("/");
  }

  render() {
    return (
      <div className="Main">
        <Button />
      </div>
    );
  }
}

export default Main;