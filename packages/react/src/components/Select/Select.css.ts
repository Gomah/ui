import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const select = recipe({
  base: [
    'relative w-full bg-white cursor-default rounded-lg shadow-xs border border-gray-300 transition',
    'text-left placeholder-gray-100',
    'focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-100',
  ],

  variants: {
    size: {
      sm: 'py-2 px-3 text-sm',
      md: 'py-2.5 px-3.5 ',
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const selectOptions = recipe({
  base: 'absolute mt-[5px] max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-200 focus:outline-none',
});

export type SelectVariants = RecipeVariants<typeof select>;
