import React from 'react'
import "./ProduitVariantCard.css"

function ProduitVariantCard({ produit }) {
    return (
      <div className="product-variants-container">
        {produit.variants.map((variant, index) => (
          <div key={index} className="variant-card">
            <img
              src={variant.image ? variant.image : produit.image}
              alt={`Image de ${variant.nom}`}
              width="200"
            />
            <h2>{produit.nom}</h2>
            <p>Prix: {(produit.prix_unitaire + variant.ajout_de_prix).toFixed(2)} €</p>
            
            <h3>Unités de mesure:</h3>
            <ul>
              {produit.unites_de_mesure.map((unite, index) => (
                <li key={index}>
                  {unite.nom} ({unite.abbreviation})
                </li>
              ))}
            </ul>
  
            <h3>Caractéristiques du variant:</h3>
            <ul>
              {Object.entries(variant.caracteristiques).map(([key, value], index) => (
                <li key={index}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

export default ProduitVariantCard