import React from 'react';
// import '../../stylesheets/Main.css'
import { Button, Alert, ButtonGroup, Row } from 'react-bootstrap';
import Header from '../Header/Header.js';
import ImageMapper from 'react-image-mapper';
import mapImage from 'assets/images/map.jpg'
import '../../stylesheets/Mapper.css'



const MAPPER = {
  name: "my-map",
  areas: [
    {
      name: "제주도",
      shape: "poly",
      coords: [100, 436, 80, 446, 60, 458, 59, 467, 75, 487, 124, 474, 132, 457, 132, 447],
      //pre//fillColor: "green",
      //fillColor: "blue"
    },
    {
      name: "경기도",
      shape: "poly",
      coords: [155, 60, 134, 71, 135, 78, 117, 87, 123, 97, 114, 104, 97, 96, 84, 108, 84, 120, 100, 146, 112, 148, 111, 157, 112, 167, 127, 180, 166, 179, 204, 160, 198, 156, 204, 125, 187, 118, 185, 97, 159, 73],
      //pre//fillColor: "green",
      //fillColor: "blue"
    },
    {
      name: "강원도",
      shape: "poly",
      coords: [158, 60, 190, 63, 221, 58, 226, 49, 243, 47, 245, 39, 252, 42, 319, 147, 311, 162, 267, 166, 233, 151, 208, 158, 202, 155, 205, 124, 188, 116, 187, 95, 163, 73],
      //pre//fillColor: "yellow",
      //fillColor: "red"
    },
    {
      name: "경상북도",
      shape: "poly",
      coords: [316, 151, 306, 165, 262, 168, 255, 165, 248, 189, 233, 186, 208, 206, 204, 231, 214, 242, 206, 262, 207, 273, 220, 278, 233, 294, 243, 296, 256, 297, 279, 298, 304, 287, 331, 293, 334, 274, 334, 253, 323, 259, 328, 190, 317, 177],
      //pre//fillColor: "yellow",
      //fillColor: "red"
    },
    {
      name: "경상남도",
      shape: "poly",
      coords: [330, 298, 327, 293, 305, 290, 280, 301, 233, 298, 220, 282, 209, 277, 202, 277, 185, 300, 191, 314, 184, 325, 189, 342, 201, 361, 206, 387, 220, 392, 223, 382, 241, 379, 249, 388, 264, 390, 277, 367, 311, 346, 321, 329],
      //pre//fillColor: "yellow",
      //fillColor: "red"
    },
    {
      name: "충청북도",
      shape: "poly",
      coords: [256, 168, 232, 157, 207, 164, 201, 162, 187, 169, 167, 183, 173, 195, 167, 202, 170, 221, 184, 233, 189, 262, 189, 269, 207, 265, 214, 247, 205, 237, 208, 219, 208, 212, 232, 190, 249, 193],
      //pre//fillColor: "yellow",
      //fillColor: "red"
    },
    {
      name: "충청남도",
      shape: "poly",
      coords: [164, 181, 126, 182, 115, 172, 98, 166, 73, 189, 73, 205, 64, 228, 70, 250, 83, 242, 82, 232, 76, 217, 84, 218, 87, 237, 101, 244, 101, 258, 117, 263, 131, 257, 145, 260, 154, 253, 165, 253, 173, 264, 186, 264, 186, 258, 182, 246, 181, 229, 168, 219, 164, 199, 170, 194],
      //pre//fillColor: "yellow",
      //fillColor: "red"
    },
    {
      name: "전라북도",
      shape: "poly",
      coords: [204, 265, 172, 267, 165, 256, 156, 255, 147, 263, 132, 261, 118, 268, 101, 261, 100, 273, 106, 280, 97, 291, 95, 309, 105, 321, 124, 312, 153, 325, 181, 324, 188, 315, 183, 301, 206, 274],
      //pre//fillColor: "yellow",
      //fillColor: "red"
    },
    {
      name: "전라남도",
      shape: "poly",
      coords: [180, 323, 152, 326, 124, 312, 105, 323, 94, 309, 83, 327, 84, 335, 66, 339, 66, 352, 58, 358, 53, 388, 53, 399, 59, 399, 46, 418, 47, 425, 54, 439, 73, 430, 72, 421, 89, 417, 148, 426, 152, 416, 167, 411, 171, 416, 178, 411, 180, 397, 203, 387, 203, 377, 198, 360, 184, 340],
      //pre//fillColor: "yellow",
      //fillColor: "red"
    },
  ]
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.mapOnClick = this.props.mapOnClick;
  }

  render() {
    return (
      <Row className="justify-content-md-center">
        <ImageMapper src={mapImage} map={MAPPER} width={364}
          onClick={this.mapOnClick}
        />
      </Row>
      );
  }
}

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.selectOnClick = this.props.selectOnClick;
  }
  render() {
    return (
      <Row className="justify-content-md-center">
        <ButtonGroup aria-label="areyousolo" size="lg" className="sbuttonGroup">
          <Button className="sbutton" variant="secondary" value={1} onClick={this.selectOnClick} >솔로</Button>
          <Button className="sbutton" variant="secondary" value={2} onClick={this.selectOnClick} >커플</Button>
          <Button className="sbutton" variant="secondary" value={3} onClick={this.selectOnClick} >다수</Button>
        </ButtonGroup>
      </Row>
    )
  }
}

class Mapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: null,
    }

    this.mapOnClick = this.mapOnClick.bind(this);
    this.selectOnClick = this.selectOnClick.bind(this);
  }

  mapOnClick(area, index, event) {
    this.setState({
      selectedIndex: index+1
    })
  }

  selectOnClick(event) {
    this.setState({
      selectedSelector: parseInt(event.currentTarget.value)
    })
  }

  componentDidMount() 
  {
    console.log("Main Mounted.")
    // this.props.history.push("/");
  }

  componentDidUpdate() {
    console.log("Updated")
    if(!(!this.state.selectedIndex) && !(!this.state.selectedSelector)) {
      window.location.href = `/main?map=${this.state.selectedIndex}&person=${this.state.selectedSelector}`
    }
    
  }


  render() {
    return (
      <div className="Main">
        <Header title="지역 선택" />
        <Map mapOnClick={this.mapOnClick}/>
        <Selector selectOnClick={this.selectOnClick}/>
      </div>
    );
  }
}

export default Mapper;