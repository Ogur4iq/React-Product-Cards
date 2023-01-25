import { useState } from 'react';
import { MiceAmount } from './MiceAmount';
import { BottomText } from './BottomText';
import './Card.css';

function Card({ meat, portion, mice, weight, description, available }) {
  const [selected, setSelected] = useState('');
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleClick = () => {
    if (available) {
      selected ? setSelected('') : setSelected('card--selected');
    }
    setIsHover(false);
  };

  return (
    <div className="card-wrapper">
      <div
        className={
          'card ' +
          selected +
          (isHover && selected ? ' card--hovered' : '') +
          (!available ? ' card--unavailable' : '')
        }
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="preview">
          {selected && isHover
            ? 'Котэ не одобряет?'
            : 'Сказочное заморское яство'}
        </p>
        <h2>Нямушка</h2>
        <h3>c {meat}</h3>
        <p className="portions">
          <span>{portion}</span> порций
        </p>
        <MiceAmount mice={mice} />
        {mice > 4 && <p className="satisfied">заказчик доволен</p>}
        <div className="weight">
          <span>{weight}</span>
          <span>кг</span>
        </div>
      </div>
      <BottomText
        selected={selected}
        available={available}
        setSelected={setSelected}
        meat={meat}
        description={description}
      />
    </div>
  );
}

export default Card;
