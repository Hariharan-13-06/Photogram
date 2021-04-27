import React from 'react';
import Header from './components/Header/Header';
import Posts from './components/Post/Posts';
import Upload from './components/Upload/Upload';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="flex lg:flex-row flex-col-reverse justify-center">
        <Posts />
        <Upload />
      </div>
    </GlobalProvider>
  );
}

export default App;
