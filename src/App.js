import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Content from './components/Content';
import { MainProvider } from './context/MainContext';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <MainProvider>
      <Nav/>
      <MobileNav/>
      <Content/>
      </MainProvider>
    </div>
  );
}

export default App;
