import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import './App.css';

function App() {
  return (
  <>
      <Header/>
      <main className='py-3 color-body'>
        <Container>
          <Body/>
        </Container>
      </main>
      <Footer/>
  </>
  );
}

export default App;
