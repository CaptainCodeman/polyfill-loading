import { createStore, StoreState, StoreDispatch, EffectStore } from '@captaincodeman/rdx-model'
import { devtools } from '@captaincodeman/rdx'
import { config } from './config'

export const store = devtools(createStore(config))

export interface State extends StoreState<typeof config> {}
export interface Dispatch extends StoreDispatch<typeof config> {}
export interface Store extends EffectStore<Dispatch, State> {}