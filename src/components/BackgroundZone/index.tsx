import { Fragment } from "react/jsx-runtime";

type BackgroundZoneType = {
  imgSrc: string,
  title?: string
}

const BackgroundZone = ({imgSrc, title}: BackgroundZoneType) => {
  // Remplace les sauts de ligne (\n) par des balises <br />
  const getFormattedTitle = (title: string): JSX.Element[] => {
    const parts: string[] = title.split('\n');
    const formattedTitle: JSX.Element[] = parts.map((line, index) => (
      <Fragment key={index}>
        {line}
        {index !== parts.length - 1 && <br className="break-text" />}
      </Fragment>
    ));
    
    return formattedTitle;
  }


  return (
    <div className="title-container" style={{backgroundImage: `url(${imgSrc})`}}>
      {title ? 
        <h1 className="main-title">{getFormattedTitle(title)}</h1>
      : ''
      }
    </div>
  )
}

export default BackgroundZone;