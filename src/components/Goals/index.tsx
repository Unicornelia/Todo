import { FC, useEffect, useState } from 'react';
import NewGoal from './NewGoal.tsx';
import GoalList from './GoalList.tsx';
import { Goal } from './types.ts';
import DeleteGoals from './DeleteGoals.tsx';

type GoalHandlerFn = (goal: Goal) => void;
type RemoveGoalsHandlerFn = () => void;

const Goals: FC = () => {
  const [goals, setGoals] = useState<Array<Goal>>([]);

  useEffect(() => {
    const savedGoals = localStorage.getItem('goals');
    savedGoals && setGoals(JSON.parse(savedGoals));
  }, []);

  const addNewGoalHandler: GoalHandlerFn = (newGoal: Goal): void => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals, newGoal];
      localStorage.setItem('goals', JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  const removeGoalsHandler: RemoveGoalsHandlerFn = (): void => {
    setGoals([]);
    localStorage.removeItem('goals');
  };

  return (
    <main>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={goals} />
      {goals.length > 0 ? <DeleteGoals onDeleteGoals={removeGoalsHandler} /> : null}
    </main>
  );
};

export default Goals;
