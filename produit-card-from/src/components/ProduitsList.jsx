import React from "react";
import ProduitCard from "./ProduitCard";
import "../styles/ProduitsList.css"

const ProduitsList = ({ produits }) => {
  if (!produits || produits.length === 0) {
    return <p>Aucun produit disponible.</p>;
  }

  return (
    <div className="products-list">
      {produits.map((produit, index) => (
        <ProduitCard key={index} produit={produit} />
      ))}
    </div>
  );
};

export default ProduitsList;
