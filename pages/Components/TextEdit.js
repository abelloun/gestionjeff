import {useState, useRef, useEffect} from 'react';


export default function TextEdit({value, setValue}) {

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
		setValue(e.target.value);
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
		<td onClick={activate} width="150px">
			{!editable ? value :
				<input 
					type="text"
					style={{width: "150px"}}
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

