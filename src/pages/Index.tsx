const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Enhanced Grid overlay with animated gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.075)_0.1em,transparent_0.1em),linear-gradient(90deg,rgba(255,255,255,0.075)_0.1em,transparent_0.1em)] bg-[size:3em_3em]
                    opacity-30 animate-grid-fade"></div>
      
      {/* Improved gradient orb effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Enhanced Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="relative text-center px-8 py-16 rounded-3xl backdrop-blur-md bg-white/10 shadow-2xl
                        border border-white/10 hover:border-white/20 transition-all duration-500
                        hover:shadow-indigo-500/20 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          <h1 className="text-6xl font-bold mb-8 text-white tracking-tight">
            Welcome to Your Next
            <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200
                           hover:from-yellow-100 hover:to-pink-100 transition-all duration-300">
              Digital Experience
            </span>
          </h1>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Start crafting something extraordinary with modern web technologies
          </p>
          
          {/* Call to Action Buttons */}
          <div className="mt-12 flex gap-6 justify-center">
            <button className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white
                             hover:bg-white/20 transition-all duration-300 font-medium">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white/90
                             hover:bg-white/10 transition-all duration-300 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl overflow-hidden
                          border border-white/10 hover:border-white/20 transition-all duration-500">
            
            {/* Top Footer Section */}
            <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Your Brand</h2>
                <p className="text-white/80 leading-relaxed">
                  Crafting digital experiences that inspire and innovate.
                </p>
                {/* Social Icons */}
                <div className="flex gap-4">
                  {['twitter', 'github', 'linkedin'].map((social) => (
                    <a key={social} href={`#${social}`}
                       className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                                  hover:bg-white/20 transition-all duration-300 group">
                      <span className="text-white/70 group-hover:text-white">{social[0].toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="space-y-3 text-white/80">
                  {['Home', 'About', 'Services', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`}
                         className="hover:text-white transition-colors duration-300 flex items-center gap-2
                                    hover:translate-x-1 transform transition-transform">
                        <span className="text-xs opacity-60">→</span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Resources</h3>
                <ul className="space-y-3 text-white/80">
                  {['Documentation', 'Blog', 'Support', 'Terms'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`}
                         className="hover:text-white transition-colors duration-300 flex items-center gap-2
                                    hover:translate-x-1 transform transition-transform">
                        <span className="text-xs opacity-60">→</span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                <p className="text-white/80">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input type="email"
                         placeholder="Enter your email"
                         className="px-4 py-2 rounded-lg bg-white/5 border border-white/10
                                  focus:border-white/20 outline-none text-white placeholder:text-white/50
                                  flex-grow transition-all duration-300" />
                  <button className="px-4 py-2 rounded-lg bg-white/10 text-white
                                   hover:bg-white/20 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 px-12 py-6 bg-white/5">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60">
                <p>© 2024 Your Company. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                  <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                  <a href="#cookies" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
