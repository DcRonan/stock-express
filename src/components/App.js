import React from 'react';
import Routes from '../routes';
import Navbar from './Navbar';

const App = () => (
  <>
    <div className="flex w-screen">
      <Navbar />
      <main className="w-full bg-darkgrey">
        <Routes />
      </main>
    </div>
  </>
);

export default App;
