
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Santos",
      message: "Cara, o curso Estica Vendas mudou minha vida! Antes eu vendia 2-3 produtos por mês, agora estou faturando R$ 15.000 mensais com marketing digital! 🚀",
      time: "14:32",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Oliveira",
      message: "Incrível como o copywriting que aprendi no curso fez diferença! Minha taxa de conversão aumentou 300%. Obrigado DIX VENDE! 💰",
      time: "09:15",
      avatar: "👨‍💻"
    },
    {
      name: "Ana Beatriz",
      message: "Pessoal, sério mesmo! O funil de vendas que montei seguindo o curso já me trouxe mais de R$ 50.000 em vendas! Esse método funciona! 🎯",
      time: "16:48",
      avatar: "👩‍🚀"
    },
    {
      name: "Roberto Silva",
      message: "Estava gastando uma fortuna com tráfego pago sem resultado. Depois do Estica Vendas, meu ROAS subiu para 8x! Recomendo demais! 📈",
      time: "11:22",
      avatar: "👨‍💼"
    },
    {
      name: "Juliana Costa",
      message: "Gente, que curso incrível! Em 30 dias aplicando as técnicas, saí de zero para R$ 8.000 de faturamento. Muito obrigada DIX VENDE! ❤️",
      time: "13:57",
      avatar: "👩‍🎨"
    },
    {
      name: "Pedro Henrique",
      message: "O módulo de copywriting é sensacional! Minhas landing pages agora convertem 5x mais. Valeu cada centavo investido no curso! 🔥",
      time: "08:33",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            DEPOIMENTOS REAIS
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Veja o que nossos alunos estão dizendo sobre o curso
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-accent to-teal-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#075E54] rounded-lg p-4 transform hover:scale-105 transition-all duration-300 shadow-lg border border-green-accent/20"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-2xl mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-300 text-sm">online</div>
                </div>
                <div className="ml-auto text-gray-400 text-xs">{testimonial.time}</div>
              </div>
              
              <div className="bg-[#DCF8C6] rounded-lg p-3 relative">
                <p className="text-gray-800 text-sm leading-relaxed">{testimonial.message}</p>
                <div className="absolute bottom-1 right-2 text-gray-500 text-xs">✓✓</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-green-accent font-bold mb-4">
            +500 ALUNOS JÁ TRANSFORMARAM SUAS VENDAS!
          </p>
          <button className="bg-gradient-to-r from-green-accent to-teal-accent text-white px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            EU TAMBÉM QUERO VENDER MAIS!
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
