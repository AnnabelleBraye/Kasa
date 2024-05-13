import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { ReactNode, useState } from 'react';


type CollapseType = {
  title: string,
  children?: ReactNode
}

const CollapsePanel = ({title, children}: CollapseType) => {
  const [isOpened, setOpened] = useState<boolean>(false);

  const handleClickOnIcon = (): void => {
    setOpened((isOpened) => !isOpened);
  }

  return (
    <div className="collapse">
      <div className="collapse__title-container">
        <h3>{title}</h3>
        <FontAwesomeIcon
          className={`icon ${isOpened ? 'rotate' : ''}`}
          icon={faChevronUp} 
          onClick={() => handleClickOnIcon()} 
        />
      </div>
        <div className={`collapse__data-container ${isOpened ? 'open' : ''}`}>
          {children}
        </div>
    </div>
  )
}

export default CollapsePanel;