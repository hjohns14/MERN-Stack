
const HelloWorld = (props) => {

    const {name, age} = props

    return (
        <>
        <h2>HelloWorld {name} </h2>
        <h2>Hi {name} you are {age}</h2>
        <h6>Dang you old</h6>
        </>
    )
}

export default HelloWorld