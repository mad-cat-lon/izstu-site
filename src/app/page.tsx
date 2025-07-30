

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="sketchy-text text-3xl font-bold mb-2">i-stew</h1>
        <div className="hand-drawn-divider"></div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Hero Section - PAWPARAZZI */}
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/mK_Mv3Ca6xk?si=YoyP0lXhGsls8ALI" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full max-w-full rounded-lg shadow-lg"
            ></iframe>

          {/* Action Buttons */}
          <div className="space-y-4 flex flex-col items-end">
            <iframe width="400" height="315" src="https://www.youtube.com/embed/b25FdK8vxdE?si=R1HffzAROh23aEdp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="relative">
              <button className="retro-button text-center">
                More...
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Navigation */}
        <div className="lg:col-span-1">
          <nav className="hand-drawn-border p-6 space-y-4">
            <a href="#projects" className="nav-link">
              Projects | <span className="font-bold">SHOWCAT</span>
            </a>
            <a href="#works" className="nav-link">
              Works
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <div className="mt-6">
              <div className="nav-link font-bold">Contact:</div>
              <div className="contact-info ml-4 space-y-2">
                <div>i-stew@gmail.com</div>
                <div>519-591-2307</div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-6xl mx-auto mt-16">
        <h2 className="sketchy-text text-2xl font-bold mb-4">Projects</h2>
        <div className="hand-drawn-divider"></div>
        
        {/* SHOWCAT Project */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-bold mb-4">SHOWCAT</h3>
            <div className="space-y-4 text-lg">
              <p>blurb - thesis.</p>
              <p>synopsis. etc</p>
              <a href="#" className="text-blue-600 hover:underline font-medium">Learn more...</a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="hand-drawn-border p-4 h-64 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Image/Video Placeholder</span>
            </div>
            <div className="hand-drawn-border p-4 h-32 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Thumbnail</span>
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="hand-drawn-divider mt-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Link href="/he-is-king" className="hand-drawn-border p-6 hover:bg-gray-50 transition-colors">
            <h4 className="text-xl font-semibold mb-2">He is King of Heaven and Earth</h4>
          </Link>
          <div className="hand-drawn-border p-6">
            <h4 className="text-xl font-semibold mb-2">House Party.</h4>
          </div>
        </div>
      </div>

      {/* Works Section */}
      <div id="works" className="max-w-6xl mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="sketchy-text text-2xl font-bold">Works</h2>
              <div className="text-sm opacity-70">download photo ↓</div>
            </div>
            
            <iframe width="755" height="500" src="https://www.youtube.com/embed/MXdu1f3DESg?si=P-PYRVmJnZYfkg16" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
            {/* Blurb Section */}
            <div className="hand-drawn-border p-6">
              <h4 className="text-lg font-semibold mb-4">blurb</h4>
              <p className="text-gray-700">Description and details about the work...</p>
            </div>
            
            {/* Gifs Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">gifs</h4>
              <div className="hand-drawn-divider"></div>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="hand-drawn-border p-2 h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/CatNlaser.GIF" 
                    alt="Cat with laser" 
                    width={256}
                    height={208}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="hand-drawn-border p-2 h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/mimic.GIF" 
                    alt="Mimic animation" 
                    width={256}
                    height={208}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="hand-drawn-border p-6">
              <h3 className="text-xl font-semibold mb-4">Out of The Toil</h3>
            </div>
            
            {/* Media Placeholders */}
            <div className="grid grid-cols-2 gap-4">
              <div className="hand-drawn-border p-4 h-32 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image</span>
              </div>
              <div className="hand-drawn-border p-4 h-32 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Video</span>
              </div>
            </div>
            
            {/* Additional Content Area */}
            <div className="hand-drawn-border p-6 h-48 bg-gray-50 flex items-center justify-center">
              <span className="text-gray-500">Additional content area</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Arrows - Bottom Right */}
      <div className="scroll-arrows">
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
      </div>

      {/* MySpace-style background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
    </div>
  );
}
