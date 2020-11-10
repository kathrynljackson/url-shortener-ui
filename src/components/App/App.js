import React, { Component } from 'react';
import './App.css';
import { getUrls, postData } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    }
  }

  async componentDidMount() {
    let importedData = await getUrls()
    this.setState({ urls: importedData.urls })
  }

   submit = async(stuff) => {
    postData(stuff.title, stuff.urlToShorten);
    let theseURLs = await getUrls();
    this.setState({ urls:theseURLs.urls })
  }


  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm submit={this.submit}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
