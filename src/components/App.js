import React, {Component} from 'react';

import Films from './Films';
import TVs from './TVs';

import initialData from '../data.json';

class App extends Component {
  state = {
    data: {},
    filmsButtonDisabled: true,
    tvsButtonDisabled: false,
    filmsComponentToShow: true,
    tvsComponentToShow: false,
  };

  componentDidMount() {
    this.setState({data: this.classifyTvShows(initialData)});
  }

  /* If the TV show has only one episode it should be shown in the Films feed */
  classifyTvShows = data => {
    const {films, tv_seasons} = data;
    tv_seasons.forEach(function(tvShow, index) {
      if (tvShow.episodes.length == 1) {
        tvShow.description = tvShow.description + ' - [ TV Film ]';
        films.push(tvShow);
        tv_seasons.splice(index, 1);
      }
    });
    return {films, tv_seasons};
  };

  handleComponentToShow = listToShow => {
    let filmsValue,
      tvsValue = false;

    switch (listToShow) {
      case 'films':
        filmsValue = true;
        tvsValue = false;
        break;
      case 'tvs':
        filmsValue = false;
        tvsValue = true;
        break;
      default:
        return null;
    }

    this.setState({
      filmsButtonDisabled: filmsValue,
      tvsButtonDisabled: tvsValue,
      filmsComponentToShow: filmsValue,
      tvsComponentToShow: tvsValue,
    });
  };

  render() {
    const {
      filmsButtonDisabled,
      tvsButtonDisabled,
      filmsComponentToShow,
      tvsComponentToShow,
      data: {films, tv_seasons},
    } = this.state;

    return (
      <div>
        <h1>Rentflix</h1>
        <button
          disabled={filmsButtonDisabled}
          onClick={() => this.handleComponentToShow('films')}>
          Films
        </button>
        <button
          disabled={tvsButtonDisabled}
          onClick={() => this.handleComponentToShow('tvs')}>
          TV Seasons
        </button>
        <section>
          {filmsComponentToShow && <Films filmsData={films} />}
          {tvsComponentToShow && <TVs tvsData={tv_seasons} />}
        </section>
      </div>
    );
  }
}

export default App;
