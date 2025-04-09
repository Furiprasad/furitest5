
import React from "react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";

const AIBenefits = () => {
  const performanceData = [
    { month: "Jan", traditional: 30, ai: 40 },
    { month: "Feb", traditional: 35, ai: 50 },
    { month: "Mar", traditional: 33, ai: 55 },
    { month: "Apr", traditional: 38, ai: 65 },
    { month: "May", traditional: 42, ai: 75 },
    { month: "Jun", traditional: 45, ai: 90 },
  ];

  const benefits = [
    {
      title: "Enhanced Efficiency",
      description: "AI automates repetitive tasks, allowing your team to focus on strategic initiatives that drive business growth."
    },
    {
      title: "Data-Driven Decisions",
      description: "AI analyzes vast amounts of data to provide actionable insights for more informed marketing decisions."
    },
    {
      title: "Personalization at Scale",
      description: "Deliver highly personalized content and experiences to each customer without manual intervention."
    },
    {
      title: "Predictive Analytics",
      description: "Anticipate market trends and customer behavior to stay ahead of the competition."
    },
    {
      title: "Continuous Optimization",
      description: "AI constantly learns from results to improve campaign performance over time."
    },
    {
      title: "Cost Efficiency",
      description: "Reduce wasted ad spend and resource allocation by focusing on what works best for your specific audience."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">The AI Advantage</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how our AI-powered marketing solutions can transform your business performance and deliver superior results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Performance Comparison</h3>
            <p className="text-gray-700 mb-6">
              Our AI-powered marketing solutions consistently outperform traditional approaches, delivering superior ROI and growth for our clients.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={performanceData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="traditional"
                    name="Traditional Marketing"
                    stroke="#1e3a8a"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="ai"
                    name="AI-Powered Marketing"
                    stroke="#0d9488"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Key Benefits of AI Integration</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-800">
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-8 text-center">How Our AI Solutions Drive Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary-800">35%</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Increased Conversion Rate</h4>
              <p className="text-gray-700">
                AI optimization of landing pages and customer journeys leads to significantly higher conversion rates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary-800">60%</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Time Saved on Tasks</h4>
              <p className="text-gray-700">
                Automation of repetitive marketing tasks frees up your team to focus on strategy and creativity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent-600">40%</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Better ROI</h4>
              <p className="text-gray-700">
                AI-driven campaigns deliver higher returns on investment through continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBenefits;
