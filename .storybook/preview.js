import { ThemeDecorator } from '../src/ThemeWrapper'

export const decorators = [
  (Story) => (
    <ThemeDecorator>
      <Story />
    </ThemeDecorator>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}