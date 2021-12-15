import {useState} from 'react';


function NumberEdit({value}) {

	const [editable, setEditable] = useState(false);
	
	function activate() {
		setEditable(true);
	}
	
	function deactivate(e) {
		if ( e.which == 13 )
			setEditable(false);
	}
	
	function setNewValue(e) {
		alert(e.target.value);
	}
	
	return (
		<td onClick={activate}>
			{!editable ? value :
				<input 
					type="number" 
					value={value} 
					onKeyPress={deactivate}
					onChange={setNewValue}
				/>
			}
		</td>
	);
}

export default function ListeProduits({produits}) {
	
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
				{produits.map((p, i) => (
				<tr>
					<td>{p.name}</td>
					<td><NumberEdit value={p.quantity} /></td>
					<td>{p.description}</td>
				</tr>
				))}
			</tbody>
		</table>
	);
}

