import {useState} from 'react';
import ListeProduits from "./ListeProduits.js";

export default function ProduitState({initProduits}) {
	const [prods, setProds] = useState(initProduits);
	return <ListeProduits produits={prods} setProduits={setProds} />;
}

