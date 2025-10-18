import React, { useEffect } from 'react';
import "./Music.css";
import MusicProjects from "../modules/MusicProjects";
import albumsData from "../data/albums.json";
import AlbumCard from "../modules/AlbumCard";

function Discography() {
  useEffect(() => {
    document.title = 'exhum0 | Music';
  }, []);

  return (
    <main className='content'>
      <div className="albums-section">
        <div className="container">
          <h2 className="album-title">Albums</h2>
          <div className="albums-gallery">

            <div className="discography-grid">
              {albumsData.map((album, index) => (
                <AlbumCard key={index} album={album} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <MusicProjects />
    </main>
  );
}

export default Discography;
