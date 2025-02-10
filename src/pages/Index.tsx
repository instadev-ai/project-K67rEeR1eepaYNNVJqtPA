const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.075)_0.1em,transparent_0.1em),linear-gradient(90deg,rgba(255,255,255,0.075)_0.1em,transparent_0.1em)] bg-[size:3em_3em]
                    opacity-30"></div>
      
      {/* Gradient orb effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="relative text-center px-6 py-12 rounded-2xl backdrop-blur-sm bg-white/10 shadow-2xl">
          <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
            Welcome to Your Next
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
              Digital Experience
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Start crafting something extraordinary with modern web technologies
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Company</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Resources</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Connect</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
              <p>© 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
