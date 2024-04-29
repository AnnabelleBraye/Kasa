import RentalCard from "../../components/RentalCard";

const Home = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="main-title main-title__mobile">Chez vous,< br /> partout et ailleurs</h1>
        <h1 className="main-title main-title__desktop">Chez vous, partout et ailleurs</h1>
      </div>
      <section className="rental-container">
        <RentalCard />
        <RentalCard />
        <RentalCard />
        <RentalCard />
        <RentalCard />
        <RentalCard />
      </section>
    </div>
  )
}

export default Home;