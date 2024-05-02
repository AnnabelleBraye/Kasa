import BackgroundZone from "../../components/BackgroundZone";
import CollapsePanel from "../../components/CollapsePanel";
import { CollapseTexts } from "../../constants/constants";

const About = () => {
  return (
    <div className="about-container">
      <BackgroundZone imgSrc="/src/assets/images/about_image_full.png" />
      <section>
        <CollapsePanel title="Fiabilité" data={CollapseTexts.Dependability} />
        <CollapsePanel title="Respect" data={CollapseTexts.Respect} />
        <CollapsePanel title="Service"  data={CollapseTexts.Service}/>
        <CollapsePanel title="Sécurité" data={CollapseTexts.Security} />
      </section>
    </div>
  )
}

export default About;