import type { ExtractPropTypes, PropType } from 'vue'
import { defineComponent } from 'vue'
import 'uno.css'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export const buttonProps = {
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },

  color: {
    type: String as PropType<ButtonColor>,
    default: 'blue',
  },

  round: {
    type: Boolean,
    default: false,
  },

  plain: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
    default: '',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props, { slots }) {
    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm',
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base',
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg',
      },
    }

    return () => (
      <button
        class={`
          mx-1
        hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          cursor-pointer
          border-solid
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? 'rounded-full' : 'rounded-lg'}
          bg-${props.color}-${props.plain ? '100' : '500'}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? '500' : '500'}
          text-${props.plain ? `${props.color}-500` : 'white'}
          text-${size[props.size].text}
          `}
      >
        {props.icon !== ''
          ? (
              <i class={`i-ic-baseline-${props.icon} p-3`}></i>
            )
          : (
              ''
            )}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
