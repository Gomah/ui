import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const button = recipe({
  base: [
    'focus-visible:outline-none focus-visible:ring-4',
    'border',
    'font-medium',
    'transition',
    'shadow-xs',
  ],

  variants: {
    intent: {
      primary: [
        'bg-primary-600 text-white hover:bg-primary-700 border-primary-600 hover:border-primary-700',
        'disabled:bg-primary-200 disabled:border-primary-200',
        'focus-visible:ring-primary-100',
      ],
      white:
        'bg-white text-gray-700 border-gray-300 hover:text-gray-800 hover:bg-gray-50 focus-visible:ring-gray-100 disabled:text-gray-300 disabled:border-gray-200 disabled:hover:bg-white',
      secondary:
        'bg-primary-50 border-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800 hover:border-primary-100 focus-visible:ring-primary-100 disabled:bg-primary-25 disabled:border-primary-25 disabled:text-primary-300 disabled:hover:bg-primary-25',
      error:
        'bg-error-600 border-error-600  text-white hover:bg-error-700 hover:border-error-700 focus-visible:ring-error-100 disabled:bg-error-200 disabled:text-white disabled:border-error-200',
      warning:
        'bg-warning-600 border-warning-600 text-white hover:bg-warning-700 hover:border-warning-700 focus-visible:ring-warning-100 disabled:bg-warning-200 disabled:text-white disabled:border-warning-200',
      success:
        'bg-success-600 border-success-600 text-white hover:bg-success-700 hover:border-success-700 focus-visible:ring-success-100 disabled:bg-success-200 disabled:text-white disabled:border-success-200',
    },

    /** Button size */
    size: {
      sm: 'py-2 px-3.5 text-sm',
      md: 'py-2.5 px-4 text-sm',
      lg: 'py-2.5 px-[18px] text-base',
      xl: 'py-3 px-5 text-base',
      '2xl': 'py-4 px-7 text-lg',
    },

    /** Rounded button */
    rounded: {
      true: 'rounded-full',
      false: 'rounded-lg',
    },

    /** Full width */
    fullWidth: {
      true: 'w-full',
    },
  },

  defaultVariants: {
    intent: 'primary',
    size: 'md',
    rounded: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
