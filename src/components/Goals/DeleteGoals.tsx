import AnimatedButton from './AnimatedButton.tsx';

type onDeleteGoalsType = { onDeleteGoals: () => void };

const DeleteGoals = ({ onDeleteGoals }: onDeleteGoalsType) => {
  return (
    <div>
      <AnimatedButton type="button" onClick={onDeleteGoals}>
        Delete Goals
      </AnimatedButton>
    </div>
  );
};

export default DeleteGoals;
