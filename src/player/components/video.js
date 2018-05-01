import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  togglePlay() {
    if(this.props.pause) {
      this.video.play(); // Este es un método nativo del html video (play())
    } else {
      this.video.pause(); // Este es un método nativo del html video (pause())
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }
  setRef = (element) => {
    this.video = element;
  }
  render() {
    const {handleLoadedMetadata} = this.props;
    return(
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
    )
  }
}

export default Video;