import React, { useState, useEffect, ReactNode, ReactElement } from 'react';

type DataSourceProps<T> = {
  children: ReactNode;
  getDataFn: () => Promise<T> | T;
  resourceName: string;
};

export const DataSource = <T extends unknown>({
  getDataFn,
  resourceName,
  children,
}: DataSourceProps<T>) => {
  const [state, setState] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFn();
        setState(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getDataFn]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
