//Refactor to es6 React component.
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

//console.log(exampleVideoData);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.handleClick = this.handleClick.bind(this);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
    this.getYouTubeVideos('Cute cat video');
  }

  // define handleClick function
  handleClick(event) {
    event.preventDefault();
    var targ2 = event.target.textContent;
    for ( let i = 0; i < this.state.videos.length; i++) {
      var targ = this.state.videos[i].snippet.title;
      if (targ === targ2) {
        this.setState({currentVideo: this.state.videos[i]});
      }
    }

  }

  getYouTubeVideos(input) {
    // search youtube api

    searchYouTube(input, (youTubeVideos) =>
    //console.log(youTubeVideos);
    this.setState({
      videos: youTubeVideos
    })
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <Search getVideos={this.getYouTubeVideos.bind(this)}></Search>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer currentVideo={this.state.currentVideo}></VideoPlayer>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleClick}></VideoList>
          </div>
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   this.setState({videos: });
  // }
}


// {/* <div className="col-md-6 offset-md-3">
// <div><h5><em>search</em> view goes here</h5></div>
// </div> */}
// {/* <div><h5><em>videoList</em> view goes here</h5></div> */}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
