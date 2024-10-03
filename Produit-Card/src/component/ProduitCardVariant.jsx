import React, { useState } from 'react'
import "./ProduitCardVariant.css"

function ProduitCardVariant ({ produit }) {
    // État pour stocker la variante sélectionnée
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  
    // Fonction pour changer de variant en fonction de la caractéristique sélectionnée
    const handleVariantChange = (index) => {
      setSelectedVariantIndex(index);
    };
  
    // Variante actuellement sélectionnée
    const selectedVariant = produit.variants[selectedVariantIndex];
  
    return (
      <div className="product-card">
        <img
          src={selectedVariant.image ? selectedVariant.image : produit.image}
          alt={`Image de ${produit.nom}`}
          width="300"
        />
        <h2>{produit.nom}</h2>
        <p>Prix: {(produit.prix_unitaire + selectedVariant.ajout_de_prix).toFixed(2)} €</p>
  
        <h3>Unités de mesure:</h3>
        <ul>
          {produit.unites_de_mesure.map((unite, index) => (
            <li key={index}>
              {unite.nom} ({unite.abbreviation})
            </li>
          ))}
        </ul>
  
        <h3>Caractéristiques disponibles:</h3>
        <div className="caracteristiques-selection">
          {produit.variants.map((variant, index) => (
            <button
              key={index}
              onClick={() => handleVariantChange(index)}
              className={index === selectedVariantIndex ? "active" : ""}
            >
              {Object.entries(variant.caracteristiques).map(
                ([key, value], idx) => (
                  <span key={idx}>
                    {key}: {value}
                  </span>
                )
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default ProduitCardVariant