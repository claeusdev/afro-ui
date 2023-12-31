interface IconButtonProps extends React.ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
  'aria-label'?: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest} disabled={disabled || laoding}>
        {rest.children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
