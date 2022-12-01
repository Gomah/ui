import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const tag = recipe({
  base: ['rounded-md', 'font-medium', 'border'],
  variants: {
    intent: {
      gray: 'text-gray-700 border-gray-300',
      primary: 'text-primary-700 border-primary-300',
    },
    size: {
      sm: 'text-sm py-[3px] px-2',
      md: 'text-base py-0.5 px-[9px]',
      lg: 'text-base py-1 px-2.5',
    },
  },

  defaultVariants: {
    size: 'md',
    intent: 'gray',
  },
});

export type TagVariants = RecipeVariants<typeof tag>;
