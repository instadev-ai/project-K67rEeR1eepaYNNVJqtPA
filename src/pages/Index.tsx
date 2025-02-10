const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.075)_0.1em,transparent_0.1em),linear-gradient(90deg,rgba(255,255,255,0.075)_0.1em,transparent_0.1em)] bg-[size:3em_3em]
                    opacity-30"></div>
      
      {/* Gradient orb effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Content */}
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
    </div>
  );
};

export default Index;
