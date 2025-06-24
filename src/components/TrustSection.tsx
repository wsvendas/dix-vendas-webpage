
const TrustSection = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-purple-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            POR QUE CONFIAR NA DIX VENDE?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Somos especialistas em transformar negócios através do marketing digital
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-accent to-teal-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-accent/20 to-teal-accent/20 p-6 rounded-2xl backdrop-blur-sm border border-green-accent/30">
              <div className="text-4xl mb-4">🏆</div>
              <div className="text-2xl font-bold text-green-accent mb-2">+500</div>
              <div className="text-gray-300">Alunos Transformados</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-secondary/20 to-teal-accent/20 p-6 rounded-2xl backdrop-blur-sm border border-purple-secondary/30">
              <div className="text-4xl mb-4">⭐</div>
              <div className="text-2xl font-bold text-purple-secondary mb-2">4.9/5</div>
              <div className="text-gray-300">Avaliação dos Alunos</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-teal-accent/20 to-green-accent/20 p-6 rounded-2xl backdrop-blur-sm border border-teal-accent/30">
              <div className="text-4xl mb-4">💰</div>
              <div className="text-2xl font-bold text-teal-accent mb-2">R$ 2M+</div>
              <div className="text-gray-300">Em Vendas Geradas</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-green-accent/20 to-purple-secondary/20 p-6 rounded-2xl backdrop-blur-sm border border-green-accent/30">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-2xl font-bold text-green-accent mb-2">97%</div>
              <div className="text-gray-300">Taxa de Satisfação</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-primary/20 to-green-accent/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-secondary/30 mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              NOSSA METODOLOGIA COMPROVADA
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📚</div>
                <h4 className="text-xl font-bold text-white mb-2">CONTEÚDO ATUALIZADO</h4>
                <p className="text-gray-300">
                  Estratégias testadas e aprovadas pelos maiores especialistas do mercado
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h4 className="text-xl font-bold text-white mb-2">SUPORTE COMPLETO</h4>
                <p className="text-gray-300">
                  Acompanhamento direto com nossa equipe de especialistas
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-white mb-2">RESULTADOS GARANTIDOS</h4>
                <p className="text-gray-300">
                  Aplicando nossa metodologia, você verá resultados em até 30 dias
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-accent/20 to-teal-accent/20 p-8 rounded-2xl backdrop-blur-sm border border-green-accent/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              🔒 GARANTIA DE 7 DIAS
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicação.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="text-sm text-gray-300">Pagamento Seguro</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📞</div>
                <div className="text-sm text-gray-300">Suporte 24h</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-sm text-gray-300">Acesso Imediato</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
