import React from 'react';
import './styles.css';

const Top20Item = ( { rank, songName, songArtist } )  => {
    return (
      <div>
        <li className="highlight">
          <p>#: { rank}</p>
          <p>Tile: { songName.label}</p>
          <p>Artist: { songArtist.label}</p>
        </li>
      </div>
    );
}


export default Top20Item
