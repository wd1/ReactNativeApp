// @flow

import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import DashboardView from '../Dashboard/DashboardView';
import ArticleView from '../Article/ArticleView';
import ArticlePage from '../Article/ArticlePage';
import ScrapbookView from '../Scrapbook/ScrapbookView';
import ScrapbookCreate from '../Scrapbook/ScrapbookCreate';
import BreatheView from '../Breathe';

/**
 * The router component, defines the scenes/views
 *
 * @return {ReactElement} The React component to render
 */
const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="DashboardView"
        component={DashboardView}
        title="Navigation"
        initial
        hideNavBar
      />
      <Scene key="ArticleView" component={ArticleView} title="" />
      <Scene key="ArticlePage" component={ArticlePage} title="" />
      <Scene
        key="ScrapbookView"
        component={ScrapbookView}
        title="Scrapbook"
        rightTitle="Add"
        onRight={() => {
          Actions.ScrapbookCreate();
        }}
      />
      <Scene
        key="ScrapbookCreate"
        component={ScrapbookCreate}
        title="Add Note"
      />
      <Scene key="BreatheView" component={BreatheView} title="Breathe" />
    </Scene>
  </Router>
);

export default RouterComponent;
