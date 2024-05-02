import Stripe from 'stripe';
import { Variables } from '../Variables';
export const stripeClient = new Stripe(Variables.STRIPE_SECRET_KEY);
