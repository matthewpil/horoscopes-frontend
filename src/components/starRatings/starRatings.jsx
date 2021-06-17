import "./starRatings.css";
import { Rating } from "@material-ui/lab";

export default function StarRating(props) {
  const starRatingsList = [];

  console.log(props);

  const starRatings = props.starRatings;

  for (const property in starRatings) {
    const starRow = (
      <section className="star-rating-row" key={property}>
        <h5>{property}</h5>
        <Rating
          name={property}
          defaultValue={starRatings[property]}
          precision={1}
          readOnly
        />
      </section>
    );

    starRatingsList.push(starRow);
  }

  return (
    <section className="star-ratings-container">
      <section className="star-rating-heading">
        <h3>Todays Star Ratings</h3>
        <p> Your mood today</p>
      </section>
      <section className="star-ratings-values">{starRatingsList}</section>
    </section>
  );
}
