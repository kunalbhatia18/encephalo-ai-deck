// src/App.jsx

import Slide from "./components/Slide";
import SlideContent from "./components/SlideContent";
import {
  FaBrain,
  FaGamepad,
  FaChartLine,
  FaRocket,
  FaCog,
  FaGlobe,
  FaGraduationCap,
  FaBriefcase,
  FaBuilding,
  FaHospital,
  FaRobot,
  FaBullhorn,
  FaHandshake,
  FaDollarSign,
  FaChartPie,
  FaFlagCheckered,
} from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Link, Element, scroller } from "react-scroll";
import { useEffect } from "react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

// Mapping of icon identifiers to actual React Icon components
const iconMap = {
  FaBrain: <FaBrain />,
  FaGamepad: <FaGamepad />,
  FaChartLine: <FaChartLine />,
  FaRocket: <FaRocket />,
  FaCog: <FaCog />,
  FaGlobe: <FaGlobe />,
  FaGraduationCap: <FaGraduationCap />,
  FaBriefcase: <FaBriefcase />,
  FaBuilding: <FaBuilding />,
  FaHospital: <FaHospital />,
  FaRobot: <FaRobot />,
  FaBullhorn: <FaBullhorn />,
  FaHandshake: <FaHandshake />,
  FaDollarSign: <FaDollarSign />,
  FaChartPie: <FaChartPie />,
  FaFlagCheckered: <FaFlagCheckered />,
};

function App() {
  // Automatically scroll to the first slide on load
  useEffect(() => {
    scroller.scrollTo(`slide-${SlideContent[0].id}`, {
      smooth: true,
      duration: 500,
      offset: 0,
    });
  }, []);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col space-y-2">
        {SlideContent.map((slide) => (
          <Link
            key={slide.id}
            to={`slide-${slide.id}`}
            smooth={true}
            duration={500}
            className="cursor-pointer bg-indigo-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-indigo-600 transition-colors"
          >
            {slide.id}
          </Link>
        ))}
      </nav>

      {/* Slides Container */}
      <div className="flex flex-col snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        {SlideContent.map((slide) => (
          <Element
            key={slide.id}
            name={`slide-${slide.id}`}
            className="snap-start"
          >
            <Slide
              bgColor={slide.bgColor}
              textColor={slide.textColor}
              type={slide.type}
            >
              {slide.type === "roadmap" ? (
                // Roadmap Slide
                <div className="space-y-6 text-center">
                  <h1 className="text-5xl font-extrabold">{slide.title}</h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}
                  <div className="relative mt-8">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
                    <div className="space-y-8">
                      {slide.points.map((point, index) => (
                        <div
                          key={index}
                          className={`flex items-center ${
                            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                          } relative`}
                        >
                          <div className="w-1/2 p-4">
                            <div className="flex items-center space-x-4">
                              <span className="text-4xl text-indigo-400">
                                {iconMap[point.icon]}
                              </span>
                              <h3 className="text-2xl font-bold text-white">
                                {point.title}
                              </h3>
                            </div>
                            <p className="text-base text-gray-300 mt-2">
                              {point.content}
                            </p>
                          </div>
                          <div className="w-1/2"></div>
                          {/* Timeline Node */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-400 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : slide.type === "intro" ? (
                // Intro Slide
                <div className="space-y-6 text-center">
                  <h1 className="text-6xl font-extrabold tracking-wide">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-2xl font-light mt-2">{slide.subtitle}</p>
                  )}
                  {slide.description && (
                    <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                  )}
                </div>
              ) : slide.type === "market" ? (
                // Market Opportunity Slide
                <div className="space-y-6 text-center mt-8 mb-8">
                  <h1 className="text-5xl font-extrabold">{slide.title}</h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}

                  {/* Metrics */}
                  {slide.metrics && (
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                      {slide.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center"
                        >
                          <p className="text-xl font-bold text-indigo-400">
                            {metric.value}
                          </p>
                          <p className="text-sm text-gray-300">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Applications */}
                  {slide.points && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                      {slide.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105"
                        >
                          <span className="text-5xl text-teal-400 mb-4">
                            {iconMap[point.icon]}
                          </span>
                          <h3 className="text-2xl font-bold text-white">
                            {point.title}
                          </h3>
                          <p className="text-base text-gray-300 text-center mt-2">
                            {point.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Chart */}
                  {slide.chartData && (
                    <div className="mt-12">
                      <Bar
                        data={slide.chartData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              display: false,
                            },
                            title: {
                              display: true,
                              text: "Market Segments",
                              color: "#ffffff",
                              font: {
                                size: 20,
                              },
                            },
                          },
                          scales: {
                            x: {
                              title: {
                                display: true,
                                text: "Segments",
                                color: "#ffffff",
                                font: {
                                  size: 16,
                                },
                              },
                              ticks: {
                                color: "#ffffff",
                              },
                              grid: {
                                color: "rgba(255, 255, 255, 0.1)",
                              },
                            },
                            y: {
                              title: {
                                display: true,
                                text: "Revenue (in millions)",
                                color: "#ffffff",
                                font: {
                                  size: 16,
                                },
                              },
                              ticks: {
                                color: "#ffffff",
                              },
                              grid: {
                                color: "rgba(255, 255, 255, 0.1)",
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  )}
                </div>
              ) : slide.type === "business" ? (
                // Business Model Slide
                <div className="space-y-6 text-center mt-8 mb-8">
                  <h1 className="text-5xl font-extrabold">{slide.title}</h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}
                  {slide.points && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                      {slide.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105"
                        >
                          <span className="text-5xl text-teal-400 mb-4">
                            {iconMap[point.icon]}
                          </span>
                          <h3 className="text-2xl font-bold text-white">
                            {point.title}
                          </h3>
                          <p className="text-base text-gray-300 text-center mt-2">
                            {point.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : slide.type === "demo" ? (
                // Product Demo Slide
                <div className="space-y-8 text-center mt-8 mb-8">
                  <h1 className="text-5xl font-extrabold">{slide.title}</h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}

                  {/* Mockup */}
                  {slide.mockup && (
                    <div className="mt-6">
                      <img
                        src={slide.mockup}
                        alt="Product Mockup"
                        className="rounded-xl shadow-lg mx-auto max-w-full"
                      />
                    </div>
                  )}

                  {/* Features */}
                  {slide.points && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                      {slide.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105"
                        >
                          <span className="text-5xl text-teal-400 mb-4">
                            {iconMap[point.icon]}
                          </span>
                          <h3 className="text-2xl font-bold text-white">
                            {point.title}
                          </h3>
                          <p className="text-base text-gray-300 text-center mt-2">
                            {point.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : slide.type === "why-now" ? (
                // Why Now Slide
                <div className="space-y-10 px-6 text-center mt-12">
                  <h1 className="text-5xl font-extrabold">{slide.title}</h1>

                  <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
                    {slide.points.map((point, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-4">
                          <span className="text-4xl text-white">
                            {iconMap[point.icon]}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {point.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-3">
                          {point.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.type === "competition" ? (
                // Competition Slide with Unique Design
                <div className="space-y-8 px-6 py-12">
                  <h1 className="text-5xl font-extrabold text-center">
                    {slide.title}
                  </h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}
                  {/* Competition Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                      <thead>
                        <tr>
                          <th className="py-3 px-6 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Competitor
                          </th>
                          <th className="py-3 px-6 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Feature
                          </th>
                          <th className="py-3 px-6 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Our Advantage
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {slide.competitors.map((comp, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                            }
                          >
                            <td className="py-4 px-6 text-sm text-white">
                              {comp.name}
                            </td>
                            <td className="py-4 px-6 text-sm text-white">
                              {comp.feature}
                            </td>
                            <td className="py-4 px-6 text-sm text-teal-400">
                              {comp.advantage}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : slide.type === "go-to-market" ? (
                // Go-to-Market Strategy Slide with Unique Design
                <div className="space-y-8 px-6 py-12">
                  <h1 className="text-5xl font-extrabold text-center">
                    {slide.title}
                  </h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}

                  {/* Go-to-Market Strategies */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
                    {slide.strategies.map((strategy, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-4">
                          <span className="text-4xl text-white">
                            {iconMap[strategy.icon]}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {strategy.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-3">
                          {strategy.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.type === "financials" ? (
                // Financials Slide with Unique Design
                <div className="space-y-8 px-6 py-12">
                  <h1 className="text-5xl font-extrabold text-center">
                    {slide.title}
                  </h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}

                  {/* Financial Tables */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                      <thead>
                        <tr>
                          <th className="py-3 px-6 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Year
                          </th>
                          <th className="py-3 px-6 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Revenue
                          </th>
                          <th className="py-3 px-6 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Expenses
                          </th>
                          <th className="py-3 px-6 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Profit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {slide.financials.map((item, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                            }
                          >
                            <td className="py-4 px-6 text-sm text-white">
                              {item.year}
                            </td>
                            <td className="py-4 px-6 text-sm text-white">
                              {item.revenue}
                            </td>
                            <td className="py-4 px-6 text-sm text-white">
                              {item.expenses}
                            </td>
                            <td className="py-4 px-6 text-sm text-teal-400">
                              {item.profit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : slide.type === "the-ask" ? (
                // The Ask Slide with Unique Design
                <div className="space-y-8 px-6 py-12">
                  <h1 className="text-5xl font-extrabold text-center">
                    {slide.title}
                  </h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}

                  {/* Ask Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
                    {slide.askDetails.map((detail, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
                      >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-4">
                          <span className="text-4xl text-white">
                            {iconMap[detail.icon]}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {detail.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-3">
                          {detail.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.type === "team" ? (
                // Team Slide with Unique Design
                <div className="space-y-8 px-6 py-12">
                  <h1 className="text-5xl font-extrabold text-center">
                    {slide.title}
                  </h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}

                  {/* Team Members */}
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-12 mt-10">
                    {slide.members.map((member, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
                      >
                        <img
                          src={member.photo}
                          alt={`${member.name} Photo`}
                          className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                        />
                        <h3 className="text-2xl font-bold text-white">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-300">{member.role}</p>
                        <p className="text-sm text-gray-400 mt-2 text-center">
                          {member.bio}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.type === "closing" ? (
                // Closing Slide with Unique Design
                <div className="space-y-8 px-6 py-12 flex flex-col items-center justify-center">
                  <h1 className="text-5xl font-extrabold">{slide.title}</h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}

                  {/* Contact Information */}
                  <div className="space-y-4 mt-8 text-center">
                    <p className="text-md text-gray-300">
                      <strong>Email:</strong> {slide.contactInfo.email}
                    </p>
                    <p className="text-md text-gray-300">
                      <strong>Website:</strong>{" "}
                      <a
                        href={`https://${slide.contactInfo.website}`}
                        className="text-teal-400 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {slide.contactInfo.website}
                      </a>
                    </p>
                    <div className="flex space-x-4 justify-center mt-4">
                      <a
                        href={slide.contactInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-600 transition-colors"
                      >
                        {/* LinkedIn Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.25 10.271h-3v-4.604c0-1.097-.02-2.506-1.531-2.506-1.532 0-1.767 1.198-1.767 2.437v4.7h-3v-9h2.88v1.232h.041c.402-.761 1.385-1.562 2.85-1.562 3.046 0 3.609 2.006 3.609 4.617v4.782z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                // Default Slide Layout for Other Types
                <div className="space-y-6 text-center mt-8 mb-8">
                  <h1 className="text-5xl font-extrabold">{slide.title}</h1>
                  {slide.description && (
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}
                  {slide.points && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                      {slide.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105"
                        >
                          <span className="text-5xl text-teal-400 mb-4">
                            {iconMap[point.icon]}
                          </span>
                          <h3 className="text-2xl font-bold text-white">
                            {point.title}
                          </h3>
                          <p className="text-base text-gray-300 text-center mt-2">
                            {point.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Slide>
          </Element>
        ))}
      </div>
    </div>
  );
}

export default App;
