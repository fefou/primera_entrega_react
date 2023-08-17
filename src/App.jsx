
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



const App = () => {
 
  return (
    
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda"/>
    </div>
  )
}

export default App