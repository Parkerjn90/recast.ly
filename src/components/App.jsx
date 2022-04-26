//Refactor to es6 React component.
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

//console.log(exampleVideoData);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
    }; // unknown state as of writing
    this.handleClick = this.handleClick.bind(this);
  }

  // define handleClick function
  handleClick(event) {
    event.preventDefault();
    // update videoPlayer
    console.log('clicked!');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer videos={this.state.videos[0]}></VideoPlayer>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleClick}></VideoList>
          </div>
        </div>
      </div>
    );
  }
}

// {/* <div><h5><em>videoList</em> view goes here</h5></div> */}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
