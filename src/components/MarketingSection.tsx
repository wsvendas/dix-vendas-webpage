
const MarketingSection = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-purple-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            MARKETING DIGITAL
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Domine as estratégias que realmente funcionam no mundo digital
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-secondary to-green-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-purple-secondary mb-6">
              TRÁFEGO PAGO QUE CONVERTE
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-accent rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Facebook e Instagram Ads:</strong> Aprenda a criar campanhas que geram resultados reais, não apenas visualizações
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-accent rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Google Ads:</strong> Domine as estratégias para aparecer no momento exato em que seu cliente procura
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-accent rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Otimização de Campanhas:</strong> Técnicas avançadas para diminuir o custo por conversão e aumentar o ROAS
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-primary/20 to-green-accent/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-secondary/30">
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-2xl font-bold text-white mb-4">RESULTADOS COMPROVADOS</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-accent">300%</div>
                  <div className="text-sm text-gray-300">Aumento médio em conversões</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-accent">8x</div>
                  <div className="text-sm text-gray-300">ROAS médio dos alunos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-teal-accent/20 to-purple-secondary/20 p-8 rounded-2xl backdrop-blur-sm border border-teal-accent/30">
            <div className="text-center">
              <div className="text-5xl mb-4">✍️</div>
              <h4 className="text-2xl font-bold text-white mb-4">COPYWRITING MAGNÉTICO</h4>
              <p className="text-gray-300 mb-4">
                Descubra os gatilhos mentais que fazem seus clientes dizerem "SIM" instantaneamente
              </p>
              <div className="text-3xl font-bold text-teal-accent">+500%</div>
              <div className="text-sm text-gray-300">Aumento na taxa de conversão</div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-teal-accent mb-6">
              COPYWRITING PERSUASIVO
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Gatilhos Mentais:</strong> Aprenda os 15 gatilhos mais poderosos para influenciar decisões de compra
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Headlines Irresistíveis:</strong> Fórmulas testadas para criar títulos que capturam atenção instantaneamente
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">CTA Poderosos:</strong> Como criar chamadas para ação que convertem visitantes em clientes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl text-white font-bold mb-4">
            PARE DE PERDER VENDAS POR NÃO SABER COMO COMUNICAR SEU VALOR!
          </p>
          <button className="bg-gradient-to-r from-purple-secondary to-teal-accent text-white px-10 py-5 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            QUERO DOMINAR O MARKETING DIGITAL!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
