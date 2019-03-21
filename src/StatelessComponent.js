import React from 'react';

function StatelessComponent({ text1, text2 }) {
    const imgUrl = './img/heart.png';
    return (
        <div>
            <img src={imgUrl} alt="heart"  />
            <h1 className="header">{text1}</h1>
            <div>{text2}</div>
        </div>
    );
  }

  export default StatelessComponent;