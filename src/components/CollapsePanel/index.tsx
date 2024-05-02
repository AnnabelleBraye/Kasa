import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type CollapseType = {
  title: string,
  data: string | string[]
}

const CollapsePanel = ({title, data}: CollapseType) => {
  const [isOpened, setOpened] = useState<boolean>(false);

  const handleClickOnIcon = () => {
    setOpened((isOpened) => !isOpened);
  }

  return (
    <div className="collapse">
      <div className="collapse__title-container">
        <h3>{title}</h3>
        <FontAwesomeIcon
          className='icon' 
          icon={isOpened ? faChevronDown : faChevronUp} 
          onClick={() => handleClickOnIcon()} 
        />
      </div>
      <div className={`collapse__data-container ${!isOpened ? 'hidden' : ''}`}>
        { Array.isArray(data) ? (
          <ul>
            {data.map((data) => (
              <li key={`${data}`}>{data}</li>)
            )} 
          </ul>
        ) :
          <p>{data}</p>
        }
      </div>
    </div>
  )
}

export default CollapsePanel;