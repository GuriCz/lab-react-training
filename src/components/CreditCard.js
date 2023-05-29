function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    const last4Digits = number.slice(-4);
    const expirationYearString = String(expirationYear);
    const last2Digits = expirationYearString.slice(-2);
    const boxStyle = {
      backgroundColor: bgColor,
      color: color,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: '300px',
      height: '200px',
      padding: "5px"
    };
  
    const detailsStyle = {
      alignSelf: 'flex-end',
      textAlign: 'left',
      padding: "5px"
    };
    const detailsStyle2 = {
        alignSelf: 'flex-start',
        textAlign: 'left'
      };
  
    const numberStyle = {
      alignSelf: 'flex-start',
      textAlign: 'center'
    };
  
    return (
      <div className="container" style={boxStyle}>
        <p style={detailsStyle}>{type}</p>
        <p style={numberStyle}>**** **** ****{last4Digits}</p>
        <p style={detailsStyle2}>
          Expires: {expirationMonth}/{last2Digits} {bank}
        </p>
        <p style={detailsStyle2}>{owner}</p>
      </div>
    );
  }
  
  export default CreditCard;