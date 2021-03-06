var VideoPlayer = (props) => {

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.currentVideo.id.videoId} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.currentVideo.snippet.title}</h3>
        <div>{props.currentVideo.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object
};


// 'https://www.youtube.com/embed/' + 'videos.id.videoId'

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;

// {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}