import { FC } from 'react';

interface MessageProps {
  name: string;
  message: string;
}

const Message: FC<MessageProps> = ({ name, message }) => {
  return (
    <div>
      <h1>
        {message} from {name}
      </h1>
    </div>
  );
};

export default Message;
