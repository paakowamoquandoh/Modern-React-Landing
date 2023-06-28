import React from 'react';
import ai from '../../media/icons/computer.png';
import './header.css';

const Header = () => (
  <div className="mediaHeader section__padding" id="home">
    <div className="mediaHeader-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="mediaHeader-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="mediaHeader-image">
      {/* <img alt='ai' src={ai} /> */}
    </div>
  </div>
);

export default Header;