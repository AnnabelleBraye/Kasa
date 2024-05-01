import { useState } from "react";

type CarrouselType = {
  pictures: string[]
}

const Carrousel = ({pictures}: CarrouselType) => {
  const totalImages = pictures.length;
  const [imgIndex, setImgIndex] = useState<number>(0);

  const onClickOnLeftArrow = () => {
    setImgIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const onClickOnRightArrow = () => {
    setImgIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrousel-container">
      <div className="picture" style={{backgroundImage: `url(${pictures[imgIndex]})`}}></div>
      <div className="buttons-container">
        <img 
          id='left-arrow'
          className='left-arrow' 
          src='/src/assets/svg/left-arrow.svg' 
          alt='Left Arrow'  
          onClick={() => onClickOnLeftArrow()} 
        />
        <img 
          id='right-arrow'
          className='right-arrow' 
          src='/src/assets/svg/right-arrow.svg' 
          alt='Right Arrow' 
          onClick={() => onClickOnRightArrow()} 
        />
      </div>
      <div className="image-count">{imgIndex + 1} / {totalImages}</div>
    </div>
  )
}

export default Carrousel