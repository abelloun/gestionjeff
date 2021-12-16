import {useState, useRef, useEffect} from 'react';


// https://teststoreschola.myshopify.com/admin/apps/f34f7cb1c3cd83a51ae99bcd091118e9/?shop=teststoreschola.myshopify.com&host=dGVzdHN0b3Jlc2Nob2xhLm15c2hvcGlmeS5jb20vYWRtaW4

function NumberEdit({value, setValue}) {

	const [editable, setEditable] = useState(false);
	const inputRef = useRef();
	const firstValue = useRef();
	
	function activate() {
		setEditable(true);
		firstValue.current = value;
	}
	
	function deactivate() {
		setEditable(false);
	}
	
	function onBlur(e) {
		deactivate();
	}
	
	function onChange(e) {
		setValue(parseInt(e.target.value, 10) || 0);
	}
	
	function onKeyPress(e) {
		if (e.which === 13)
			deactivate();
		if (e.which === 27) {
			deactivate();
			setValue(firstValue.current);
		}
	}
	
	useEffect(() => {
		if ( inputRef.current )
			inputRef.current.focus();
	});
	
	return (
		<td onClick={activate} width="75px">
			{!editable ? value :
				<input 
					type="number" 
					min="0"
					step="1"
					style={{width: "75px"}}
					ref={inputRef}
					value={value}
					onBlur={onBlur}
					onChange={onChange}
					onKeyPress={onKeyPress}
				/>
			}
		</td>
	);
}

function Produit({produit: p, setProduit}) {
	
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


function replaceElem(arr, i, elem) {
	return arr.slice(0, i).concat([elem]).concat(arr.slice(i + 1, arr.length));
}

export default function ListeProduits({produits, setProduits}) {
	
	function setProduit(i) {
		return newProduit => setProduits(replaceElem(produits, i, newProduit));
	}
	
	return (
		<>
		<button onClick={() => console.log(produits)}>hello</button>
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
		</>
	);
}

