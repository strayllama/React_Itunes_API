import React from 'react';
import Top20List from '../components/Top20List.js';

class Top20Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    };
  } // end constructor

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const songData = JSON.parse(jsonString);
      console.log(songData);
      const songs = songData.feed.entry;
      // console.log("Song array:");
      console.log(songs);
      this.setState({ songs: songs })
    }) // end addEventListener

    request.send();
  } // end componentDidMount


  render() {
    return (
      <div>
        <h2>Top 20 List of UK songs</h2>
        <Top20List songs={this.state.songs}/>
      </div>
    );
  } // end render()

} // end class Top20Box


export default Top20Box
