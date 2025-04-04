import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { HeroContent, TypewriterHeadline } from "@/components/client-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/gyst-logo.png" 
            alt="Gyst Logo" 
            width={110} 
            height={30} 
            priority
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:py-12 text-center max-w-5xl">
          {/* Use client-side HeroContent wrapper */}
          <HeroContent>
            {/* Free Training Badge */}
            <div className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-md font-medium mb-6" style={{ fontFamily: "'Gobold Extra', sans-serif" }}>
              FREE CONSULTATION
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight" style={{ fontFamily: "'Gobold Extra', sans-serif" }}>
              <TypewriterHeadline 
                phrases={[
                  "Unlock Freedom with Automation",
                  "Escape Busywork with AI",
                  "Transform Your Business with GYST",
                  "Automate Your Way to Success"
                ]} 
                className="text-black"
              />{" "}
              in <span className="text-yellow-600">90 Days or Less</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto" style={{ fontFamily: "'Brushstrike', sans-serif" }}>
              Learn how to stop drowning in busywork and start scaling with smart systems — the <span className="font-bold">GYST Method</span>.
            </p>

            {/* Video/Image Section */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
              {/* Free Bonus Banner */}
              <div className="absolute top-10 -left-2 z-10">
                <div className="bg-yellow-500 text-white px-6 py-3 rounded-r-md font-bold transform -rotate-2 shadow-lg">
                  <span className="text-xl">🎁 FREE BONUS!</span>
                </div>
              </div>
              
              {/* Actual Video */}
              <div className="aspect-video bg-gray-100 relative">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="GYST AI Automation Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-12 text-left max-w-2xl mx-auto">
              <h2 className="text-xl mb-6 text-center">🎁 BONUS: Get our exclusive 100-Hour Recovery Blueprint — a simple system to reclaim weeks of your life, instantly.</h2>
              
              <h3 className="text-xl font-bold mb-4">What you'll learn:</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">✓</span>
                  <span>How I've helped businesses save 20+ hours per week with AI automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">✓</span>
                  <span>How to fix productivity bottlenecks forever with intelligent automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">✓</span>
                  <span>How to implement AI solutions even when you're not a technical expert</span>
                </li>
              </ul>
            </div>

            {/* Calendar Embed */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Free Consultation</h3>
              <div className="max-w-4xl mx-auto">
                <iframe src="https://link.hebedigital.io/widget/booking/oFRsdjTLiRNyOK56cEsE" style={{width: "100%", border: "none", overflow: "hidden"}} scrolling="no" id="oFRsdjTLiRNyOK56cEsE_1743693756663"></iframe>
                <Script src="https://link.hebedigital.io/js/form_embed.js" strategy="afterInteractive" />
              </div>
            </div>
          </HeroContent>
        </div>

        {/* Feature Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our AI Automation Services</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Content Automation</h3>
                <p className="text-gray-600">Automate content creation, curation, and distribution with our AI-powered tools.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Workflow Automation</h3>
                <p className="text-gray-600">Streamline repetitive tasks and processes to free up your team's valuable time.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                <p className="text-gray-600">Leverage AI to analyze your business data and uncover actionable insights.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    TK
                  </div>
                  <div>
                    <h4 className="font-bold">Thomas Keller</h4>
                    <p className="text-gray-600 text-sm">CEO, TechFusion</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Gyst transformed our content production process. We've cut our production time by 60% while increasing output quality. The ROI has been remarkable."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Mitchell</h4>
                    <p className="text-gray-600 text-sm">Operations Director, GrowthLabs</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Implementing Gyst's AI automation solutions helped us eliminate data entry errors and reduced our processing time by 75%. Our team can now focus on strategic initiatives instead of repetitive tasks."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">AI-powered automation for your business</p>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="hover:text-yellow-400">About</Link>
              <Link href="/services" className="hover:text-yellow-400">Services</Link>
              <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Gyst. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
