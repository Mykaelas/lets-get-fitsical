import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51LyGS9EUgie4ZeFvM0XRO4kSJDgEcEwWIZuKIEjAicSjk51PAVQCfWH9SUzNy84WcM5YaRqKTxHvgu7C3JGj1Unj00TuS1lwV3"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}