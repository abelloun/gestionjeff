import {useState, useRef, useEffect} from 'react';


export default function NumberEdit({value, setValue}) {

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

