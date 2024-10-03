import './App.css'
import ProduitCard from './component/ProduitCard';
import ProduitCard1 from './component/ProduitCard1';
import ProduitCard2 from './component/ProduitCard2';
import ProduitCard3 from './component/ProduitCard3';
import ProduitCard4 from './component/ProduitCard4';
import ProduitCardVariant from './component/ProduitCardVariant';
import ProduitsList from './component/ProduitsList ';
import ProduitVariant from './component/ProduitVariant';
import ProduitVariantCard from './component/ProduitVariantCard';

// Exemple d'utilisation du composant
const App = () => {
  // const produit = {
  //   nom: "Nom du produit",
  //   type: "consommable",
  //   image: "https://via.placeholder.com/200",
  //   prix_unitaire: 100.0,
  //   unites_de_mesure: [
  //     { nom: "Kilogramme", abbreviation: "kg" },
  //     { nom: "Litre", abbreviation: "L" }
  //   ],
  //   variants: [
  //     {
  //       nom: "Variant 1",
  //       caracteristiques: { couleur: "rouge", taille: "M" },
  //       ajout_de_prix: 10.0,
  //       image: "https://via.placeholder.com/150"
  //     },
  //     {
  //       nom: "Variant 2",
  //       caracteristiques: { couleur: "bleu", taille: "L" },
  //       ajout_de_prix: 15.0,
  //       image: "https://via.placeholder.com/150"
  //     }
  //   ]
  // };

  // const produit = {
  //   nom: "T-shirt",
  //   image: "https://via.placeholder.com/200",
  //   prix_unitaire: 20.0,
  //   unites_de_mesure: [
  //     { nom: "Pièce", abbreviation: "pcs" }
  //   ],
  //   variants: [
  //     {
  //       nom: "Variant 1",
  //       caracteristiques: { couleur: "rouge", taille: "M", materiau: "coton" },
  //       ajout_de_prix: 2.0,
  //       image: "https://via.placeholder.com/150"
  //     },
  //     {
  //       nom: "Variant 2",
  //       caracteristiques: { couleur: "bleu", taille: "L", materiau: "polyester" },
  //       ajout_de_prix: 3.0,
  //       image: "https://via.placeholder.com/150"
  //     },
  //     {
  //       nom: "Variant 3",
  //       caracteristiques: { couleur: "rouge", taille: "S", materiau: "coton" },
  //       ajout_de_prix: 1.0,
  //       image: ""
  //     },
  //     {
  //       nom: "Variant 4",
  //       caracteristiques: { couleur: "vert", taille: "M", materiau: "coton" },
  //       ajout_de_prix: 1.5,
  //       image: ""
  //     }
  //   ]
  // };
  const produits = [
    {
      nom: "T-shirt",
      image: "https://via.placeholder.com/200",
      prix_unitaire: 20.0,
      unites_de_mesure: [
        { nom: "Pièce", abbreviation: "pcs" }
      ],
      variants: [
        {
          nom: "Variant 1",
          caracteristiques: { couleur: "rouge", taille: "M", materiau: "coton" },
          ajout_de_prix: 2.0,
          image: "https://via.placeholder.com/150"
        },
        {
          nom: "Variant 2",
          caracteristiques: { couleur: "bleu", taille: "L", materiau: "polyester" },
          ajout_de_prix: 3.0,
          image: "https://via.placeholder.com/150"
        }
      ]
    },
    {
      nom: "Pantalon",
      image: "https://via.placeholder.com/200",
      prix_unitaire: 35.0,
      unites_de_mesure: [
        { nom: "Pièce", abbreviation: "pcs" }
      ],
      variants: [
        {
          nom: "Variant 1",
          caracteristiques: { couleur: "noir", taille: "L", materiau: "jean" },
          ajout_de_prix: 4.0,
          image: "https://via.placeholder.com/150"
        },
        {
          nom: "Variant 2",
          caracteristiques: { couleur: "bleu", taille: "M", materiau: "jean" },
          ajout_de_prix: 3.5,
          image: "https://via.placeholder.com/150"
        }
      ]
    }
  ];

  return <ProduitsList produits={produits} />;
};

export default App
