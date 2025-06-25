
const ReferencesSection = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-purple-900 to-black relative overflow-hidden">
      {/* Efeitos neon de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-green-accent via-teal-accent to-purple-secondary bg-clip-text text-transparent">
              REFERÊNCIAS
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in delay-300">
            Inspiração dos maiores nomes do sucesso
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-accent to-teal-accent mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Primeira imagem do Leonardo DiCaprio com frase */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-accent to-teal-accent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-black/80 p-6 rounded-2xl backdrop-blur-sm border border-green-accent/50">
              <img
                src="/lovable-uploads/b3ca217d-30b3-49a8-84ba-07ed53bbd247.png"
                alt="Leonardo DiCaprio"
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-2xl"
              />
              <blockquote className="text-white text-lg md:text-xl font-bold italic text-center">
                "Já Fui Um Homem Rico, E Já Fui Um Homem Pobre E Escolho a Riqueza Toda Santa Vez."
              </blockquote>
              <div className="w-full h-1 bg-gradient-to-r from-green-accent to-teal-accent mt-6 rounded-full"></div>
            </div>
          </div>

          {/* Segunda imagem do Leonardo DiCaprio sem frase */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-secondary to-teal-accent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-black/80 p-6 rounded-2xl backdrop-blur-sm border border-purple-secondary/50">
              <img
                src="/lovable-uploads/774acfe8-2bee-4046-b3a8-781ffdcf52e8.png"
                alt="Leonardo DiCaprio Luxo"
                className="w-full h-64 object-cover rounded-lg shadow-2xl"
              />
              <div className="w-full h-1 bg-gradient-to-r from-purple-secondary to-teal-accent mt-6 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Imagens de Luxo */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-accent to-purple-secondary rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative bg-black/60 p-4 rounded-xl backdrop-blur-sm border border-green-accent/30">
              <img
                src="/lovable-uploads/c4e44d99-c950-42ba-9826-614e6e1260fa.png"
                alt="iPhone Luxo"
                className="w-full h-48 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-accent to-green-accent rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse delay-200"></div>
            <div className="relative bg-black/60 p-4 rounded-xl backdrop-blur-sm border border-teal-accent/30">
              <img
                src="/lovable-uploads/a548328e-926e-4ee0-b549-12c51b44194c.png"
                alt="iPhone Premium"
                className="w-full h-48 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-secondary to-teal-accent rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse delay-400"></div>
            <div className="relative bg-black/60 p-4 rounded-xl backdrop-blur-sm border border-purple-secondary/30">
              <img
                src="/lovable-uploads/b4afb2aa-9efb-4bea-946b-61b1602114f4.png"
                alt="Dinheiro Luxo"
                className="w-full h-48 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Call to Action para assistir o vídeo */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-accent via-teal-accent to-purple-secondary rounded-2xl blur opacity-75 animate-pulse"></div>
            <div className="relative bg-black/80 p-8 rounded-2xl backdrop-blur-sm border border-green-accent/50">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🎬 VEJA COMO ALCANÇAR ESSE NÍVEL DE SUCESSO
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Assista ao vídeo exclusivo e descubra os segredos dos milionários
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

export default ReferencesSection;
