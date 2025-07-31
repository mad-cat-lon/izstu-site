import Link from 'next/link';
import Image from 'next/image';

export default function HousePartyPage() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Content */}
        <div className="mt-24 space-y-12">
          <div className="hand-drawn-border p-16" style={{ backgroundColor: '#ffefa0' }}>
            <h1 className="text-6xl font-bold mb-8">House Party.</h1>
            <div className="hand-drawn-divider"></div>
            <p className="text-3xl mt-8">
              Come back in a week!
            </p>
            <p className="text-xl mt-4 text-gray-600">
              This project is still under construction...
            </p>
          </div>
        </div>
        
        {/* Back to Projects */}
        <div className="text-center mt-12">
          <Link href="/#projects" className="retro-button">
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Scroll Arrows */}
      <div className="scroll-arrows">
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
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