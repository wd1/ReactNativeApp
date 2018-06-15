// @flow

import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import ArticleContent from '../ArticleContent';

/**
 * Display the article view, gets the article content and passes it along
 *
 * @extends Component
 */
class ArticleView extends Component {
  state = { articles: [], error: null };

  componentWillMount() {
    axios
      .get(this.props.content_api_feed)
      .then(response => this.setState({ articles: response.data }))
      .catch(e =>
        this.setState({ error: (e && e.message) || 'Undefined error' }));
  }

  renderArticles() {
    return this.state.articles.map(article => (
      <ArticleContent key={article.nid} articleData={article} />
    ));
  }

  render() {
    if (this.state.articles.length === 0 && this.state.error) {
      return <Text>{this.state.error}</Text>;
    }

    return <ScrollView style={{}}>{this.renderArticles()}</ScrollView>;
  }
}

export default ArticleView;
