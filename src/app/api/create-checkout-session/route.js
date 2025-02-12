import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const { priceId, customerEmail } = await req.json(); // Get priceId and email from frontend

        // Create a checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"], // Allow credit card payments
            line_items: [
                {
                    price: priceId, // Price ID passed from the frontend
                    quantity: 1,    // Quantity is always 1
                },
            ],
            mode: "payment", // One-time payment
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/SuccessPage`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=true`,
        });

        return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });
    } catch (error) {
        console.error("Error creating Stripe session:", error.message);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
