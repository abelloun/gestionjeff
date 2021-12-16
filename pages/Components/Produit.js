import NumberEdit from './NumberEdit.js';

export default function Produit({produit: p, setProduit}) {
	
	function setQuantity(q) {
		setProduit({...p, quantity: q});
	}

	return (
		<tr>
			<td>{p.name}</td>
			<td><NumberEdit value={p.quantity} setValue={setQuantity} /></td>
			<td>{p.description}</td>
		</tr>
	);
}

