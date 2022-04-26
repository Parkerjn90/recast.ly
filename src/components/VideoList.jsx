import VideoListEntry from './VideoListEntry.js';

const VideoList = (props) => {
  console.log(props);
  return (
    <div className="video-list">
      {props.videos.map((video) => (
        <VideoListEntry video={video} handleClick={props.handleClick}></VideoListEntry>
      ))}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// eventually change video prop id (line 8) to individual video's id (visible within each object)