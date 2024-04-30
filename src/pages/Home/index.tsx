import Loader from "../../components/Loader";
import RentalCard from "../../components/RentalCard";
import { useFetch } from "../../utils/hooks";

type Rental = {
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
  const {data, isLoading}: {data: Rental[], isLoading: boolean} = useFetch('./src/data/rentals.json')

  const rentalsList = data.map((rental) => (
    <RentalCard key={rental.id} cover={rental.cover} title={rental.title} />
  ))

  let rentalContainerClasses = 'rental-container';
  isLoading ? rentalContainerClasses += ' flex' : rentalContainerClasses;

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="main-title main-title__mobile">Chez vous,< br /> partout et ailleurs</h1>
        <h1 className="main-title main-title__desktop">Chez vous, partout et ailleurs</h1>
      </div>
        <section className={rentalContainerClasses}>
          {isLoading ? <Loader /> :
            rentalsList
          }
        </section>
    </div>
  )
}

export default Home;