/* global window */

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import Tweet from './Tweet';
import TweetForm from './TweetForm';
import TweetList from './TweetList';
import Header from '../Header';
import PropsRoute from '../PropsRoute';
import { success } from '../../helpers/notifications';
import { handleAjaxError } from '../../helpers/helpers';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: null,
    };

    this.addTweet = this.addTweet.bind(this);
    this.deleteTweet = this.deleteTweet.bind(this);
    this.updateTweet = this.updateTweet.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/events.json')
      .then(response => this.setState({ tweets: response.data }))
      .catch(handleAjaxError);
  }

  addTweet(newTweet) {
    axios
      .post('/api/tweets.json', newTweet)
      .then((response) => {
        success('Twitted!');
        const savedTweet = response.data;
        this.setState(prevState => ({
          tweets: [...prevState.tweets, savedTweet],
        }));
        const { history } = this.props;
        history.push(`/tweets/${savedTweet.id}`);
      })
      .catch(handleAjaxError);
  }

  deleteTweet(tweetId) {
    const sure = window.confirm('Tweet will be deleted');
    if (sure) {
      axios
        .delete(`/api/tweets/${tweetId}.json`)
        .then((response) => {
          if (response.status === 204) {
            success('Deleted successfully');
            const { history } = this.props;
            history.push('/tweets');

            const { tweets } = this.state;
            this.setState({ tweets: tweets.filter(tweet => tweet.id !== tweetId) });
          }
        })
        .catch(handleAjaxError);
    }
  }

  updateTweet(updatedTweet) {
    axios
      .put(`/api/tweets/${updatedTweet.id}.json`, updatedTweet)
      .then(() => {
        success('Tweet updated');
        const { tweets } = this.state;
        const idx = tweets.findIndex(tweet => tweet.id === updatedTweet.id);
        tweets[idx] = updatedTweet;
        const { history } = this.props;
        history.push(`/tweets/${updatedTweet.id}`);
        this.setState({ tweets });
      })
      .catch(handleAjaxError);
  }

  render() {
    const { tweets } = this.state;
    if (tweets === null) return null;

    const { match } = this.props;
    const tweetId = match.params.id;
    const tweet = tweets.find(t => t.id === Number(tweetId));

    return (
      <div>
        <Header />
        <div className="grid">
          <TweetList tweets={tweets} activeId={Number(tweetId)} />
          <Switch>
            <PropsRoute path="/tweets/new" component={TweetForm} onSubmit={this.addTweet} />
            <PropsRoute
              exact
              path="/tweets/:id/edit"
              component={TweetForm}
              tweet={tweet}
              onSubmit={this.updateTweet}
            />
            <PropsRoute
              path="/tweets/:id"
              component={Tweet}
              tweet={tweet}
              onDelete={this.deleteTweet}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  match: PropTypes.shape(),
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

Editor.defaultProps = {
  match: undefined,
};

export default Editor;
