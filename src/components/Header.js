import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

function Header(props) {
  return (
    <div className="header-box">
      <Carousel showStatus={false} showThumbs={false}>
        <div>
          <img src={require('../assets/KIPI-Logo.webp')} alt="KIPI Logo" />
        </div>
        <div>
          <p className="sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nunc id purus malesuada condimentum eget a leo.
            Sed placerat nec sapien sed bibendum. Nullam et justo id lacus tempor laoreet.
            Pellentesque eu mi sollicitudin, lacinia lectus sit amet, euismod dolor.
            Nullam dictum ipsum turpis. Aenean ut lectus condimentum, porta orci ac, consectetur quam. Sed mollis ligula ac lorem auctor porttitor.
            In hac habitasse platea dictumst. Fusce auctor nulla massa, sit amet volutpat turpis mollis at. In hac habitasse platea dictumst.
            Sed mollis dictum elementum. Cras dapibus dolor in luctus tristique. Integer eu dolor enim. Curabitur quis hendrerit metus.
            Sed vehicula risus quis nunc interdum, non mollis eros interdum. Duis tincidunt at orci eget pulvinar.</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Header;