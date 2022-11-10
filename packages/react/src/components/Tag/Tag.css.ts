import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const tag = recipe({
  base: ['text-gray-700', 'rounded-md font-medium border border-gray-300'],
  variants: {
    size: {
      sm: 'text-sm py-[3px] px-2',
      md: 'text-base py-0.5 px-[9px]',
      lg: 'text-base py-1 px-2.5',
    },
  },
});

export type TagVariants = RecipeVariants<typeof tag>;
