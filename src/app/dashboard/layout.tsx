export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - placeholder */}
      <aside className="w-64 bg-nautical-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">Member Dashboard</h2>
        <nav className="space-y-4">
          <a href="/dashboard" className="block px-4 py-2 bg-ocean-500 rounded hover:bg-ocean-600 transition-colors">
            Overview
          </a>
          <a href="/dashboard/orders" className="block px-4 py-2 hover:bg-nautical-800 rounded transition-colors">
            Orders
          </a>
          <a href="/dashboard/account" className="block px-4 py-2 hover:bg-nautical-800 rounded transition-colors">
            Account Settings
          </a>
          <a href="/dashboard/favorites" className="block px-4 py-2 hover:bg-nautical-800 rounded transition-colors">
            Favorites
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="bg-white border-b border-nautical-200 p-6 shadow-sm">
          <h1 className="text-3xl font-serif font-bold text-nautical-900">
            Welcome to Your Dashboard
          </h1>
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
