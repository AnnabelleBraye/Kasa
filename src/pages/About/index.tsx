import BackgroundZone from "../../components/BackgroundZone";
import CollapsePanel from "../../components/CollapsePanel";
import { CollapseTexts } from "../../constants/constants";

const About = () => {
  return (
    <div className="about-container">
      <BackgroundZone imgSrc="/src/assets/images/about_image_full.png" />
      <section>
        <CollapsePanel title="Fiabilité">
          <p>{CollapseTexts.Dependability}</p>
        </CollapsePanel>
        <CollapsePanel title="Respect">
          <p>{CollapseTexts.Respect}</p>
        </CollapsePanel>
        <CollapsePanel title="Service">
          <p>{CollapseTexts.Service}</p>
        </CollapsePanel>
        <CollapsePanel title="Sécurité">
          <p>{CollapseTexts.Security}</p>
        </CollapsePanel>
      </section>
    </div>
  )
}

export default About;