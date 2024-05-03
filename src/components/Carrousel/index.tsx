import { Fragment, useState } from "react";

type CarrouselType = {
  pictures: string[]
}

const Carrousel = ({pictures}: CarrouselType) => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const totalImages: number = pictures.length;
  const isMultipleImage: boolean = totalImages > 1;

  const onClickOnLeftArrow = (): void => {
    setImgIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const onClickOnRightArrow = (): void => {
    setImgIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrousel-container">
      <div className="picture" style={{backgroundImage: `url(${pictures[imgIndex]})`}}></div>
      {isMultipleImage && 
        <Fragment>
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
        </Fragment>
  }
    </div>
  )
}

export default Carrousel