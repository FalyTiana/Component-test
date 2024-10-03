import './App.css'

import React, { useState } from "react";
import AjouterProduitForm from "./components/AjouterProduitForm";
import ProduitsList from "./components/ProduitsList";

const App = () => {
  const [produits, setProduits] = useState([]);

  const handleAddProduit = (nouveauProduit) => {
    setProduits([...produits, nouveauProduit]);
  };

  return (
    <div>
      <AjouterProduitForm onAddProduit={handleAddProduit} />
      <ProduitsList produits={produits} />
    </div>
  );
};

export default App;

