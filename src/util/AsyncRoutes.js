/**
 * AsyncRoutes
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

//app loader
import ContentLoader from '../components/global/loaders/ContentLoader';

//Home
const AsyncHomePageComponent = Loadable({
   loader: () => import('../routes/home'),
   loading: () => <ContentLoader />
});

// Tweet
const AsyncTweetPageComponent = Loadable({
   loader: () => import('../routes/tweet'),
   loading: () => <ContentLoader />
});

// page404
const AsyncPageNotFoundComponent = Loadable({
   loader: () => import('../routes/page-404'),
   loading: () => <ContentLoader />,
});

export {
   AsyncHomePageComponent,
   AsyncTweetPageComponent,
   AsyncPageNotFoundComponent,
};