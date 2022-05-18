import React from 'react';

export type InputTextProps = {
  label?: string;
  error?: string;
  optional?: boolean;
  inputSideText?: string;
  InputSideIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  inputSideContentDirection?: 'left' | 'right';
  paddingClassName?: string;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      label,
      containerClassName = '',
      className = '',
      id,
      error,
      inputSideText,
      InputSideIcon,
      inputSideContentDirection,
      paddingClassName = 'px-4 py-2',
      type = 'text',
      ...props
    },
    ref
  ) => {
    const inputIcon = InputSideIcon ? (
      <button className="flex items-center">
        <InputSideIcon className="h-6 w-6" />
      </button>
    ) : null;

    return (
      <div className={containerClassName}>
        {label ? <label htmlFor={id}>{label}</label> : null}

        {inputSideText || InputSideIcon ? (
          <div
            className={`border-grey-e6e6e6 flex w-full items-center justify-start rounded-lg border text-sm md:text-base  ${className}`}
          >
            {inputSideContentDirection === 'left' ? (
              <div
                className={`${paddingClassName} border-grey-e6e6e6 border-r font-medium`}
              >
                {InputSideIcon ? inputIcon : inputSideText}
              </div>
            ) : null}
            <input
              {...props}
              ref={ref}
              id={id}
              className={`${className} ${paddingClassName} w-full border-none  ${
                error ? 'border-red-ff3b30' : 'border-grey-e6e6e6'
              }`}
              type={type}
            />
            {inputSideContentDirection === 'right' ? (
              <div
                className={`${paddingClassName} border-grey-e6e6e6 border-l font-medium`}
              >
                {InputSideIcon ? inputIcon : inputSideText}
              </div>
            ) : null}
          </div>
        ) : (
          <input
            {...props}
            ref={ref}
            id={id}
            className={`block w-full rounded-lg border  text-sm  md:text-base ${className} ${paddingClassName} ${
              error ? 'border-red-ff3b30' : 'border-grey-e6e6e6'
            }`}
            type={type}
          />
        )}

        {error ? (
          <div className="text-red-ff3b30 pt-2 text-xs">{error}</div>
        ) : null}
      </div>
    );
  }
);
