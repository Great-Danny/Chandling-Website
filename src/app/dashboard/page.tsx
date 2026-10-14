export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Total Orders', value: '12', icon: '📦' },
          { label: 'Pending Orders', value: '2', icon: '⏳' },
          { label: 'Total Spent', value: '$4,250', icon: '💰' },
          { label: 'Loyalty Points', value: '425', icon: '⭐' }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border-l-4 border-ocean-500">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-nautical-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-nautical-900 mb-4">Recent Orders</h2>
        <p className="text-gray-600">Your recent orders will appear here.</p>
      </div>
    </div>
  )
}
