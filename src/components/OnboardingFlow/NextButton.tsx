export const NextButton = ({ onNextClick }: { onNextClick?: () => void }) => {
  return (
    <button type="button" onClick={onNextClick}>
      Next
    </button>
  );
};
