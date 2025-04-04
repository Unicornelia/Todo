export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: {
  items: any;
  resourceName: string;
  itemComponent: any;
}) => {
  return (
    <>
      {items.map((item: any, index: number) => (
        <>
          <h3>{index + 1}</h3>
          <ItemComponent key={index} {...{ [resourceName]: item }} /> //person: item
        </>
      ))}
    </>
  );
};
