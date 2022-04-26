const VideoListEntry = (props) => {
  console.log('videolistentry', props);
  return (
    <div><h5>
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={props.item.snippet.thumbnails.default.url} alt="hi" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{props.item.snippet.title}</div>
          <div className="video-list-entry-detail">{props.item.snippet.description}</div>
        </div>
      </div>
    </h5></div>

  );
};

// {/* <div><h5><em>videoListEntry</em> view goes here</h5></div> */}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
