
import './App.css';
import Appbar from './components/Appbar/appbar';
import Books from './components/books/books';
import Brand from './components/BrandSection/Brand';
import Photo from './components/PhotoSection/photo';
import Footer from './components/footer/footer';
import Subscription from './components/subscription/subscription';

function App() {
  return (
    <div>
      <Appbar></Appbar>
      <Photo></Photo>
      <Subscription></Subscription>
     <Books></Books>
     <Brand></Brand>
   <Footer></Footer>
      
    </div>
  );
}

export default App;
