import './Card.css';

interface ICard {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: ICard): JSX.Element {
  const classes = 'card ' + className;
  return <div className={classes}>{children}</div>;
}
