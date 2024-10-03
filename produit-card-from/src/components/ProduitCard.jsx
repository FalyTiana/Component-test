import React, { useState } from "react";
import '../styles/ProduitCard.css';

const ProduitCard = ({ produit }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    couleur: produit.variants[0].couleur,
    taille: produit.variants[0].taille,
    materiau: produit.variants[0].materiau
  });

  const selectedVariant = produit.variants.find(
    (variant) =>
      variant.couleur === selectedOptions.couleur &&
      variant.taille === selectedOptions.taille &&
      variant.materiau === selectedOptions.materiau
  );

  return (
    <div className="product-card">
      <img src={selectedVariant?.image || produit.image} alt={`Image de ${produit.nom}`} width="200" />
      <h2>{produit.nom}</h2>
      <p>Prix: {(produit.prix_unitaire + parseFloat(selectedVariant?.ajout_de_prix || 0)).toFixed(2)} €</p>

      <div>
        <strong>Variantes :</strong>
        {produit.variants.map((variant, index) => (
          <div key={index}>
            <p>Couleur: {variant.couleur}, Taille: {variant.taille}, Matériau: {variant.materiau}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProduitCard;
