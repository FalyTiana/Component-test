import React, { useState } from 'react'
import './ProduitVariant.css'

function ProduitVariant({ produit }){
    const [selectedOptions, setSelectedOptions] = useState({
      couleur: null,
      taille: null
    });
  
    // Fonction pour gérer les sélections de caractéristiques
    const handleOptionChange = (key, value) => {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [key]: value
      }));
    };
  
    // Fonction pour déterminer les valeurs possibles pour chaque caractéristique
    const getAvailableOptions = (key) => {
      const otherKey = key === "couleur" ? "taille" : "couleur";
      const selectedOtherValue = selectedOptions[otherKey];
  
      // Filtrer les variantes disponibles basées sur l'autre option sélectionnée
      return produit.variants
        .filter((variant) => !selectedOtherValue || variant.caracteristiques[otherKey] === selectedOtherValue)
        .map((variant) => variant.caracteristiques[key]);
    };
  
    // Déterminer la variante sélectionnée si toutes les options sont choisies
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
            <button
              key={couleur}
              onClick={() => handleOptionChange("couleur", couleur)}
              disabled={!getAvailableOptions("couleur").includes(couleur)}
              className={selectedOptions.couleur === couleur ? "active" : ""}
            >
              {couleur}
            </button>
          ))}
        </div>
  
        {/* Sélection de la taille */}
        <div>
          <h4>Taille:</h4>
          {["S", "M", "L"].map((taille) => (
            <button
              key={taille}
              onClick={() => handleOptionChange("taille", taille)}
              disabled={!getAvailableOptions("taille").includes(taille)}
              className={selectedOptions.taille === taille ? "active" : ""}
            >
              {taille}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default ProduitVariant