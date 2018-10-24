import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};
let fakeServerData = {
user: {
  name: 'Trevor',
  playlists: [
    {
      name: 'My favorites',
      songs:[
        {name: 'Illenium', duration: 1345},
        {name: 'Excision', duration: 1255},
        {name: 'Boogie T', duration: 1155}
      ]
    },
    {
      name: 'Discover',
      songs:[
        {name: 'Illenium', duration: 1345},
        {name: 'Excision', duration: 1255},
        {name: 'Boogie T', duration: 1155}
      ]
    },
    {
      name: 'Workout',
      songs:[
        {name: 'Illenium', duration: 1345},
        {name: 'Excision', duration: 1255},
        {name: 'Boogie T', duration: 1155}
      ]
    },
    {
      name: 'Study',
      songs:[
        {name: 'Illenium', duration: 1345},
        {name: 'Excision', duration: 1255},
        {name: 'Boogie T', duration: 1155}
      ]
    }
  ]
}
};

class PlaylistCounter extends Component{
  render() {
    return(
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
      <h2>{this.props.playlists.length}>playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component{
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
   let totalDuration = allSongs.reduce((sum, eachSong) => {
     return sum + eachSong.duration
   }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img />
        <h3>PlayList Name</h3>
        <ul><li>song 1</li><li>song 2</li><li>song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
constructor() {
  super();
  this.state = {serverData: {}}
}

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 2500);
  }
  render() {
    return (
      <div className="App">
      {this.state.serverData.user ?
      <div>
        <h1 style={{...defaultStyle, 'font-size': '54px'}}>
          {this.state.serverData.user.name}'s Playlists
        </h1>
        <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
        <HoursCounter playlists = {this.state.serverData.user.playlists}/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div> : <h1 style={defaultStyle}>Loading...</h1>
      }
      </div>
    );
  }
}

export default App;
