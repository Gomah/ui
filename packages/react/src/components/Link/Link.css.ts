import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const link = recipe({
  variants: {
    intent: {
      primary: 'text-primary-600',
    },

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
    intent: 'primary',
    size: 'md',
    weight: 'regular',
  },
});

export type LinkVariants = RecipeVariants<typeof link>;
