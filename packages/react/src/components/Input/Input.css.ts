import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const input = recipe({
  base: [
    'text-gray-900 placeholder-gray-500',
    'block',
    'w-full',
    'focus:ring-4',
    'transition',
    'rounded-md',
    'shadow-xs',
  ],

  variants: {
    intent: {
      gray: 'border-gray-300 focus:border-gray-300 focus:ring-gray-100',
      primary: 'border-gray-300 focus:border-primary-300 focus:ring-primary-100',
      error: 'border-error-300 focus:border-error-300 focus:ring-error-100',
    },

    /** Input size */
    size: {
      sm: 'py-2 px-3',
      md: 'py-2.5 px-3.5',
    },
  },

  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});

export type InputVariants = RecipeVariants<typeof input>;
