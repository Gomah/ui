import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const text = recipe({
  base: ['text-gray-600'],

  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'regular',
  },
});

export type TextVariants = RecipeVariants<typeof text>;
