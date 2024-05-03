type RatingType = {
  rating: string
}

const Rating = ({rating}: RatingType) => {
  const starsSrc: string[] = getStars(parseInt(rating));

  return (
    <div className="stars-container">
      {starsSrc.map((src, index) => (
        <img key={index} className="star" src={src} alt='star' />
      ))
    }
    </div>
  )
}

export default Rating;

const getStars = (rating: number): string[] => {
  const starsSrc: string[] = new Array(5).fill('/src/assets/svg/star.svg');
  if (rating !== 0) {
    starsSrc.fill('/src/assets/svg/star-colored.svg', 0, rating);
  }

  return starsSrc;
}