// Code EyesOnMe Component Here
function EyesOnMe() {
    function blurText() {
        console.log("Hey! Eyes on me!")
    }

    function focusText() {
        console.log("Good!")
    }


    return (
        <button onBlur={blurText} onFocus={focusText}>Eyes on me</button>
    )
}

export default EyesOnMe;