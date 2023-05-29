function DriverCard (props){
    const {name,rating, img} = props;
    const {model, licensePlate} = props.car;

    return (
        <div className="id-card-car">
            <div className="picture">
                <img src={img} alt="Profile" />
            </div>
            <p>{name}</p>
            <p>{rating}</p>
            <p>{model}</p>
            <p>{licensePlate}</p>
        </div>
    )
}

export default DriverCard;