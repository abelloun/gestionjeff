import {useState, useRef} from 'react';
import ListeProduits from "./ListeProduits.js";

function ProduitForm({addProduit}) {
	
	const nameRef = useRef();
	
	function ajouter() {
		// ?????
		// addProduit(?????);
	}
	
	return (
		<div>
			<input type="text" placeholder="Nom du produit" /><br />
			<input type="number" min="0" step="1" placeholder="Quantité" /><br />
			<textarea placeholder="Description du produit" /><br />
			<button onClick={ajouter}>Ajouter</button>
		</div>
	);
}

export default function ProduitState({initProduits}) {
	const [prods, setProds] = useState(initProduits);
	function addProduit(newProduit) {
		// setProds(?????)
	}
	return <>
		<ProduitForm addProduit={} />
		<ListeProduits produits={prods} setProduits={setProds} />
	</>;
}

