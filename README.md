Sunrise Sips

# Shopping Cart React Application

## Functionality Implemented

### Product Display
- Utilizes the Product Component to fetch and display product data.
- Each product is displayed as a card with details and an "Add to Cart" button.

### Cart Management
- Uses the CartContext to manage the cart state across the application.
- Allows users to add items to the cart, remove items, and clear the entire cart.
- Cart data is persisted to Local Storage to maintain state across page reloads.

### Cart Total Calculation
- Calculates and displays the total price of items in the cart.

### Cart Modal
- Renders a modal that displays cart items, quantities, and total price.
- Provides options to remove items individually or clear the entire cart.

### Hero Component
- Displays a hero section with a heading and a call to action button.

### Header Component
- Renders a navigation bar with links to different sections of the application.

### Footer Component
- Displays contact information and copyright details at the bottom of the page.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Context API**: Used to manage global state (cart state) across the application.
- **Local Storage**: Used for persisting cart data locally in the browser.
- **axios**: Library for making HTTP requests (partially implemented for API calls).
- **Bootstrap**: Optional for styling components and layout.
  
## Potential Improvements

- Implement error handling for API calls and state updates.
- Add checkout functionality with payment integration (e.g., Stripe).
- Allow product filtering and sorting by various attributes (price, category, etc.).
- Create a dedicated product details page with more information and options.
- Enhance cart functionality by adding quantity controls for each item.
- Improve product image handling for better responsiveness and user experience.
- Refine styling and user interface design for a more polished look.
- Write unit and integration tests to ensure application reliability and stability.

## Blockers 

- Hero background image access was denied.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
