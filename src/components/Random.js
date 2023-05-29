function Random(props) {
    const { min, max } = props;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

export default Random;