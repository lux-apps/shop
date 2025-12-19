import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Shop
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Commerce Meets Crypto
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Accept crypto payments and launch your Web3 storefront.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Crypto Payments</h2>
          <p className="text-lg text-gray-400">Accept LUX and other cryptocurrencies with instant settlement.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NFT Commerce</h2>
          <p className="text-lg text-gray-400">Sell digital and physical goods with NFT-based proof of purchase.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">No Middlemen</h2>
          <p className="text-lg text-gray-400">Keep more of your revenue with direct peer-to-peer transactions.</p>
        </div>
      </section>

    </main>
  )
}
