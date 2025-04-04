export const Text = ({ message }: { message?: string | null }) => {
  if (!message) return <p>Loading...</p>;

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};
