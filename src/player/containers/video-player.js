import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import { formattedTime } from '../../lib/utilities';
import ProgressBar from '../components/progress-bar';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: '0 : 00',
    timeFloat: 0,
    durationFloat: 0,
  }
  togglePlay = (event) => {
    this.setState({
      pause:!this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay
    })
  }
  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: formattedTime(this.video.duration),
      durationFloat: this.video.duration,
    });
  }
  handleTimeUpdate = (event) => {
    console.log(this.video.currentTime);
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
      timeFloat: this.video.currentTime
    })
  }
  handleProgressChange = (event) => {
    // event.target.value
    this.video.currentTime = event.target.value
  }
  render() {
    return(
      <VideoPlayerLayout>
        <Title
          title="Este es un video"
        />
        <VideoPlayerControls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            value={this.state.timeFloat}
            max={this.state.durationFloat}
            handleProgressChange={this.handleProgressChange}
          />
        </VideoPlayerControls>
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;