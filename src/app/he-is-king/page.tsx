import Link from 'next/link';
import StoryboardGallery from '../components/StoryboardGallery';
import Image from 'next/image';

export default function HeIsKingPage() {
  return (
    <div className="min-h-screen bg-white p-4">

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        
        {/* Project Title */}
        <div className="text-center mb-8" style={{ backgroundColor: '#f39c9e' }}>
          <h2 className="hero-title mb-4">He is King of Heaven and Earth</h2>
          <div className="hand-drawn-divider"></div>
        </div>

        {/* Description/Blurb Area */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex gap-8 items-start">
            <div className="flex-1">
              <div className="p-6 text-center" style={{ backgroundColor: '#f1d3ca' }}>
                <p className="text-lg leading-relaxed">
                A whimsical retelling of my experience at a religious retreat center as a 13 year old.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/he-is-king/IMG_0832.PNG"
                alt="He is King of Heaven and Earth"
                width={700}
                height={700}
                className="rounded"
              />
            </div>
          </div>
          <div className="hand-drawn-divider mt-8"></div>
        </div>

        {/* Scrollable Storyboard Gallery */}
        <StoryboardGallery />
        
        {/* Additional Images Gallery */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Image
                src="/he-is-king/deer.GIF"
                alt="Deer Animation"
                width={400}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/he-is-king/jegus.gif"
                alt="Jegus"
                width={400}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/he-is-king/IMG_0555.PNG"
                alt="Image 0555"
                width={400}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/he-is-king/IMG_0556.PNG"
                alt="Image 0556"
                width={400}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/he-is-king/IMG_0564.PNG"
                alt="Image 0564"
                width={400}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/he-is-king/IMG_0828.PNG"
                alt="Image 0828"
                width={400}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/he-is-king/IMG_0830.PNG"
                alt="Image 0830"
                width={400}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Back to Projects */}
        <div className="text-center mt-12">
          <Link href="/#projects" className="retro-button">
            ← Back to Projects
          </Link>
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