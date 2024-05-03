import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/index.tsx";
import Loader from "../../components/Loader";
import { RentalType } from "../Home";
import Carrousel from "../../components/Carrousel/index.tsx";
import Tag from "../../components/Tag/tag.tsx";
import Rating from "../../components/Rating/index.tsx";
import CollapsePanel from "../../components/CollapsePanel/index.tsx";

const Rental = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {data, isLoading}: {data: RentalType[], isLoading: boolean} = useFetch('/src/data/rentals.json')
  
  if (isLoading || data.length === 0) {
    return <Loader />;
  }

  const item = data.find((item: RentalType) => item.id === id) || null;

  if (!item) {
    navigate('/error')
    return null;
  }

  return (
    <div className="rental-container">
      <Carrousel pictures={item.pictures} /> 

      <section className="rental-informations">
        <div className="first-container">
          <h1>{item.title}</h1>
          <p>{item.location}</p>
          <div className="tag-container">
            {item.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div> 

        <div className="second-container">
            <div className="rating-container">
              <Rating rating={item.rating} />
            </div>
            <div className="host-infos-container">
              <h2 className="host-name">{item.host.name}</h2>
              <img src={item.host.picture} alt='Host picture' />
            </div>
        </div>
      </section>
      <section className="collapses-container">
        <CollapsePanel title='Description' data={item.description} />
        <CollapsePanel title='Equipements' data={item.equipments} />
      </section>
    </div>
  )
}

export default Rental;