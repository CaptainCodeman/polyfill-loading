import { createModel } from '@captaincodeman/rdx-model'
import { Store } from '../store'

export default createModel({
  state: 0,
  reducers: {
    inc(state) {
      return state + 1;
    },
    dec(state) {
      return state - 1;
    },
  },
  effects: (_store: Store) => ({
    async init() {
      console.log('initialized store')
    }
  })
})