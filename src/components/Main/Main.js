import React from 'react';
// import '../../stylesheets/Main.css'


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  componentDidMount() 
  {
    console.log("Mounted.")
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="Main">
      </div>
    );
  }
}

export default Main;