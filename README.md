# Accept a Payment with Stripe Checkout

Stripe Checkout is the fastest way to get started with payments. Included are some basic build and run scripts you can use to start up the application.
[Test Card Numbers](https://stripe.com/docs/testing)
[Stripe.js Docs](https://stripe.com/docs/js)
[Stripe Docs Accept Payments](https://stripe.com/docs/payments?payments=popular)

### Install Stripe
1. Build the application
~~~shell
$  npm install -D stripe @stripe/stripe-js next
~~~


### Stripe Keys
1. You will need a copy of your Stripe API keys. These are located in the Developers panel in API keys. Make sure your in test move secret key and publishable k and public keys.

 

### Next.js Vercel Environmental Variables
Next.js comes with built-in support for environment variables, which allows you to check stripe in development. Add your stripe
[Next.js Docs Environmental Variables](https://nextjs.org/docs/basic-features/environment-variables).  

You will need to setup both the secret and  
~~~env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_12345
STRIPE_SECRET_KEY=sk_12345
~~~


# Store Front
 This is the login screen of Store Front end. It contains different products here, and you can click buy to purchase，  

## Data
 For this store we use NEXT.js which provides with a full stack (client/server) react framework.

