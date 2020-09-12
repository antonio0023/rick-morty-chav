import React from 'react';
import Characters from './components/Characters';
import {Route} from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Route path='/' component={Characters} />
    </main>
  );
}

