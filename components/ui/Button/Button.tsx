import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-peru',
        'text-white',
        'border-transparent',
        'hover:bg-tangelo',
      ],
      secondary: [
        'bg-transparent',
        'text-black',
        'border-slate-950',
        'hover:bg-black',
        'hover:text-white',
      ],
      tertiary: [
        'bg-transparent',
        'text-gray-500',
        'border-transparent',
        'hover:text-peru',
      ],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: ReactNode;
  href: string;
  title: string;
}

const Button = ({ className, intent, children, href, title }: ButtonProps) => {
  return (
    <Link
      href={href}
      aria-label={title}
      className={[
        'border',
        'py-4',
        'px-8',
        'uppercase',
        'text-xs',
        'font-bold',
        'transition-colors',
        button({ intent, className }),
      ].join(' ')}
    >
      {children}
    </Link>
  );
};

export default Button;
