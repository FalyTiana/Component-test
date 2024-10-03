import React, { useState } from 'react';
import '../styles/AjouterProduitForm.css';

const AjouterProduitForm = ({ onAddProduit }) => {
  const [nom, setNom] = useState("");
  const [prixUnitaire, setPrixUnitaire] = useState("");
  const [image, setImage] = useState("");
  const [variants, setVariants] = useState([{ couleur: "", taille: "", materiau: "", ajout_de_prix: "", image: "" }]);

  const handleAddVariant = () => {
    setVariants([...variants, { couleur: "", taille: "", materiau: "", ajout_de_prix: "", image: "" }]);
  };

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][field] = value;
    setVariants(updatedVariants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduit({
      nom,
      image,
      prix_unitaire: parseFloat(prixUnitaire),
      unites_de_mesure: [{ nom: "Pièce", abbreviation: "pcs" }],
      variants
    });
    setNom("");
    setPrixUnitaire("");
    setImage("");
    setVariants([{ couleur: "", taille: "", materiau: "", ajout_de_prix: "", image: "" }]);
  };

  return (
    <form onSubmit={handleSubmit} className="ajouter-produit-form">
      <h3>Ajouter un produit</h3>
      <div className="form-group">
        <label>Nom du produit:</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Prix unitaire:</label>
        <input type="number" value={prixUnitaire} onChange={(e) => setPrixUnitaire(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Image (URL):</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>

      <h4>Variantes</h4>
      {variants.map((variant, index) => (
        <div key={index} className="variant-fields">
          <div className="form-group">
            <label>Couleur:</label>
            <input
              type="text"
              value={variant.couleur}
              onChange={(e) => handleVariantChange(index, "couleur", e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Taille:</label>
            <input
              type="text"
              value={variant.taille}
              onChange={(e) => handleVariantChange(index, "taille", e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Matériau:</label>
            <input
              type="text"
              value={variant.materiau}
              onChange={(e) => handleVariantChange(index, "materiau", e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Ajout de prix:</label>
            <input
              type="number"
              value={variant.ajout_de_prix}
              onChange={(e) => handleVariantChange(index, "ajout_de_prix", e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image (URL) du variant:</label>
            <input
              type="text"
              value={variant.image}
              onChange={(e) => handleVariantChange(index, "image", e.target.value)}
            />
          </div>
        </div>
      ))}

      <button type="button" onClick={handleAddVariant} className="btn-add-variant">
        Ajouter une variante
      </button>
      <button type="submit" className="btn-submit">
        Ajouter le produit
      </button>
    </form>
  );
};

export default AjouterProduitForm;
