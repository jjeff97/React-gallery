import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {

  state = {
    galleryList: [],
  };

  componentDidMount() {
    console.log('MOUNTED COMPONENT');
    this.getPhotos();
  }

  getPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
    // axios.get('/gallery')
    .then((response) => {
      console.log('GET gallery: ', response);
      this.setState({
        songsList: response.data,
      });
    })
    .catch((err) => {
      console.log('GET error: ', err);
      alert('You Failed!!!');
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/tiger.jpg"/>
      </div>
    );
  }
}

export default App;
