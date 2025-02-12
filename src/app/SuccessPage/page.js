export default function SuccessPage() {
    return (
        <div className="min-h-screen flex pt-64 justify-center bg-green-50">
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-bold text-green-600">🎉 Payment Successful!</h1>
                <p className="pb-8 text-lg text-gray-700">
                    Thank you for your purchase! We'll reach out to you shortly via email to get the needed info about your SAAS 🙌
                </p>

                <a
                    href="/"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
}
