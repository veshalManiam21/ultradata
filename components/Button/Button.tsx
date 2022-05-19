import React from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { Link } from '@/components/Link/Link';

import type { MergeExclusive } from 'type-fest';

type Anchor = Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  'className' | 'children'
>;
type ButtonProp = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'className' | 'children'
>;

export type ButtonProps = MergeExclusive<Anchor, ButtonProp> & {
  invertedColor?: boolean;
  className?: string;
  children: React.ReactNode;
  paddingClassName?: string;
  borderRadiusClassName?: string;
  textClassName?: string;
  /** To manually override BG / border / text colors */
  customColorClassName?: string;
  isLoading?: boolean;
};

export const Button = ({
  invertedColor,
  className = '',
  children,
  paddingClassName = 'px-4 py-2',
  borderRadiusClassName = 'rounded-md',
  textClassName = 'text-sm',
  customColorClassName,
  isLoading,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const btnClassName = `hover:no-underline font-normal border flex items-center justify-center
    ${textClassName} ${borderRadiusClassName} ${paddingClassName} ${className} ${
    customColorClassName
      ? customColorClassName
      : invertedColor
      ? 'text-white rounded-3xl bg-red-cc0000 text-white hover:border-red-cc0000 hover:text-red-cc0000'
      : 'border border-red-cc0000 text-red-cc0000 rounded-3xl hover:bg-red-cc0000 hover:text-white'
  }`;

  return isWithHref(otherProps) ? (
    <Link {...otherProps} className={btnClassName}>
      {children}
    </Link>
  ) : (
    <button
      {...otherProps}
      disabled={disabled || isLoading}
      className={btnClassName}
    >
      {children}
      {isLoading ? (
        <LoadingSpinner
          className={`ml-2 h-5 w-5 ${
            invertedColor ? 'text-white' : 'text-black'
          }`}
        />
      ) : null}
    </button>
  );
};

function isWithHref(
  props: MergeExclusive<Anchor, ButtonProp>
): props is Anchor {
  return !!props.href;
}
