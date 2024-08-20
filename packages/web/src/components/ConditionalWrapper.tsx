import type { PropsWithChildren, ReactNode } from 'react';

interface ConditionalWrapperProps extends PropsWithChildren {
  shouldRender: boolean;
  fallback?: ReactNode;
}

const ConditionalWrapper = (props: ConditionalWrapperProps): JSX.Element => (
  <>{(props.shouldRender && props.children) || props.fallback}</>
);

export default ConditionalWrapper;
