import React from 'react';

class ComponentWithClass extends React.Component {
    render() {
    const { text1, text2 } = this.props;
    const imgUrl = './img/heart.png';
    return (
        <div>
            <img src={imgUrl}  alt="heart" />
            <h1 className="header">{text1}</h1>
            <div>{text2}</div>
        </div>
    );
    };
  }

  export default ComponentWithClass;
