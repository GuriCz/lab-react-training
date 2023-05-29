function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="id-card">
      <div className="picture">
        <img src={picture} alt="Profile" />
      </div>

      <div className="data">
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;