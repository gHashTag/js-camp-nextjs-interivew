import { useSwipeable } from 'react-swipeable'

export function Swipeable({ children, ...props }) {
  const handlers = useSwipeable(props)
  return <div {...handlers}>{children}</div>
}
