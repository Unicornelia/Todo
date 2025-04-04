export const RegularList = ({
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
        <ItemComponent key={index} {...{ [resourceName]: item }} /> //person: item
      ))}
    </>
  );
};
