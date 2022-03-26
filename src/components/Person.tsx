type personsProps = {
    names : {
        "first":String,
        "last": String
    }[]
}

type eachItem = {
    "first":String,
    "last": String
}

const Person = (props : personsProps) => {
    return (
        <div>
            {props.names.map((item:eachItem) => {
                return <h1>The name is {item.first} {item.last}</h1>
            })
            }
        </div>
    )
}
export default Person;