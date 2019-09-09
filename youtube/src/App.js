import React from 'react';
import Search from './component/Search'
import YTSearch from 'youtube-api-search'
import Header from './component/Header'
import Detail from './component/Detail'
import ListItem from './component/List'


const  API_KEY ='AIzaSyCCSYtUPqaX5Vs2BcP3tk7t_f-xEBu_yAU'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      videos:[],
      selectedVideo:null
    }
    this.videoSearch("Adele - Hello")
  }

  videoSearch(searchTerm){
    YTSearch({key: API_KEY, term:searchTerm}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  render() { 
    return (  
      <div>
      <Header/>
      <Search  onSearchTermChange={serachTerm=>this.videoSearch(serachTerm)}/>
      <Detail video={this.state.selectedVideo}/>
      <ListItem
          onVideoSelect={userSelected =>
            this.setState({ selectedVideo: userSelected })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}
 
export default App;