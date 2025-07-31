import Link from 'next/link';

export default function HouseParty() {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="sketchy-text text-3xl font-bold mb-2">House Party</h1>
        <div className="hand-drawn-divider"></div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Animatic Section */}
        <div className="lg:col-span-1">
          <div className="relative">
            {/* Main Animatic Box */}
            <div className="hand-drawn-border p-6 h-96 bg-gray-50 flex items-center justify-center relative">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Animatic</h2>
                <div className="text-gray-500">Video content here</div>
              </div>
              
              {/* Connecting line from left side */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-black"></div>
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-0.5 h-32 bg-black"></div>
            </div>
            
            {/* Curved flow line from bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <svg width="200" height="100" viewBox="0 0 200 100" className="absolute">
                <path 
                  d="M 100 0 Q 150 50 200 100" 
                  stroke="black" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column - Synopsis and Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Synopsis Section */}
          <div className="hand-drawn-border p-6">
            <h3 className="text-xl font-bold mb-4">Synopsis</h3>
            <p className="text-gray-700 leading-relaxed">
              blah blah blah
            </p>
          </div>
          
          {/* Two smaller boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="hand-drawn-border p-4 h-32 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Content Box 1</span>
            </div>
            <div className="hand-drawn-border p-4 h-32 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Content Box 2</span>
            </div>
          </div>
          
          {/* Curved arrow pointing up */}
          <div className="relative h-20">
            <svg width="200" height="80" viewBox="0 0 200 80" className="absolute right-0">
              <path 
                d="M 0 80 Q 100 40 200 0" 
                stroke="black" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
              />
              <polygon 
                points="195,5 200,0 195,-5" 
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation back to main page */}
      <div className="max-w-6xl mx-auto mt-12">
        <Link href="/" className="retro-button inline-block">
          ← Back to Home
        </Link>
      </div>

      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
    </div>
  );
} 