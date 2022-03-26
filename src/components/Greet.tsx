type greetProps = {
    name : String,
    numOfUnreadMsg: Number
}

const Greet = (props : greetProps) => {
    return (
        <div>
            Hello {props.name}, you have {props.numOfUnreadMsg} unread messages.
        </div>
    )
}

export default Greet;