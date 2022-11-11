import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const badge = recipe({
  base: ['inline-flex rounded-2xl font-medium'],

  variants: {
    intent: {
      gray: '',
      primary: '',
      error: '',
      warning: '',
      success: '',
    },

    /** Outlined */
    outlined: {
      true: 'ring-inset ring-1.5',
    },

    /** Closable */
    closable: {
      true: '',
    },

    /** With leading dot */
    withDot: {
      true: '',
    },

    size: {
      sm: 'py-0.5 px-2 text-xs',
      md: 'py-0.5 px-2.5 text-sm',
      lg: 'py-1 px-3 text-base',
    },
  },

  defaultVariants: {
    intent: 'gray',
    size: 'md',
  },

  compoundVariants: [
    {
      variants: {
        intent: 'gray',
        outlined: false,
      },
      style: 'bg-gray-100 text-gray-700',
    },
    {
      variants: {
        intent: 'gray',
        outlined: true,
      },
      style: 'ring-gray-600 text-gray-700',
    },
    {
      variants: {
        intent: 'primary',
        outlined: false,
      },
      style: 'bg-primary-50 text-primary-700',
    },
    {
      variants: {
        intent: 'primary',
        outlined: true,
      },
      style: 'ring-primary-600 text-primary-700',
    },
    {
      variants: {
        intent: 'error',
        outlined: false,
      },
      style: 'bg-error-50 text-error-700',
    },
    {
      variants: {
        intent: 'error',
        outlined: true,
      },
      style: 'ring-error-600 text-error-700',
    },
    {
      variants: {
        intent: 'warning',
        outlined: false,
      },
      style: 'bg-warning-50 text-warning-700',
    },
    {
      variants: {
        intent: 'warning',
        outlined: true,
      },
      style: 'ring-warning-600 text-warning-700',
    },
    {
      variants: {
        intent: 'success',
        outlined: false,
      },
      style: 'bg-success-50 text-success-700',
    },
    {
      variants: {
        intent: 'success',
        outlined: true,
      },
      style: 'ring-success-600 text-success-700',
    },
  ],
});

export const badgeCloseButton = recipe({
  base: ['ml-1 rounded-full'],

  variants: {
    intent: {
      gray: 'hover:bg-gray-200',
      primary: 'hover:bg-primary-200',
      error: 'hover:bg-error-200',
      warning: 'hover:bg-warning-200',
      success: 'hover:bg-success-200',
    },
  },
});

export const badgeDot = recipe({
  base: 'mr-1.5 h-2 w-2',
  variants: {
    intent: {
      gray: 'text-gray-500',
      primary: 'text-primary-500',
      error: 'text-error-500',
      warning: 'text-warning-500',
      success: 'text-success-500',
    },
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
