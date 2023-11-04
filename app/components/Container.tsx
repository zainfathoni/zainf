import React, { forwardRef } from "react";
import clsx from "clsx";

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
};

type ContainerInternal = React.ForwardRefExoticComponent<
  ContainerProps & React.RefAttributes<HTMLDivElement>
>;

type ContainerCompoundComponents = {
  Outer: ContainerInternal;
  Inner: ContainerInternal;
};

type ContainerType = ContainerInternal & ContainerCompoundComponents;

const OuterContainer: ContainerInternal = forwardRef<
  HTMLDivElement,
  ContainerProps
>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer: ContainerInternal = forwardRef<
  HTMLDivElement,
  ContainerProps
>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Container: ContainerType = Object.assign<
  ContainerInternal,
  ContainerCompoundComponents
>(
  forwardRef<HTMLDivElement, ContainerProps>(function Container(
    { children, ...props },
    ref,
  ) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }),
  { Outer: OuterContainer, Inner: InnerContainer },
);
