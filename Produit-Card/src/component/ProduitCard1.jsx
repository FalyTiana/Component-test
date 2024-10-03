import React, { useState } from 'react'
import "./ProduitCard1.css"

function ProduitCard1({ produit }) {
    const [selectedOptions, setSelectedOptions] = useState({
      couleur: null,
      taille: null
    });
  
    // Fonction pour gérer les changements de sélection
    const handleOptionChange = (key, value) => {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [key]: value
      }));
    };
  
    // Fonction pour déterminer les options disponibles pour une caractéristique donnée
    const getAvailableOptions = (key) => {
      const otherKey = key === "couleur" ? "taille" : "couleur";
      const selectedOtherValue = selectedOptions[otherKey];
  
      return produit.variants
        .filter((variant) => !selectedOtherValue || variant.caracteristiques[otherKey] === selectedOtherValue)
        .map((variant) => variant.caracteristiques[key]);
    };
  
    // Variante sélectionnée si toutes les options sont choisies
    const selectedVariant = produit.variants.find(
      (variant) =>
        variant.caracteristiques.couleur === selectedOptions.couleur &&
        variant.caracteristiques.taille === selectedOptions.taille
    );
  
    return (
      <div className="product-card">
        <img
          src={selectedVariant ? selectedVariant.image : produit.image}
          alt={`Image de ${produit.nom}`}
          width="300"
        />
        <h2>{produit.nom}</h2>
        <p>Prix: {selectedVariant ? (produit.prix_unitaire + selectedVariant.ajout_de_prix).toFixed(2) : produit.prix_unitaire.toFixed(2)} €</p>
  
        <h3>Unités de mesure:</h3>
        <ul>
          {produit.unites_de_mesure.map((unite, index) => (
            <li key={index}>
              {unite.nom} ({unite.abbreviation})
            </li>
          ))}
        </ul>
  
        <h3>Choisissez les caractéristiques:</h3>
  
        {/* Sélection de la couleur */}
        <div>
          <h4>Couleur:</h4>
          {["rouge", "bleu", "vert"].map((couleur) => (
            <label key={couleur}>
              <input
                type="radio"
                name="couleur"
                value={couleur}
                checked={selectedOptions.couleur === couleur}
                onChange={() => handleOptionChange("couleur", couleur)}
                disabled={!getAvailableOptions("couleur").includes(couleur)}
              />
              {couleur}
            </label>
          ))}
        </div>
  
        {/* Sélection de la taille */}
        <div>
          <h4>Taille:</h4>
          {["S", "M", "L"].map((taille) => (
            <label key={taille}>
              <input
                type="radio"
                name="taille"
                value={taille}
                checked={selectedOptions.taille === taille}
                onChange={() => handleOptionChange("taille", taille)}
                disabled={!getAvailableOptions("taille").includes(taille)}
              />
              {taille}
            </label>
          ))}
        </div>
      </div>
    );
  };

export default ProduitCard1