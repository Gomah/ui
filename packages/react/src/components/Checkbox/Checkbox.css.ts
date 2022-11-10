import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const checkbox = recipe({
  base: [
    // Note, @tailwindcss/forms adds a focus:ring-offset-2, we want 0
    'rounded focus:ring-offset-0 transition',
    'focus-visible:ring-4 focus:ring-0',
  ],

  variants: {
    intent: {
      primary:
        'border-gray-300 hover:bg-primary-100 hover:border-primary-600 text-primary-600 focus:ring-primary-100 focus:border-primary-300',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },

  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});

export type CheckboxVariants = RecipeVariants<typeof checkbox>;
