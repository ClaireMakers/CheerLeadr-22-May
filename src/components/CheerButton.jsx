const CheerButton = (props) => { 

    const handleClick = () => { 
        props.setLetter(props.letter)
        //this updates the state in the parent component, triggering a re-render of the App component
    }

    console.log(props) 
    // {letter: "M", setLetter: setLetter function () => {} }
 
    return (
        <button onClick={handleClick}>{props.letter}</button>
    )
}

export default CheerButton;