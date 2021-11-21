import { GetAPISchema, createEndpoint } from '@commerce/api'
import checkoutEndpoint from '@commerce/api/endpoints/checkout'
import type { CheckoutSchema } from '../../../types/checkout'
import type { WOOCOMMERCEAPI } from '../..'
import getCheckout from './checkout'

export type CheckoutAPI = GetAPISchema<WOOCOMMERCEAPI, CheckoutSchema>

export type CheckoutEndpoint = CheckoutAPI['endpoint']

export const handlers: CheckoutEndpoint['handlers'] = { getCheckout }

const checkoutApi = createEndpoint<CheckoutAPI>({
  handler: checkoutEndpoint,
  handlers,
})

export default checkoutApi
