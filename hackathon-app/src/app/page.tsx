import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      {/* Navigation Section */}
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Saylani Microfinance</h1>
          <nav>
            <Link href="/" className="px-4 py-2 hover:text-blue-200">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 hover:text-blue-200">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Saylani Microfinance
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empowering communities through interest-free Qarze Hasana loans for
            weddings, home construction, businesses, and education.
          </p>
          <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Loan Categories Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-600">
            Loan Categories
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Wedding Loans */}
            <button className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-green-100">
              <h3 className="text-xl font-bold mb-2 text-blue-500">
                Wedding Loans
              </h3>
              <p className="text-gray-600">Max Loan: PKR 5 Lakh</p>
              <p className="text-gray-600">Loan Period: 3 Years</p>
            </button>
            {/* Home Construction Loans */}
            <button className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-green-100">
              <h3 className="text-xl font-bold mb-2 text-blue-500">
                Home Construction Loans
              </h3>
              <p className="text-gray-600">Max Loan: PKR 10 Lakh</p>
              <p className="text-gray-600">Loan Period: 5 Years</p>
            </button>
            {/* Business Startup Loans */}
            <button className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-green-100">
              <h3 className="text-xl font-bold mb-2 text-blue-500">
                Business Startup Loans
              </h3>
              <p className="text-gray-600">Max Loan: PKR 10 Lakh</p>
              <p className="text-gray-600">Loan Period: 5 Years</p>
            </button>
            {/* Education Loans */}
            <button className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-green-100">
              <h3 className="text-xl font-bold mb-2 text-blue-500">
                Education Loans
              </h3>
              <p className="text-gray-600">Based on Requirement</p>
              <p className="text-gray-600">Loan Period: 4 Years</p>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Saylani Welfare. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:text-blue-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-200">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
