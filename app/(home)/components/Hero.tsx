import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden h-full lg:h-screen" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full lg:h-screen w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="w-3 h-4 hidden md:block"></div>

          <main className="mt-24 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The Best Online Shop</span>{" "}
                <span className="block text-rose-600 xl:inline">near you</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Always providing the highest quality product in your area with{" "}
                <span className="text-rose-600">less charge</span> and{" "}
                <span className="text-rose-600">fastest delevery</span>.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/shop"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
                  >
                    Order Now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-700 bg-rose-100 hover:bg-rose-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          width={1920}
          height={1080}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src='https://img.freepik.com/free-vector/vector-realistic-cosmetic-promo-poster-banner-with-female-collection-makeup-cosmetics-scarlet-lipstick-nail-polish-mascara-rose-background-products-bright-makeup_33099-1342.jpg'
          alt="hero image"
        />
      </div>
    </div>
  );
}
