import createMatcher from '@captaincodeman/router'
import { routingPluginFactory } from '@captaincodeman/rdx-model'
import * as models from './models'

const routes = {
  '/': 'view-counter',
}

const matcher = createMatcher(routes)
const routing = routingPluginFactory(matcher)

export const config = { models, plugins: { routing } }
