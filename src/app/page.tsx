

import Image from 'next/image';
import Link from 'next/link';
import ShowcatCarousel from './components/ShowcatCarousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-7 pl-19">
      <div className="orange-sidebar"></div>
              <header className="text-center mb-12 -ml-19 -mr-7">
          <h1 className="sketchy-text text-5xl font-bold mb-3">I Stewart</h1>
          <div className="hand-drawn-divider"></div>
        </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div className="lg:col-span-2 space-y-10">
          
          <iframe 
            src="https://www.youtube.com/embed/mK_Mv3Ca6xk?si=YoyP0lXhGsls8ALI" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full max-w-full rounded-lg shadow-lg"
          ></iframe>

          <div className="space-y-7 flex flex-col items-end">
            <iframe src="https://www.youtube.com/embed/b25FdK8vxdE?si=R1HffzAROh23aEdp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full max-w-full rounded-lg shadow-lg"></iframe>
            <div className="relative">
              <a href="https://www.youtube.com/@i-stew" target="_blank" rel="noopener noreferrer" className="retro-button text-center">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <nav className="hand-drawn-border p-10 space-y-7">
            <a href="#projects" className="nav-link">
              Projects | <span className="font-bold">SHOWCAT</span>
            </a>
            <a href="#works" className="nav-link">
              Works
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <div className="mt-10">
              <div className="nav-link font-bold">Contact:</div>
              <div className="contact-info ml-7 space-y-3">
                <div>isabellepstewart@gmail.com</div>
                <div>519-591-2307</div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div id="projects" className="mt-24">
        <header className="mb-12 -ml-19 -mr-7 text-center">
          <h2 className="sketchy-text text-3xl font-bold mb-3">Projects</h2>
          <div className="hand-drawn-divider"></div>
        </header>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-2">
              <h3 className="text-6xl font-bold mb-7">SHOWCAT</h3>
              <div className="space-y-7 text-2xl hand-drawn-border p-7" style={{ backgroundColor: '#ffefa0' }}>
                <p>OCADU 2026 thesis short. </p>
                <p>After receiving a sudden text from an unknown number, Tom, a busy actor, has a chance to reconnect with his son— at the risk of passing up the role of a lifetime.</p>
                <a href="/showcat" className="text-blue-600 hover:underline font-medium">Learn more...</a>
              </div>
            </div>
            <div className="space-y-7">
              <ShowcatCarousel />
            </div>
          </div>

          <div className="hand-drawn-divider mt-19"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <Link href="/he-is-king" className="hand-drawn-border p-10 hover:bg-gray-50 transition-colors">
              <Image 
                src="/heisking-button.png" 
                alt="He is King of Heaven and Earth" 
                width={400}
                height={200}
                className="w-full h-auto mb-4"
              />
              <h4 className="text-2xl font-semibold mb-3">He is King of Heaven and Earth</h4>
            </Link>
            <Link href="/house-party" className="hand-drawn-border p-10 hover:bg-gray-50 transition-colors">
              <Image 
                src="/houseparty-button.png" 
                alt="House Party" 
                width={400}
                height={200}
                className="w-full h-auto mb-4"
              />
              <h4 className="text-2xl font-semibold mb-3">House Party</h4>
            </Link>
          </div>
        </div>
      </div>

      <div id="works" className="mt-24">
        <header className="mb-12 -ml-19 -mr-7 text-center">
          <h2 className="sketchy-text text-3xl font-bold mb-3">Works</h2>
          <div className="hand-drawn-divider"></div>
        </header>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-10">
              
              <iframe src="https://www.youtube.com/embed/MXdu1f3DESg?si=P-PYRVmJnZYfkg16" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full max-w-full rounded-lg shadow-lg"></iframe>
              
              <div className="hand-drawn-border p-10" style={{ backgroundColor: '#ffefa0' }}>
                <p className="text-gray-700">I made this when I was a mentally ill highschooler lol</p>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-10">
                  <div className="h-77 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/CatNlaser.GIF" 
                      alt="Cat with laser" 
                      width={256}
                      height={208}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="h-77 bg-gray-100 flex items-center justify-center overflow-hidden">
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
            
            <div className="lg:col-span-1 space-y-10">
              <div className="hand-drawn-border p-10" style={{ backgroundColor: '#ffefa0' }}>
                <h3 className="text-2xl font-semibold mb-7">Out of The Toil</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-7">
                <Image 
                  src="/out-of-the-toil-1.jpg" 
                  alt="Out of The Toil" 
                  width={256}
                  height={208}
                  className="w-full h-full object-cover rounded"
                />
                <Image 
                  src="/out-of-the-toil-2.jpg" 
                  alt="Out of The Toil" 
                  width={256}
                  height={208}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="mt-7">
                <Image 
                  src="/out-of-the-toil-3.jpg" 
                  alt="Out of The Toil" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
                              <div className="hand-drawn-border p-10 h-67 flex items-center justify-center" style={{ backgroundColor: '#ffefa0' }}>
                  <span>
                    Puppet heads - designer and fabricator<br></br>
                    Directed by Elliot Firth at TMU
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="about" className="mt-24">
        <header className="mb-12 -ml-19 -mr-7 text-center">
          <h2 className="sketchy-text text-3xl font-bold mb-3">About</h2>
          <div className="hand-drawn-divider"></div>
        </header>
        
        <div className="max-w-7xl mx-auto">
          <div className="mt-24 space-y-24">
            <div className="text-center">
              <div className="space-y-24 text-2xl max-w-3xl mx-auto">
                <p>My name is Isabelle Stewart. I&apos;m an Experimental Animation student at OCADU, specializing in stop motion puppetry. I enjoy long walks on the beach, and when I order a rum and Coke, I ask for Diet Coke. Not CocaCola and NOT Coke Zero. Diet Coke.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/neveragain.gif" 
                alt="wow yeah i'm never doin that again" 
                width={256}
                height={208}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="text-center mt-24 mb-12">
        <Image 
          src="/signature.png" 
          alt="Signature" 
          width={200}
          height={100}
          className="mx-auto"
        />
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
    </div>
  );
}
