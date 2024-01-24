//props is an object with the key-value pairs you passed down from the parent component.
// Here is it: {letter: letter, setLetter: f}

const CheerButton = (props) => { 
     
    const handleClick = () => { 
        props.setLetter(props.letter);
    }

    return (
            <button onClick={ handleClick }>{props.letter}</button>
    )
}

export default CheerButton