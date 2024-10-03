import React, { useState, useEffect } from 'react'
import "./ProduitCard2.css"

function ProduitCard4({ produit }) {
    // Initialiser dynamiquement selectedOptions à partir des caractéristiques du produit
    const initializeSelectedOptions = () => {
      const initialOptions = {};
      Object.keys(produit.variants[0].caracteristiques).forEach((key) => {
        // Utiliser la première valeur disponible pour chaque caractéristique comme valeur par défaut
        initialOptions[key] = produit.variants[0].caracteristiques[key];
      });
      return initialOptions;
    };
  
    const [selectedOptions, setSelectedOptions] = useState(initializeSelectedOptions());
  
    // Fonction pour gérer le comportement de "toggle" des caractéristiques
    const handleOptionToggle = (key, value) => {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [key]: prevState[key] === value ? null : value // Décoche si c'est déjà sélectionné
      }));
    };
  
    // Fonction pour déterminer les options disponibles pour une caractéristique donnée
    const getAvailableOptions = (key) => {
      const otherKeys = Object.keys(selectedOptions).filter(k => k !== key);
      
      return produit.variants
        .filter((variant) => 
          otherKeys.every(otherKey => !selectedOptions[otherKey] || variant.caracteristiques[otherKey] === selectedOptions[otherKey])
        )
        .map((variant) => variant.caracteristiques[key]);
    };
  
    // Variante sélectionnée si toutes les options sont choisies
    const selectedVariant = produit.variants.find(
      (variant) =>
        Object.keys(selectedOptions).every(key => variant.caracteristiques[key] === selectedOptions[key])
    );
  
    return (
      <div className="product-card">
        <img
          src={selectedVariant ? (selectedVariant.image?  selectedVariant.image : produit.image) : produit.image}
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
  
        {/* Boucle pour afficher dynamiquement chaque caractéristique */}
        {Object.keys(produit.variants[0].caracteristiques).map((key) => (
          <div key={key}>
            <h4>{key.charAt(0).toUpperCase() + key.slice(1)}:</h4>
            {Array.from(new Set(produit.variants.map(variant => variant.caracteristiques[key]))).map((value) => (
              <label key={value}>
                <input
                  type="checkbox"
                  name={key}
                  value={value}
                  checked={selectedOptions[key] === value}
                  onChange={() => handleOptionToggle(key, value)}
                  disabled={!getAvailableOptions(key).includes(value)}
                />
                {value}
              </label>
            ))}
          </div>
        ))}
      </div>
    );
  };

export default ProduitCard4