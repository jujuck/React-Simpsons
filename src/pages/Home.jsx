import React from 'react';
import SimpsonList from '../components/SimpsonList';
import Footer from '../components/Footer';
import Article from '../components/Article/Article';

const Home = () => {
  return (
    <div className="App">
      <h1>Les Simpsons</h1>
      <SimpsonList />
      <Article index={2} displayButton={true} />
      <Article index={1} displayButton={false} />
      <Article index={0} displayButton={false} />
      <Footer />
    </div>
  )
}

export default Home