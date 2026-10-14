export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nautical-900 via-nautical-800 to-ocean-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20c6-8 14-8 20 0s14 8 20 0' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Premium Ship Chandling Solutions
            </h1>
            <p className="text-xl text-ocean-200 mb-8 leading-relaxed">
              Trusted by maritime professionals worldwide. We provide high-quality supplies and equipment for vessel maintenance, safety, and provisioning. From rigging to provisions, we&apos;ve got your fleet covered.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Browse Catalog
              </button>
              <button className="border-2 border-ocean-400 text-ocean-400 hover:bg-ocean-400 hover:text-nautical-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-nautical-900 mb-12">
            Why Choose Limani Supply
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Network',
                description: 'Access supplies from ports around the world with fast, reliable shipping.'
              },
              {
                title: 'Quality Assured',
                description: 'All products meet international maritime standards and safety regulations.'
              },
              {
                title: 'Expert Support',
                description: 'Our team of maritime professionals is ready to assist with any inquiry.'
              },
              {
                title: 'Competitive Pricing',
                description: 'Bulk discounts and member benefits on all product categories.'
              },
              {
                title: 'Quick Delivery',
                description: 'Emergency supply options available for urgent shipboard needs.'
              },
              {
                title: 'Member Dashboard',
                description: 'Track orders, manage accounts, and access exclusive member features.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ocean-500">
                <h3 className="text-xl font-bold text-nautical-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-nautical-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-ocean-200 mb-8 max-w-2xl mx-auto">
            Create a member account to access our full catalog, member pricing, and dashboard features.
          </p>
          <button className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Create Account
          </button>
        </div>
      </section>
    </div>
  )
}
