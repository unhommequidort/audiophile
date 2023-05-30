'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

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
        'invalid:border-2',
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
}: TextFieldProps) => {
  return (
    <fieldset>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold invalid:text-error"
      >
        {label}
      </label>
      <input
        name={name}
        disabled={disabled}
        id={id}
        type={type}
        placeholder={placeholder}
        className={[
          'rounded-lg',
          'w-full',
          'text-sm',
          'py-4',
          'px-6',
          textField({ intent, className }),
        ].join(' ')}
      />
    </fieldset>
  );
};

export default TextField;
