import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import HomePage from './src/pages/Home';

const App = (props) => {

  return (
    // NativeRouter : untuk mengakomodir routing page
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </NativeRouter>
  )
};

export default App;