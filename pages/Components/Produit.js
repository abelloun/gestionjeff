import NumberEdit from './NumberEdit.js';
import TextEdit from './TextEdit.js';
import TextAreaEdit from './TextAreaEdit.js';

export default function Produit({produit: p, setProduit}) {
	
	function setQuantity(q) {
		setProduit({...p, quantity: q});
	}
	
	function setName(n) {
		setProduit({...p, name: n});
	}
	
	function setDescription(d) {
		setProduit({...p, description: d});
	}

	return (
		<tr>
			<td><TextEdit value={p.name} setValue={setName} /></td>
			<td><NumberEdit value={p.quantity} setValue={setQuantity} /></td>
			<td><TextAreaEdit value={p.description} setValue={setDescription} /></td>
		</tr>
	);
}

