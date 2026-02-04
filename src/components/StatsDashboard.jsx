const StatsDashboard = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="card-glow p-6 text-center">
          <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-[#f5f0e3]/70 text-sm">{stat.label}</div>
          {stat.description && (
            <div className="mt-2 text-[#f5f0e3]/60 text-xs">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsDashboard;