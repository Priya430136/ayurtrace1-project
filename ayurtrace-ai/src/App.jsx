import React, { useState, useEffect } from 'react';
import { Phone, Mail,   HelpCircle, Contact } from "lucide-react";


import { Leaf, ShieldCheck, MapPin, Code, Star, Video, Download, Github, Users, TrendingUp, Package, Clock, Zap, Palette, FlaskConical, DollarSign, BarChart, ChevronRight, X,Smartphone,QrCode, ChevronLeft, CheckCircle, AlertTriangle, Search, GanttChartSquare } from 'lucide-react';

// The main component for the entire project showcase website.
const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { id: 'overview', name: 'Overview', icon: Leaf },
    { id: 'problem', name: 'Problem', icon: Users },
    { id: 'components', name: 'Components', icon: Package },
    

    { id: 'demo', name: 'Live Demo', icon: Zap },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <Section title="What is AyurTrace AI?">
              <p className="text-lg text-gray-700 leading-relaxed">AyurTrace AI is a blockchain-based traceability system that provides a secure, tamper-proof digital record of the entire journey of Ayurvedic herbs. From where they are collected to the final product, our system uses geo-tagging and AI-powered analysis to ensure authenticity and sustainability.</p>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
                <div className="p-6 bg-green-50 rounded-xl">
                  <h3 className="text-xl font-bold text-green-700 mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-green-600" />
                    Secure & Transparent
                  </h3>
                  <p className="text-gray-600">Our solution uses a private, permissioned blockchain to record every step of the supply chain, creating an immutable and transparent ledger for all stakeholders.</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-xl">
                  <h3 className="text-xl font-bold text-purple-700 mb-2 flex items-center gap-2">
                    <Zap className="text-purple-600" />
                    AI-Powered Insights
                  </h3>
                  <p className="text-gray-600">We integrate artificial intelligence to perform molecular analysis and predict product quality, providing consumers with instant and verifiable data about their purchases.</p>
                </div>
              </div>
            </Section>
            <Section title="Key Functionalities">
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    The mobile and web applications provide a user-friendly interface to interact with the blockchain. 
    Here's a quick look at the key functionalities:
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Farmer App */}
    <div className="p-6 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-green-700 mb-2 flex items-center gap-2">
        <Smartphone className="text-green-600" />
        Farmer App
      </h3>
      <p className="text-gray-700">
        Offline-first mobile app for farmers & collectors with GPS tagging and SMS sync 
        in low-connectivity areas.
      </p>
    </div>

    {/* Lab & Processor Portal */}
    <div className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
        <FlaskConical className="text-blue-600" />
        Lab & Processor Portal
      </h3>
      <p className="text-gray-700">
        Upload quality test reports, processing steps, and certifications directly 
        linked to blockchain records.
      </p>
    </div>

    {/* Stakeholder Dashboard */}
    <div className="p-6 bg-purple-50 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-purple-700 mb-2 flex items-center gap-2">
        <BarChart className="text-purple-600" />
        Stakeholder Dashboard
      </h3>
      <p className="text-gray-700">
        Web dashboard to monitor supply chain, generate compliance reports, and 
        visualize sustainability metrics.
      </p>
    </div>

    {/* Consumer QR Portal */}
    <div className="p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-orange-700 mb-2 flex items-center gap-2">
        <QrCode className="text-orange-600" />
        Consumer QR Portal
      </h3>
      <p className="text-gray-700">
        Scan QR codes on product packaging to instantly verify authenticity, 
        provenance, and lab test results.
      </p>
    </div>

  </div>
</Section>


 <Section title="Impact at a Glance">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-purple-50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-purple-700">500+</h3>
            <p className="text-gray-700">Farmers Empowered</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-green-700">100%</h3>
            <p className="text-gray-700">Tamper-Proof Records</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-700">2 sec</h3>
            <p className="text-gray-700">Avg. Transaction Time</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-orange-700">24/7</h3>
            <p className="text-gray-700">Consumer Verification</p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section title="How It Works">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-green-50 rounded-xl shadow-md">
            <Leaf className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Step 1: Harvest Collection</h3>
            <p className="text-gray-700">
              Farmers record harvests offline with GPS and sync via SMS when internet is unavailable.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-md">
            <FlaskConical className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Step 2: Lab & Processing</h3>
            <p className="text-gray-700">
              Labs upload test results and processors log handling events on-chain for compliance.
            </p>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl shadow-md">
            <QrCode className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Step 3: Consumer Verification</h3>
            <p className="text-gray-700">
              Consumers scan QR codes to instantly view provenance and certifications.
            </p>
          </div>
        </div>
      </Section>
          </div>
        );
      case 'problem':
        return (
          <Section title="The Problem: A Fragmented Supply Chain">
  <p className="text-lg text-gray-700 leading-relaxed mb-8">
    The Ayurvedic herbal supply chain is characterized by fragmented networks of smallholder 
    farmers and wild collectors, leading to challenges in ensuring consistent quality, 
    authenticity, and sustainable sourcing. Manual record-keeping introduces risks of 
    mislabeling and adulteration, undermining consumer trust and compliance with regulatory standards.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Lack of Transparency */}
    <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Lack of Transparency</h3>
      <p className="text-gray-700">
        The geographic provenance of herbs is often opaque, making it difficult for 
        manufacturers and regulators to verify authenticity.
      </p>
    </div>

    {/* Risk of Adulteration */}
    <div className="p-6 bg-red-50 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-red-700 mb-2">Risk of Adulteration</h3>
      <p className="text-gray-700">
        Manual record-keeping and lack of oversight introduce risks of mislabeling 
        and poor quality, leading to adulteration.
      </p>
    </div>

    {/* Sustainability Concerns */}
    <div className="p-6 bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainability Concerns</h3>
      <p className="text-gray-700">
        It is difficult to verify if herbs are sourced from approved regions or follow 
        sustainable collection guidelines due to poor documentation.
      </p>
    </div>

  </div>
</Section>

        );
        case 'contact': return <ContactSection />;

      case 'components':
        return (
          <div className="space-y-12">
            <Section title="Core Project Components">
              <p className="text-center text-lg text-gray-600 mb-8">Our solution is built on a modular architecture with several key components working together to ensure end-to-end traceability.</p>
              <div className="space-y-8">
                <ComponentCard
                  title="The Blockchain Network"
                  description="A permissioned ledger (Hyperledger Fabric) that immutably records every supply-chain transaction. Smart contracts enforce rules like geo-fencing, seasonal restrictions, and quality thresholds before transactions are committed."
                  icon={ShieldCheck}
                />
                <ComponentCard
                  title="Smart Contracts in Action"
                  description="Our smart contracts are more than just code; they're an automated rulebook for the supply chain."
                  icon={Code}
                >
                  <div className="space-y-4 text-sm mt-4">
                    <div className="flex items-center space-x-2 text-green-700 font-semibold">
                      <CheckCircle className="h-4 w-4" />
                      <span>Geo-fencing Rules: Verified location against approved harvesting zones.</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-700 font-semibold">
                      <CheckCircle className="h-4 w-4" />
                      <span>Seasonal Restrictions: Ensured harvest was within permitted season.</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-700 font-semibold">
                      <CheckCircle className="h-4 w-4" />
                      <span>Quality Gates: Automatically validated moisture and pesticide limits.</span>
                    </div>
                  </div>
                </ComponentCard>
                <ComponentCard
                  title="Geo-Tagged Data Capture"
                  description="An IoT/GPS-enabled mobile DApp for collectors to record 'CollectionEvent' metadata, including location, species, and initial quality metrics. It uses an SMS-over-blockchain gateway for areas with poor connectivity."
                  icon={MapPin}
                />
                <ComponentCard
                  title="Backend API & Interoperability"
                  description="RESTful APIs enable supply-chain managers to query real-time data and integrate with existing ERP systems. The system uses FHIR-style resource models for standardized metadata exchange."
                  icon={Code}
                />
                <ComponentCard
                  title="Consumer Portal & Smart Labeling"
                  description="Unique QR codes are generated on-chain and affixed to packaging. A lightweight web/mobile portal (no specialized install required) allows customers to scan these codes to retrieve a complete provenance bundle."
                  icon={TrendingUp}
                />
              </div>
            </Section>
          </div>
        );
      case 'flowchart':
        return <FlowchartSection />;
      case 'demo':
        return <LiveDemoSection />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 text-gray-900 font-sans antialiased flex flex-col">

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
            body { font-family: 'Inter', sans-serif; }
            .animate-fade-in {
              animation: fadeIn 1s ease-in-out;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes pulse-light {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.2); opacity: 1; }
            }
          `}
        </style>
        
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2 font-bold">
              <div className="relative">
                <Leaf size={32} className="text-white" />
                <div className="absolute top-0 right-0 h-2 w-2 bg-yellow-400 rounded-full animate-pulse-light"></div>
              </div>
              <div>
                <span className="text-xl">AyurTrace AI</span>
                <p className="text-sm font-normal text-white/80">Next-Gen Blockchain Verification</p>
              </div>
            </a>
            <div className="hidden md:flex space-x-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${activeTab === item.id ? 'bg-white text-green-700 font-semibold shadow-md' : 'text-white hover:bg-white/20'}`}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
           <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setActiveTab('contact');
  }}
  className="hidden md:flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
>
  <Contact size={20} />
  <span>Contact</span>
</a>


          </div>
        </nav>
        
        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 flex-grow">
          {renderContent()}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 text-center">
          <p>© 2025 AyurTrace. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

// Reusable components for the main page content
const Section = ({ title, children }) => (
  <section className="bg-white rounded-3xl shadow-lg p-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
    {children}
  </section>
);

const ProblemCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-red-200 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ComponentCard = ({ title, description, icon: Icon, image, children }) => (
  <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
    {image && <img src={image} alt={title} className="rounded-2xl shadow-lg w-full md:w-1/2 max-w-sm" />}
    <div className="flex-1">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-green-200 to-blue-200 rounded-full">
          <Icon size={24} className="text-gray-900" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      {children}
    </div>
  </div>
);

const TechStackCard = ({ title, list }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
    <h3 className="text-2xl font-semibold mb-4 text-green-700">{title}</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

// -------------------- REWRITTEN STATIC FLOWCHART --------------------
/*const FlowchartSection = () => {
  const [direction, setDirection] = useState('horizontal');

  const steps = [
    { title: 'Choose Blockchain Platform', description: 'Hyperledger Fabric for privacy and security.', color: 'bg-indigo-500' },
    { title: 'Set Up Network Participants', description: 'Define participants (farmers, collectors, labs, etc.).', color: 'bg-purple-500' },
    { title: 'Develop Smart Contracts', description: 'Program rules to validate data, enforce quality.', color: 'bg-blue-500' },
    { title: 'Build a Mobile App', description: 'Create a lightweight app with GPS and offline mode.', color: 'bg-green-500' },
    { title: 'Design Backend API', description: 'Develop APIs for data fetching and provenance bundles.', color: 'bg-yellow-500' },
    { title: 'Generate QR Codes on Blockchain', description: 'Create unique QR codes linked to batch data.', color: 'bg-pink-500' },
    { title: 'Create Consumer Portal', description: 'Develop a portal to scan QR codes and view data.', color: 'bg-red-500' },
    { title: 'Build Stakeholder Dashboard', description: 'Admin portal for monitoring supply chain status.', color: 'bg-orange-500' },
    { title: 'Integrate Third-Party Systems', description: 'Allow ERP and lab systems to send and receive data.', color: 'bg-teal-500' },
    { title: 'Testing and Metrics', description: 'Trial with a herb, monitor performance and accuracy.', color: 'bg-gray-500' },
  ];

  return (
    <Section title="Development Flowchart">
      <p className="text-xl font-medium text-center mb-8">
        Blockchain-based System Development Flowchart
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 p-2 bg-gray-100 rounded-full shadow-lg max-w-fit mx-auto">
        <button
          onClick={() => setDirection('horizontal')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${direction === 'horizontal' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 text-gray-700'}`}
        >
          Horizontal View
        </button>
        <button
          onClick={() => setDirection('vertical')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${direction === 'vertical' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 text-gray-700'}`}
        >
          Vertical View
        </button>
      </div>

      <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 w-full ${direction === 'horizontal' ? 'flex-row' : 'flex-col md:w-3/4 lg:w-2/3 mx-auto'}`}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex items-center group ${direction === 'horizontal' ? 'flex-col md:flex-row' : 'flex-row w-full'}`}
          >
            <div className={`flex-shrink-0 w-64 h-32 md:w-64 md:h-40 rounded-xl shadow-lg p-4 flex flex-col justify-center text-center text-white ${step.color} ${direction === 'vertical' ? 'w-full !max-w-md' : ''}`}>
              <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm md:text-base font-light">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-shrink-0 ${direction === 'horizontal' ? 'w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 my-4 md:h-12 md:w-1 md:my-0' : 'w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400 mx-4 md:h-16'} rounded-full`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-6 w-6 text-gray-500 absolute ${direction === 'horizontal' ? '-top-3 left-1/2 -ml-3 rotate-90' : 'left-1/2 -ml-3 -bottom-3'}`}>
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};*/
// -------------------- END OF REWRITTEN STATIC FLOWCHART --------------------

const ContactSection = () => {
  return (
    <Section title="Contact Us">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left Side: Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Phone className="text-green-600" />
            <p className="text-gray-700 font-medium">
              +91 9876543210, +91 9123456789
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="text-green-600" />
            <p className="text-gray-700 font-medium">
              info@ayurtrace.com <br />
              support@ayurtrace.com
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-green-600" />
            <p className="text-gray-700 font-medium">
              AyurTrace Headquarters <br />
              Plot No. 123, Industrial Area, Gurgaon, Haryana, India
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="text-green-600" />
            <p className="text-gray-700 font-medium">
              Mon – Fri: 9:00 AM – 6:00 PM <br />
              Sat: 10:00 AM – 2:00 PM
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <HelpCircle className="text-green-600" />
            <p className="text-gray-700 font-medium">
              <strong>FAQ:</strong> Visit our Help Center or contact us for more details.
            </p>
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.056!2d77.0266!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e4a44d!2sGurgaon!5e0!3m2!1sen!2sin!4v1638356177794!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            title="AyurTrace Location"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

const LiveDemoSection = () => {
  const [currentScreen, setCurrentScreen] = useState('scanner');
  const [scanProgress, setScanProgress] = useState(0);
  const [marketData, setMarketData] = useState({
    demand: '85%',
    price: '238.62',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [animatedDemand, setAnimatedDemand] = useState(85);
  const [animatedPrice, setAnimatedPrice] = useState(238.62);

  const herbData = {
    productName: "Organic Ashwagandha Root Powder",
    batchId: "ASH-2024-001-BJP",
    blockchainId: "0x8f2a9b4e7d3c1a9f5e8b2d6c4a7e9f1b3d5c8a6e",
    network: "Hyperledger Fabric",
    sustainabilityScore: 94,
    nmpbCompliance: "Verified ✓",
    gacpCertification: "Good Agricultural & Collection Practices Certified",
    aiPrediction: {
      potency: "96% (Excellent)",
      shelfLife: "24 months",
      efficacy: "High bioavailability detected",
      recommendation: "Perfect for stress management"
    },
    carbonFootprint: {
      total: 2.1,
      farming: 0.8,
      processing: 0.5,
      transport: 0.6,
      packaging: 0.2,
      offsetCredits: 3.2
    },
    healthMatch: {
      score: 92,
      benefits: ["Stress Relief", "Better Sleep", "Immune Boost"],
      warnings: ["Not suitable for pregnancy"],
      dosageRecommendation: "300-500mg daily"
    },
    journey: [
      {
        stage: "Smart Farming",
        location: "Rajasthan, India",
        date: "2024-01-15",
        actor: "Farmer Ravi Kumar",
        verified: true,
        details: "IoT sensors monitored growth conditions",
        fhirEvent: "CollectionEvent",
        nodeType: "Farmer Cooperative"
      },
      {
        stage: "AI Quality Testing",
        location: "Quality Lab, Jaipur",
        date: "2024-01-18",
        actor: "AyurLab Certified",
        verified: true,
        details: "AI-powered molecular analysis completed",
        fhirEvent: "QualityTest",
        nodeType: "Testing Laboratory",
      },
      {
        stage: "Blockchain Processing",
        location: "Herbal Processing Unit",
        date: "2024-01-22",
        actor: "AyurVeda Mills",
        verified: true,
        details: "Smart contracts auto-verified quality gates",
        fhirEvent: "ProcessingStep",
        nodeType: "Processing Facility"
      },
      {
        stage: "Carbon-Neutral Packaging",
        location: "Mumbai, Maharashtra",
        date: "2024-01-25",
        actor: "EcoPackage Co.",
        verified: true,
        details: "Biodegradable packaging with carbon offset",
        fhirEvent: "ProcessingStep",
        nodeType: "Manufacturer"
      }
    ],
  };

  const animateValue = (start, end, setter) => {
    let startTime = null;
    const duration = 1000;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = start + Math.floor(progress * (end - start));
      setter(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newDemand = Math.floor(Math.random() * 20) + 80;
      const newPrice = (Math.random() * 20 + 230);
      animateValue(animatedDemand, newDemand, setAnimatedDemand);
      setAnimatedPrice(newPrice);
    }, 3000);
    return () => clearInterval(interval);
  }, [animatedDemand]);

  const simulateScan = () => {
    setCurrentScreen('scanning');
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentScreen('passport');
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  
  const renderDemoContent = () => {
    switch (currentScreen) {
      case 'scanner':
        return (
          <div className="bg-gray-100 p-8 rounded-3xl shadow-inner animate-fade-in">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, batches, or farmers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white text-gray-800 placeholder-gray-400 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8">
              <div className="w-48 h-48 mx-auto bg-gray-100 rounded-2xl border-4 border-dashed border-purple-300 flex items-center justify-center relative overflow-hidden mb-6">
                <Zap size={64} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Scan</h3>
              <p className="text-gray-600 text-sm mb-4">Advanced molecular analysis + blockchain verification in real-time</p>
              <button
                onClick={simulateScan}
                className="bg-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
              >
                Start AI Analysis
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-green-500 rounded-xl p-4 text-white text-center shadow-md">
                <BarChart className="mx-auto mb-1" size={24} />
                <div className="text-2xl font-bold">{animatedDemand}%</div>
                <div className="text-xs opacity-90">Market Demand</div>
              </div>
              <div className="bg-blue-500 rounded-xl p-4 text-white text-center shadow-md">
                <DollarSign className="mx-auto mb-1" size={24} />
                <div className="text-2xl font-bold">₹{animatedPrice.toFixed(2)}</div>
                <div className="text-xs opacity-90">Live Price/kg</div>
              </div>
              <div className="bg-purple-500 rounded-xl p-4 text-white text-center shadow-md">
                <Zap className="mx-auto mb-1" size={24} />
                <div className="text-2xl font-bold">AI</div>
                <div className="text-xs opacity-90">Powered</div>
              </div>
            </div>
          </div>
        );
      case 'scanning':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fade-in">
            <div className="w-48 h-48 mx-auto bg-gray-100 rounded-2xl border-4 border-dashed border-purple-300 flex items-center justify-center relative overflow-hidden mb-6">
              <Zap size={64} className="text-purple-500" />
              <div 
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" 
                style={{ top: `${scanProgress}%` }}
              />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              AI Analysis: {scanProgress}%
            </p>
            <h3 className="text-xl font-semibold mt-6">Analyzing...</h3>
          </div>
        );
      case 'passport':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setCurrentScreen('scanner')}
                className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <ChevronLeft size={16} />
                <span className="text-sm">Back to Scanner</span>
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold">AI Grade</span>
                <span className="text-3xl font-bold text-green-600">A+</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Digital Passport</h3>
            <div className="bg-purple-50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-purple-700 mb-4 flex items-center space-x-2">
                <FlaskConical size={20} /><span>AI Lab Report</span>
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><p className="font-semibold">Molecular Fingerprint:</p><p className="text-green-600">✓ Verified</p></div>
                <div><p className="font-semibold">Efficacy Score:</p><p className="text-purple-600">{herbData.aiPrediction.potency}</p></div>
                <div><p className="font-semibold">Adulteration Risk:</p><p className="text-green-600">0.3% (Very Low)</p></div>
                <div><p className="font-semibold">Quality Grade:</p><p className="text-indigo-600">A+</p></div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center space-x-2">
                <Star size={20} /><span>Health Match</span>
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><p className="font-semibold">Score:</p><p className="text-blue-600">{herbData.healthMatch.score}%</p></div>
                <div><p className="font-semibold">Recommended Dosage:</p><p className="text-blue-600">{herbData.healthMatch.dosageRecommendation}</p></div>
              </div>
              <p className="font-semibold mt-4 mb-2">Perfect for You:</p>
              <div className="flex flex-wrap gap-2">
                {herbData.healthMatch.benefits.map((benefit, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center space-x-2">
                <TrendingUp size={20} /><span>FHIR-Compatible Supply Chain</span>
              </h4>
              <div className="space-y-4">
                {herbData.journey.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-green-600"></div>
                      {index < herbData.journey.length - 1 && <div className="w-px h-12 bg-green-300"></div>}
                    </div>
                    <div>
                      <h5 className="font-semibold">{step.stage}</h5>
                      <p className="text-sm text-gray-600">{step.location}</p>
                      <p className="text-xs text-gray-500">{step.date} • {step.actor}</p>
                      <p className="text-gray-700 text-sm mb-1">{step.details}</p>
                      <div className="flex items-center space-x-2 text-xs text-indigo-700 bg-indigo-50 p-1 rounded-md">
                        <Package size={12} />
                        <span>FHIR Event: {step.fhirEvent}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center space-x-2">
                <Leaf size={20} /><span>Carbon Impact</span>
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><p className="font-semibold">Total Footprint:</p><p className="text-red-600">{herbData.carbonFootprint.total} kg CO₂</p></div>
                <div><p className="font-semibold">Offset Credits:</p><p className="text-green-600">+{herbData.carbonFootprint.offsetCredits} kg</p></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button 
                onClick={() => setCurrentScreen('lab-report')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <FlaskConical className="h-5 w-5" />
                  <span>AI Lab Report</span>
                </div>
                <ChevronRight className="h-4 w-4" />
              </button>
              
              <button 
                onClick={() => setCurrentScreen('api-dashboard')}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>API Dashboard</span>
                </div>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      case 'lab-report':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fade-in">
            <FlaskConical className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Quality Report</h2>
            <p className="text-gray-600">Detailed molecular analysis coming soon...</p>
            <button 
              onClick={() => setCurrentScreen('passport')}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              Back to Passport
            </button>
          </div>
        );
      case 'api-dashboard':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fade-in">
            <TrendingUp className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">API Dashboard</h2>
            <p className="text-gray-600">Real-time API metrics coming soon...</p>
            <button 
              onClick={() => setCurrentScreen('passport')}
              className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              Back to Passport
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Section title="Interactive Live Demo">
      {renderDemoContent()}
    </Section>
  );
};

export default App;