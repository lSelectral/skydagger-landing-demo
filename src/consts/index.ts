export const CATEGORIES = {
  Drone: 'drone',
  Camera: 'cameras',
  Accessories: 'accessories'
} as const

export const CATEGORY_LIST = Object.values(CATEGORIES)

export type Category = (typeof CATEGORY_LIST)[number]
