import React from 'react';
import { View } from 'react-native';
import { BackButton } from 'react-router-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import DetailPage from './src/pages/Detail';
import HomePage from './src/pages/Home';

const App = (props) => {

  return (
    // NativeRouter : untuk mengakomodir routing page
    <NativeRouter>
      <BackButton >
        <Route exact path="/" component={HomePage} />
        <Route path="/detail" component={DetailPage} />
      </BackButton>
    </NativeRouter>
  )
};

export default App;