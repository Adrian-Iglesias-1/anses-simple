import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import FloatingCard from '@/sections/FloatingCard';
import DisclaimerBanner from '@/sections/DisclaimerBanner';
import Benefits from '@/sections/Benefits';
import PaymentTool from '@/sections/PaymentTool';
import DondeCobro from '@/sections/DondeCobro';
import FAQ from '@/sections/FAQ';
import InfoCards from '@/sections/InfoCards';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Floating Card - appears on scroll */}
      <FloatingCard />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Disclaimer Banner */}
        <DisclaimerBanner />
        
        {/* Benefits Section */}
        <Benefits />
        
        {/* Payment Calendar Tool */}
        <PaymentTool />
        
        {/* Where to Collect Section */}
        <DondeCobro />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Info Cards Section */}
        <InfoCards />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
