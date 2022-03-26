type StatusProps = {
    status : "loading" | "success" | "error"
}

const Status = (props : StatusProps) => {
    
    let message="error";
    if(props.status === "loading") {
        message = "loading"
    }else if(props.status === "success") {
        message = "success"
    }
    
    return (
        <div>
            {message}
        </div>
    )
}
export default Status;
