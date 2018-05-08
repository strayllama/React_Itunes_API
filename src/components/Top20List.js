import React, {Component} from 'react';
import Top20Item from './Top20Item.js';
// import './styles.css';

class Top20List extends Component {
  render() {
    // console.log("top20List this.props.songs:");
    // console.log(this.props.songs);
    const songNodes = this.props.songs.map((song, index) => {
      return (<Top20Item key={index} rank={index+1} songName={song[`im:name`]} songArtist={song[`im:artist`]} />)
    });

    return(
      <div>
        <h3>List of Top 20</h3>
          {songNodes}
      </div>
    );
  }
} // end class


export default Top20List
