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

      {/* Grid-based Header Section */}
      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Main Title Section */}
          <div className="text-left space-y-6 p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/10
                        hover:border-white/20 transition-all duration-500 shadow-2xl">
            <h1 className="text-6xl font-bold text-white tracking-tight leading-tight">
              Welcome to Your Next
              <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200
                             hover:from-yellow-100 hover:to-pink-100 transition-all duration-300">
                Digital Experience
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Start crafting something extraordinary with modern web technologies
            </p>
            <div className="flex gap-4">
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

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Modern Design', icon: '✨', desc: 'Built with latest tech' },
              { title: 'Responsive', icon: '📱', desc: 'Works on all devices' },
              { title: 'Optimized', icon: '⚡', desc: 'Fast & efficient' },
              { title: 'Secure', icon: '🔒', desc: 'Enterprise-grade security' }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10
                                        hover:border-white/20 transition-all duration-300
                                        hover:transform hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: '99%', label: 'Customer Satisfaction' },
            { number: '24/7', label: 'Support Available' },
            { number: '100+', label: 'Features Included' },
            { number: '50k+', label: 'Happy Users' }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10
                                      hover:border-white/20 transition-all duration-300 text-center group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Footer with Grid Layout */}
      <footer className="relative mt-auto bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Your Brand</h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                Crafting digital experiences that inspire and innovate.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                  <a key={social} href={`#${social.toLowerCase()}`}
                     className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center
                                hover:bg-white/20 transition-all duration-300 group">
                    <span className="text-white/70 group-hover:text-white text-sm">
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="grid grid-cols-1 gap-3">
                {['Products', 'Features', 'Pricing', 'Company'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`}
                       className="text-white/80 hover:text-white transition-colors duration-300
                                  flex items-center gap-2 group">
                      <span className="text-xs opacity-60 group-hover:translate-x-1 transition-transform">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="grid grid-cols-1 gap-3">
                {['Documentation', 'API Reference', 'Guides', 'Updates'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`}
                       className="text-white/80 hover:text-white transition-colors duration-300
                                  flex items-center gap-2 group">
                      <span className="text-xs opacity-60 group-hover:translate-x-1 transition-transform">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="text-white/80">Get the latest updates and news</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10
                           focus:border-white/20 outline-none text-white placeholder:text-white/50
                           transition-all duration-300"
                />
                <button className="w-full px-4 py-3 rounded-lg bg-white/10 text-white
                                 hover:bg-white/20 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 mt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <p className="text-white/60 text-sm">
                © 2024 Your Company. All rights reserved.
              </p>
              <div className="flex gap-6 md:justify-end text-sm">
                <a href="#privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-white/60 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-white/60 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
