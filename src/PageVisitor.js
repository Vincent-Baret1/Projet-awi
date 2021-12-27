import './App.css';
import MenuBar from './components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardFicheTechnique from './components/CardFicheTechnique/CardFicheTechnique';
import DataIngredients from './DataIngredients.json'

function PageVisitor() {
  return (
    <div className="App">
      <p>PAS DE MANUBAR</p>
      <br />
      <h1>Fiches techniques déjà réalisées</h1>
      <div class="carte">
        <CardFicheTechnique />
      </div>
    </div>
  );
}

export default PageVisitor;