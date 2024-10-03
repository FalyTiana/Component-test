import React from 'react'
import ProduitCard4 from './ProduitCard4';
import ProduitCard5 from './ProduitCard5';

function ProduitsList ({ produits }) {
     // Vérifier que produits est défini et qu'il s'agit d'un tableau
  if (!produits || produits.length === 0) {
    return <p>Aucun produit disponible.</p>; // Si pas de produits, afficher un message
  }
  
    return (
      <div className="products-list">
        {produits.map((produit, index) => (
          <ProduitCard5 key={index} produit={produit} />
        ))}
      </div>
    );
  };
export default ProduitsList 