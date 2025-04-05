import { ComponentType, ForwardedRef, forwardRef, ForwardRefRenderFunction } from 'react';

export function withPropsLogging<T, P>(
  WrappedComponent: ComponentType<P | Omit<P, keyof P & 'ref'>>,
) {
  const WithPropsLogging: ForwardRefRenderFunction<T, P | Omit<P, keyof P & 'ref'>> = (
    props: P | Omit<P, keyof P & 'ref'>,
    ref: ForwardedRef<T>,
  ) => {
    console.log(
      `Component ${WrappedComponent.displayName} || ${WrappedComponent.name} rendered with ${JSON.stringify(props)} props and ${JSON.stringify(ref)} ref`,
    );
    return <WrappedComponent ref={ref} {...props} />;
  };

  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithPropsLogging.displayName = `withPropsLogging(${componentName})`;

  return forwardRef(WithPropsLogging);
}
