import { FC } from 'react';

interface MessageProps {
  name: string;
  message: string;
}

const Message: FC<MessageProps> = ({ name, message }) => {
  return (
    <div>
      <h5>
        {message} from {name}
      </h5>
    </div>
  );
};

export default Message;
