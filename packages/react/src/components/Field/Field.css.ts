import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const fieldClassNames = recipe({
  base: [''],

  variants: {
    intent: {
      primary: [],
      error: [],
    },

    size: {
      sm: 'text-sm',
      md: 'text-base',
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const inputWrapperClassNames = recipe({
  base: ['relative mt-1.5'],
});

export const labelClassNames = recipe({
  base: ['block font-medium text-gray-700'],
});

export const messageClassNames = recipe({
  base: ['mt-2 text-sm'],

  variants: {
    intent: {
      primary: 'text-gray-500',
      error: 'text-error-500',
    },
  },

  defaultVariants: {
    intent: 'primary',
  },
});

export type FieldVariants = RecipeVariants<typeof fieldClassNames>;
