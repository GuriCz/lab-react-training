function Rating(props) {
    let rating;
  
    if (props.children < 0.5) {
      rating = <p>☆☆☆☆☆</p>;
    } else if (props.children >= 0.5 && props.children < 1.49) {
      rating = <p>★☆☆☆☆</p>;
    } else if (props.children >= 1.49 && props.children < 2.49) {
      rating = <p>★★☆☆☆</p>;
    } else if (props.children >= 2.49 && props.children < 3.49) {
      rating = <p>★★★☆☆</p>;
    } else if (props.children >= 3.49 && props.children < 4.49) {
      rating = <p>★★★★☆</p>;
    } else if (props.children >= 4.49) {
      rating = <p>★★★★★</p>;
    }
  
    return rating;
  }

export default Rating; 
