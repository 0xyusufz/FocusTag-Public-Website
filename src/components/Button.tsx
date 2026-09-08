import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
}

export function Button({ children, variant = 'primary', href, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all focus:outline-hidden focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 shadow-xs hover:shadow-sm',
    secondary: 'bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] focus:ring-[var(--color-brand)] shadow-xs hover:shadow-sm',
    outline: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
