function AddComponent(props){
    return (
        <div className="alert alert-danger" role="alert">
            {props.message}
        </div>
    )
}

export default AddComponent