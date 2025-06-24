
const FunnelSection = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-purple-dark to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            FUNIL DE VENDAS
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transforme visitantes em clientes com funis que convertem
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-accent to-purple-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-primary/30 to-teal-accent/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-secondary/30 mb-6">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">ATRAÇÃO</h3>
              <p className="text-gray-300">
                Atraia leads qualificados com estratégias de tráfego pago e conteúdo irresistível
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-teal-accent/30 to-green-accent/30 p-8 rounded-2xl backdrop-blur-sm border border-teal-accent/30 mb-6">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-white mb-4">CONVERSÃO</h3>
              <p className="text-gray-300">
                Converta visitantes em clientes com landing pages otimizadas e copywriting persuasivo
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-green-accent/30 to-purple-primary/30 p-8 rounded-2xl backdrop-blur-sm border border-green-accent/30 mb-6">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">RETENÇÃO</h3>
              <p className="text-gray-300">
                Mantenha clientes engajados e aumente o valor de vida com estratégias de relacionamento
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-primary/20 to-teal-accent/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-secondary/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              APRENDA A CONSTRUIR FUNIS QUE VENDEM AUTOMATICAMENTE
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <div className="flex items-start mb-4">
                  <div className="w-6 h-6 bg-green-accent rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Estrutura de Funis:</strong> Como mapear a jornada do cliente do primeiro contato até a venda
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="w-6 h-6 bg-green-accent rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Automação de Vendas:</strong> Configure sequências que vendem enquanto você dorme
                  </p>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-start mb-4">
                  <div className="w-6 h-6 bg-green-accent rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Métricas e Otimização:</strong> Acompanhe e melhore continuamente seus resultados
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="w-6 h-6 bg-green-accent rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Escalonamento:</strong> Como multiplicar seus resultados sem aumentar o trabalho
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnelSection;
