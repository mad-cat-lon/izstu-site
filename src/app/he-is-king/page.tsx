import Link from 'next/link';
import StoryboardGallery from '../components/StoryboardGallery';

export default function HeIsKingPage() {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="sketchy-text text-3xl font-bold mb-2">i-stew</h1>
        <div className="hand-drawn-divider"></div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        
        {/* Project Title */}
        <div className="text-center mb-8">
          <h2 className="hero-title mb-4">He is King of Heaven and Earth</h2>
          <div className="hand-drawn-divider"></div>
        </div>

        {/* Description/Blurb Area */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="hand-drawn-border p-6 text-center">
            <p className="text-lg leading-relaxed">
              blurb, synopsis,<br />
              blah blah blah
            </p>
          </div>
          <div className="hand-drawn-divider"></div>
        </div>

                  {/* Scrollable Storyboard Gallery */}
          <StoryboardGallery />

        {/* Back to Projects */}
        <div className="text-center mt-12">
          <Link href="/#projects" className="retro-button">
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Color Swatches - Bottom Left */}
      <div className="fixed bottom-20 left-4 flex flex-col gap-1">
        <div className="color-swatch green"></div>
        <div className="color-swatch orange"></div>
        <div className="color-swatch yellow"></div>
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