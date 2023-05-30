'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const textField = cva('textField', {
  variants: {
    intent: {
      default: [
        'border-gray-400',
        'focus:border-peru',
        'focus:caret-peru',
        'focus:outline-none',
        'focus:ring-0',
        'invalid:border-error',
        'focus:invalid:border-error',
        'invalid:border-[2px]',
      ],
    },
  },
  defaultVariants: {
    intent: 'default',
  },
});

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textField> {
  id: string;
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  errorMessage?: string;
  register: UseFormRegister<FieldValues>;
}

const TextField = ({
  id,
  name,
  label,
  type = 'text',
  disabled = false,
  className,
  intent,
  placeholder,
  errorMessage,
}: TextFieldProps) => {
  return (
    <fieldset className="relative">
      <label htmlFor={id} className="mb-2 block text-xs font-semibold">
        {label}
      </label>
      <input
        required
        name={name}
        disabled={disabled}
        id={id}
        type={type}
        placeholder={placeholder}
        className={[
          'peer',
          'rounded-lg',
          'border',
          'w-full',
          'text-sm',
          'py-4',
          'px-6',
          textField({ intent, className }),
        ].join(' ')}
      />
      <span className="invisible absolute right-0 top-0 text-xs text-error peer-invalid:visible">
        {errorMessage}
      </span>
    </fieldset>
  );
};

export default TextField;
