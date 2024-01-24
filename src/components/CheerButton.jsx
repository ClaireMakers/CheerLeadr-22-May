// setLetter function to change the state in the parent component
// Which letter should the button display? 
// Which letter should the button set the letter to
// {letter: letter, setLetter: F}

const CheerButton = (props) => { 
     
    const handleClick = () => { 
        props.setLetter(props.letter);
    }

    return (
            <button onClick={ handleClick }>{props.letter}</button>
    )
}

export default CheerButton