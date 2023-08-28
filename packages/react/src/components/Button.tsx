import React, { forwardRef } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => (
    <button ref={ref} {...rest} disabled={disabled || loading} />
  )
);

Button.displayName = 'Button';
export default Button;
