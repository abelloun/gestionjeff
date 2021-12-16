import {useState, useRef, useEffect} from 'react';


export default function TextAreaEdit({value, setValue}) {

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
				<textarea 
					rows="5"
					style={{width: "100%"}}
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

