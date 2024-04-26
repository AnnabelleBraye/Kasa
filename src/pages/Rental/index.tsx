import { useParams } from "react-router-dom";

const Rental = () => {
  const { id } = useParams();
  return (
    <div>{id}</div>
  )
}

export default Rental;