export type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { label, onClick, disabled = false } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {label}
    </button>
  );
};
