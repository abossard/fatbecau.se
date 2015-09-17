import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'views/HomeView';
import QuoteView    from 'views/QuoteView';

export default (
  <Route component={CoreLayout}>
      <Route name='home' path='/' component={HomeView} />
      <Route name='quote' path='/quote' component={QuoteView} />
  </Route>
);
