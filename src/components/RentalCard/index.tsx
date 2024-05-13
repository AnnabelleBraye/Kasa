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
        <div className="img">
          <img src={cover} alt="Rental picture" />
        </div>

        <h2 className="rental-title">{title}</h2>
      </article>
    </Link>
  )
}

export default RentalCard