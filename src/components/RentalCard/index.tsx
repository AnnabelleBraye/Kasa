type RentalInfos = {
  cover: string,
  title: string
}

const RentalCard = ({
  cover,
  title
}: RentalInfos) => {
  return (
    <article className="rental-card">
      <img src={cover} alt="Rental picture" />

      <h2 className="rental-title">{title}</h2>
    </article>
  )
}

export default RentalCard