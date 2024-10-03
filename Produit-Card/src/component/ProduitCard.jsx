import React from "react";
import './ProductCard.css';

const ProduitCard = ({ produit }) => {
  return (
    <div className="product-card">
      <h2>{produit.nom}</h2>
      <p>Type: {produit.type}</p>
      <img src={produit.image} alt={`Image de ${produit.nom}`} width="200" />
      <p>Prix unitaire: {produit.prix_unitaire.toFixed(2)} €</p>

      <h3>Unités de mesure:</h3>
      <ul>
        {produit.unites_de_mesure.map((unite, index) => (
          <li key={index}>
            {unite.nom} ({unite.abbreviation})
          </li>
        ))}
      </ul>

      <h3>Variants:</h3>
      {produit.variants.map((variant, index) => (
        <div key={index} className="variant-card">
          <h4>{variant.nom}</h4>
          <p>Caractéristiques:</p>
          <ul>
            {Object.entries(variant.caracteristiques).map(
              ([key, value], index) => (
                <li key={index}>
                  {key}: {value}
                </li>
              )
            )}
          </ul>
          <p>Ajout de prix: +{variant.ajout_de_prix.toFixed(2)} €</p>
          <img
            src={variant.image}
            alt={`Image du variant ${variant.nom}`}
            width="150"
          />
        </div>
      ))}
    </div>
  );
};

export default ProduitCard
