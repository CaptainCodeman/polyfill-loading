import { createStore, StoreState, StoreDispatch, EffectStore } from '@captaincodeman/rdx-model'
import { config } from './config'

export const store = createStore(config)

export interface State extends StoreState<typeof config> {}
export interface Dispatch extends StoreDispatch<typeof config> {}
export interface Store extends EffectStore<Dispatch, State> {}