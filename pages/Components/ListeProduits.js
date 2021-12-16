import Produit from "./Produit.js";


function replaceElem(arr, i, elem) {
	return arr.slice(0, i).concat([elem]).concat(arr.slice(i + 1, arr.length));
}

export default function ListeProduits({produits, setProduits}) {
	
	function setProduit(i) {
		return newProduit => setProduits(replaceElem(produits, i, newProduit));
	}
	
	return (
		<table border="1" cellspacing="0" cellpadding="5" width="100%">
			<thead>
				<tr>
					<th>produit</th>
					<th>quantité</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				{produits.map((p, i) => (<Produit produit={p} setProduit={setProduit(i)}/>))}
			</tbody>
		</table>
	);
}

