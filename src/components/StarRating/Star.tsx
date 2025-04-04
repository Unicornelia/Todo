import { FaStar } from 'react-icons/fa';
import { FC } from 'react';

type StarProps = {
  selected: boolean;
  onSelected: () => void;
};

const Star: FC<StarProps> = ({ selected = false, onSelected }) => {
  return (
    <div>
      <FaStar color={selected ? 'yellow' : 'grey'} onClick={onSelected} />
    </div>
  );
};

export default Star;
