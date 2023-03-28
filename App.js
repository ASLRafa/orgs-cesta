import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Cesta from './src/screen/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
