import BackgroundZone from "../../components/BackgroundZone";
import Loader from "../../components/Loader";
import RentalCard from "../../components/RentalCard";
import { useFetch } from "../../utils/hooks/index.tsx";

export type RentalType = {
  id: string,
  title: string,
  cover: string,
  pictures: string[],
  description: string,
  host: {
    name: string,
    picture: string,
  },
  rating: string,
  location: string,
  equipments: string[],
  tags: string[]
}

const Home = () => {
  const {data, isLoading}: {data: RentalType[], isLoading: boolean} = useFetch('/src/data/rentals.json')

  const rentalsList: JSX.Element[] = data.map((rental) => (
    <RentalCard key={rental.id} id={rental.id} cover={rental.cover} title={rental.title} />
  ))

  let rentalContainerClasses: string = 'rentals-container';
  isLoading ? rentalContainerClasses += ' flex' : rentalContainerClasses;


  return (
    <div className="container">
      <BackgroundZone imgSrc="/src/assets/images/home_bg_full.png" title={`Chez vous, \npartout et ailleurs`} />
      <section className={rentalContainerClasses}>
        {isLoading ? <Loader /> :
          rentalsList
        }
      </section>
    </div>
  )
}

export default Home;