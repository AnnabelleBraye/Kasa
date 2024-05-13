import { ReactNode } from "react";

type BackgroundZoneType = {
  imgSrc: string,
  children?: ReactNode
}

const BackgroundZone = ({imgSrc, children}: BackgroundZoneType) => {
  return (
    <div className="title-container" style={{backgroundImage: `url(${imgSrc})`}}>
      {children}
    </div>
  )
}

export default BackgroundZone;