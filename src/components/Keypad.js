// Code Keypad Component Here
function Keypad() {

    function enteringPass() {
        console.log("Entering password...")
    }

    return (
        <input onChange={enteringPass} type="password"></input>
    )
}

export default Keypad;