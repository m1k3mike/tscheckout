import * as React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const [state, setState] = React.useState(0);

  const handleClick = () => {
    const newState = state + 1;
    setState(newState);
    onClick(newState);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "lightgrey" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
