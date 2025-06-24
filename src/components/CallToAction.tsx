

const CallToAction = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/0LDTPaj', '_blank');
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-purple-dark to-black flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ÚLTIMA CHANCE!
          </h2>
          <p className="text-2xl text-purple-secondary mb-4 font-bold">
            🔥 OFERTA ESPECIAL POR TEMPO LIMITADO 🔥
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Não perca a oportunidade de transformar sua vida com o curso mais completo de marketing digital do Brasil!
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-primary/30 to-green-accent/30 p-8 rounded-3xl backdrop-blur-sm border-2 border-green-accent/50 mb-8">
          <div className="mb-6">
            <div className="text-center mb-4">
              <span className="text-2xl text-gray-400 line-through">De R$ 97,00</span>
            </div>
            <div className="text-center">
              <span className="text-5xl md:text-7xl font-bold text-green-accent animate-pulse">
                R$ 29,99
              </span>
            </div>
            <div className="text-xl text-white mt-2">
              💥 DESCONTO DE 70% 💥
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-white">
              <span className="text-green-accent mr-2">✅</span>
              Acesso vitalício ao curso completo
            </div>
            <div className="flex items-center justify-center text-white">
              <span className="text-green-accent mr-2">✅</span>
              Mais de 20 horas de conteúdo exclusivo
            </div>
            <div className="flex items-center justify-center text-white">
              <span className="text-green-accent mr-2">✅</span>
              Suporte direto com especialistas
            </div>
            <div className="flex items-center justify-center text-white">
              <span className="text-green-accent mr-2">✅</span>
              Certificado de conclusão
            </div>
            <div className="flex items-center justify-center text-white">
              <span className="text-green-accent mr-2">✅</span>
              Garantia de 7 dias ou seu dinheiro de volta
            </div>
          </div>

          <button
            onClick={handleCTAClick}
            className="relative bg-gradient-to-r from-green-accent to-teal-accent text-white px-12 py-6 rounded-2xl text-2xl md:text-3xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-white/20 w-full max-w-md mx-auto block animate-pulse"
          >
            🚀 QUERO ACESSAR O CURSO 🚀
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                APENAS HOJE!
              </span>
            </div>
          </button>

          <div className="mt-6 text-sm text-gray-300">
            🔒 Pagamento 100% seguro • Acesso imediato após a compra
          </div>
        </div>

        <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-6">
          <div className="text-red-400 font-bold text-lg mb-2">
            ⚠️ ATENÇÃO: VAGAS LIMITADAS!
          </div>
          <div className="text-white">
            Restam apenas <span className="font-bold text-red-400">23 vagas</span> com este desconto especial.
            <br />
            Após esgotar, o preço volta para R$ 197,00!
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl text-white font-bold mb-4">
            💎 BÔNUS EXCLUSIVOS PARA QUEM COMPRAR HOJE:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-primary/20 p-6 rounded-xl border border-purple-secondary/30">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-white font-bold">Templates de Landing Page</div>
              <div className="text-gray-300 text-sm">Valor: R$ 97,00</div>
            </div>
            <div className="bg-teal-accent/20 p-6 rounded-xl border border-teal-accent/30">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-white font-bold">Planilha de Métricas</div>
              <div className="text-gray-300 text-sm">Valor: R$ 67,00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

