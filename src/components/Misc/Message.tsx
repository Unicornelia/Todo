import { FC, useContext } from 'react';
import UserContext from '../../context/UserContext.tsx';

const Message: FC = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('User context must be used within user provider');
  }

  return (
    <div>
      <h5>
        {context?.message} from {context?.userName}
      </h5>
    </div>
  );
};

export default Message;
