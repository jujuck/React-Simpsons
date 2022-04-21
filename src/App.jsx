import './App.css'
import SimpsonList from './components/SimpsonList';
import Footer from './components/Footer';
import Article from './components/Article';

function App() {

  return (
    <div className="App">
      <h1>Les Simpsons</h1>
      <SimpsonList />
      <Article index={0} displayButton={true} />
      <Article index={1} displayButton={false} />
      <Article index={2} displayButton={false} />
      <Footer />
    </div>
  )
}

export default App
