import './App.css';

function App() {
  return (
    <div className="App">
     <form>
  <div class="container" id="container">
    <center> <p class="head">Reac-JS with GoMyCode</p></center>
    <div class="row"> 
      <div class="col" id="in">
        <div class="input-group mb-3"> 
          <span class="input-group-text" id="basic-addon1">Nom</span>
          <input type="text" class="form-control" placeholder="Nom" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
      
    </div>
    <div class="row">
      <div class="col" id="in">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Prenom</span>
          <input type="text" class="form-control" placeholder="Prenom" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col" id="in">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Date de naissance</span>
          <input type="date" class="form-control" placeholder="Prenom" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col" id="in">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Num telephone</span>
          <input type="text" class="form-control" placeholder="Num telephone" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col" id="in">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Email</span>
          <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-secondary btn-lg">Enregistrer</button>
  </div>
</form>
<form>
  <div class="container" id="container">
    <center> <p class="head">Reac-JS with GoMyCode</p></center>
    <div class="row"> 
      <div class="col" id="in">
        <div class="input-group mb-3"> 
          <span class="input-group-text" id="basic-addon1">UserName</span>
          <input type="text" class="form-control" placeholder="UserName" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
      
    </div>
    <div class="row">
      <div class="col" id="in">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">mot de passe</span>
          <input type="password" class="form-control" placeholder="mot de passe" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col" id="in">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">mot de passe</span>
          <input type="passwordt" class="form-control" placeholder="verifier votre mot de passe" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-secondary btn-lg">Enregistrer</button>
    
  </div>
</form>
    </div>
  );
}

export default App;
