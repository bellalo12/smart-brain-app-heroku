import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLink from './components/ImageLink/ImageLink'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const app = new Clarifai.App({
 apiKey: 'f3513f3a892c405c93867e062809a3bf'
});

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:[],
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation=(data)=>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox=(box)=>{
    this.setState({box:box})
  }


  onInputChange =(event)=>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit=()=>{
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(res=>this.displayFaceBox(this.calculateFaceLocation(res)))
      .catch(err=>console.log(err))
  }

  onRouteChange=(route)=>{
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    } else if (route ==='home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route:route})
  }


  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {this.state.route === 'home'
        ? <div>
        <Logo />
        <Rank />
        <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
        </div>
        : (
          this.state.route === 'signin'
        ? <SignIn onRouteChange={this.onRouteChange} />
        : <Register onRouteChange={this.onRouteChange} />
        )
      }
      </div>
    );
  }
}

export default App;
