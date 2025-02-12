import EmailRequest from "@/app/components/EmailRequest";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer"

export default function EmailRequestPage() {
    return (
        <div className="bg-[#FAF8EF] min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow px-10 py-10">
                <h1 className="text-7xl font-bold text-[#0A0045] leading-tight mx-64 pt-10 text-center">
                    <span className=" text-white bg-[#A259FF] rounded-xl px-3">250+ FREE Directories</span>
                    <span> and Blogs to List Your Startup: The Ultimate Guide</span>
                </h1>

                <EmailRequest />
            </main>

            <Footer />
        </div>
    );
}
