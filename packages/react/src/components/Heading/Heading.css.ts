import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const heading = recipe({
  base: [''],

  variants: {
    size: {
      xs: 'text-2xl',
      sm: 'text-3xl',
      md: 'text-4xl',
      lg: 'text-5xl',
      xl: 'text-6xl',
      '2xl': 'text-7xl',
    },

    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },

  defaultVariants: {
    size: 'xs',
    weight: 'regular',
  },
});

export type HeadingVariants = RecipeVariants<typeof heading>;
