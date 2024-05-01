import { Link } from "react-router-dom"

type RentalInfos = {
  id: string,
  cover: string,
  title: string
}

const RentalCard = ({
  id,
  cover,
  title
}: RentalInfos) => {
  return (
    <Link to={`/rental/${id}`}>
      <article className="rental-card">
        <img src={cover} alt="Rental picture" />

        <h2 className="rental-title">{title}</h2>
      </article>
    </Link>
  )
}

export default RentalCard