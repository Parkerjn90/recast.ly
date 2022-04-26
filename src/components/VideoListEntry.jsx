const VideoListEntry = (props) => {



  return (
    <div><h5>
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="hi" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={props.handleClick}>{props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{props.video.snippet.description}</div>
        </div>
      </div>
    </h5></div>

  );
};

// onClick = {handleClick()}

// {/* <div><h5><em>videoListEntry</em> view goes here</h5></div> */}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
