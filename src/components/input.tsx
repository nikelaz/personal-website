import { clsx } from 'clsx';
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={clsx("w-full px-4 py-2 border border-neutral-700/50 bg-neutral-900 text-neutral-100 text-xs rounded focus:outline-none focus:ring-2 focus:ring-blue-500", props.className)}
    />
  );
};

export default Input;
