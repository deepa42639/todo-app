
import { cva } from 'class-variance-authority';

const buttonStyles = cva(
    'base-button',
    {
      variants: {
        size: {
          small: 'button-small',
          medium: 'button-medium',
          large: 'button-large',
        },
        color: {
          primary: 'button-primary',
          secondary: 'button-secondary',
        },
      },
      responsive: {
        sm: {
          size: {
            small: 'sm-button-small',
            medium: 'sm-button-medium',
            large: 'sm-button-large',
          },
        },
      },
      defaultVariants: {
        size: 'medium',
        color: 'primary',
      },
    }
  );

const Button = ({ size, color, children }) => {
  return (
    <button className={buttonStyles({ size, color })}>
      {children}
    </button>
  );
};

export default Button;