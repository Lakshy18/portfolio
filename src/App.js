import Footer from './components/footer';
import Navbar from './components/navbar';
import RoutesTo from './components/routes';
import "./style.scss";


function App() {
  return (
    <div className='app'>
    <Navbar/>
    <RoutesTo/>
    <Footer/>
    </div>
  );
}

export default App;

