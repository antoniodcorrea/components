import React from 'react';
import './LoaderCircle.less';

class LoaderCircle extends React.Component {
  render() {
    return (
      <div className="LoaderCircle">
        <div className="LoaderCircle-inner1" />
        <div className="LoaderCircle-inner2" />
      </div>
    );
  }
}

export default LoaderCircle;
