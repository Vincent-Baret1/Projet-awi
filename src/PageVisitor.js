import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardFicheTechnique from './components/CardFicheTechnique/CardFicheTechnique';
import DataIngredients from './DataIngredients.json'

function PageVisitor() {
  return (
    <div className="App">
      <br />
      <h1>Fiches techniques déjà réalisées</h1>
      <div class="carte">
        <CardFicheTechnique visitor='none'/>
      </div>
    </div>
  );
}

export default PageVisitor;