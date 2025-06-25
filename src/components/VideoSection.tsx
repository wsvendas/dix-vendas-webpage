
const VideoSection = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden flex items-center justify-center">
      {/* Efeitos neon de fundo mais intensos */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-96 h-96 bg-green-accent/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-teal-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-secondary/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-accent via-teal-accent to-purple-secondary bg-clip-text text-transparent animate-pulse">
                🎯 ASSISTA AGORA
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8 font-bold">
              O Vídeo Que Vai Mudar Sua Vida Financeira Para Sempre!
            </p>
          </div>
        </div>

        {/* Container do vídeo com efeito neon */}
        <div className="relative group mb-12">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-accent via-teal-accent to-purple-secondary rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <div className="relative bg-black/90 p-4 rounded-3xl backdrop-blur-sm border-2 border-green-accent/50">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/cvnzkIZjwno"
                title="Vídeo Exclusivo - Estica Vendas"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Chamada para ação abaixo do vídeo */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-accent to-teal-accent rounded-2xl blur opacity-75 animate-pulse"></div>
            <div className="relative bg-black/80 p-8 rounded-2xl backdrop-blur-sm border border-green-accent/50">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                💎 GOSTOU DO QUE VIU?
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Continue rolando para descobrir como ter acesso ao curso completo com desconto exclusivo!
              </p>
              <div className="animate-bounce">
                <svg className="w-8 h-8 mx-auto text-green-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
