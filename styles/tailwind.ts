import {
  compact,
  entries,
  filter,
  flat,
  map,
  pipe,
  range,
  reduce,
  reject,
  take,
  values,
} from "@fxts/core"

export const colors = {
  titleColor: "text-black dark:text-white",
  onColor: "text-indigo-400 dark:text-indigo-400",
  contentColor: "text-gray-600 dark:text-gray-400",
  hoverColor: "hover:text-indigo-400 dark:hover:text-indigo-400",
}

export type colors = keyof typeof colors

export const sizes = {
  title: "text-3xl font-bold",
  titleSecond: "text-2xl font-bold",
  titleThird: "text-xl font-bold",
  content: "text-base",
  contentSecond: "text-sm",
}

export type sizes = keyof typeof sizes

export const tailwind = {
  ...colors,
  ...sizes,
}

export type tailwind = keyof typeof tailwind

interface textStyleProps {
  sizes?: sizes[] | sizes
  colors?: colors[] | colors
}

const arrayArgs = (value: tailwind | tailwind[]) =>
  value instanceof Array<tailwind>
    ? map((value: tailwind) => tailwind[value], value)
    : tailwind[value]

export const textStyle = (props: textStyleProps) =>
  pipe(
    values(props),
    compact,
    map(arrayArgs),
    flat,
    reduce((acc, cur) => `${acc} ${cur}`)
  )
