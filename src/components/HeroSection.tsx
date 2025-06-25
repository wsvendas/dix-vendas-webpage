
const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-6xl mx-auto">
        <div className="mb-8 animate-float">
          <img
            src="/lovable-uploads/8f41cb60-4f58-4bf0-a85f-69f513b10ac5.png"
            alt="Estica Vendas - DIX VENDE"
            className="w-80 h-80 mx-auto object-contain"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-secondary to-teal-accent bg-clip-text text-transparent">
          PÁGINA DE VENDAS
        </h1>
        
        <h2 className="text-2xl md:text-4xl text-purple-secondary mb-8 font-semibold">
          Curso Completo | Estica Vendas - Vídeo Aulas
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
          Descubra os segredos do <span className="text-green-accent font-bold">Marketing Digital</span> e 
          aprenda a vender da forma certa com estratégias comprovadas de 
          <span className="text-teal-accent font-bold"> Tráfego Pago</span>, 
          <span className="text-purple-secondary font-bold"> Copywriting</span> e 
          <span className="text-green-accent font-bold"> Funil de Vendas</span>
        </p>

        <div className="flex justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-green-accent to-teal-accent text-white px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            QUERO VENDER MUITO MAIS!
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-accent mb-2">+500</div>
            <div className="text-gray-300">Alunos Transformados</div>
          </div>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-teal-accent mb-2">97%</div>
            <div className="text-gray-300">Taxa de Satisfação</div>
          </div>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-secondary mb-2">24h</div>
            <div className="text-gray-300">Suporte Garantido</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
