import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
const Index = () => {
  const services = [{
    title: "Avaliação Neuropsicológica",
    description: "TDAH, TEA, SDAH e avaliações pré-cirúrgicas. Diagnóstico preciso para orientar o melhor tratamento.",
    icon: "🧠"
  }, {
    title: "Orientação a Pais e Escolas",
    description: "Suporte especializado para famílias e instituições de ensino sobre neurodiversidade e inclusão.",
    icon: "👨‍👩‍👧‍👦"
  }, {
    title: "Palestras",
    description: "Compartilho conhecimento sobre neurodiversidade em creches, escolas e universidades por todo o país.",
    icon: "🎤"
  }];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-shrink-0">
              
            </div>
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-3">Dr. Jackson Costa
CRP12/27848</h1>
              <h2 className="text-xl lg:text-2xl text-blue-700 font-semibold mb-2">
                Neuropsicólogo | Especialista em Transtornos do Neurodesenvolvimento
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl">Avaliação neuropsicológica para crianças e adultos em Florianópolis e online</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton phoneNumber="5548998294338" message="Olá Dr. Jackson! Gostaria de agendar uma consulta." text="Agende sua consulta via WhatsApp" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre Mim */}
      <section id="sobre" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-800">
              Sobre Mim
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-lg leading-relaxed mb-6 text-justify">Dr Jackson Costa é graduado em psicologia, especialista em Avaliação Psicológica, Neuropsicologia, reabilitação neuropsicológica, Terapia Cognitivo-Comportamental e Análise do Comportamento Aplicada ao Transtorno do Espectro Autista (TEA), mestre em transtornos do neurodesenvolvimento, mestrando em transtorno do espectro do autismo pela ISEP Espanha.</p>
              <p className="text-lg leading-relaxed mb-6 text-justify">Atende pacientes de todas as idades, com um olhar atento e acolhedor para a neurodiversidade, tanto na infância quanto na vida adulta. Com expertise e vivência pessoal como TEA nível 1, dedica-se a promover o desenvolvimento saudável de crianças neurodiversas, garantindo que tenham acesso aos apoios necessários para seu crescimento. Faz Avaliação Psicológica para procedimentos Pré Cirúrgicos como Bariátrica e Contracepção Definitiva, entre outros.</p>
              <p className="text-lg leading-relaxed mb-6 text-justify">
                É também palestrante, compartilhando seu conhecimento sobre neurodiversidade e orientando pais, 
                professores e instituições de ensino sobre a importância de um olhar inclusivo e informado em 
                creches, escolas e universidades em todo o país.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-justify">
                Seu trabalho é pautado por uma abordagem profunda e personalizada, focada no entendimento do 
                funcionamento cognitivo de cada paciente, visando ao autoconhecimento, tratamento eficaz e 
                aceitação. Natural de Florianópolis, é casado e pai de três filhos, que inspiram diariamente 
                sua dedicação à causa da neurodiversidade.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg font-medium text-blue-800">
                  📍 Atendimento presencial (Florianópolis Centro/Coqueiros) e online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-blue-200">
              <span className="text-blue-700 font-semibold">🏆 Especialista em Neurodesenvolvimento</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-blue-200">
              <span className="text-blue-700 font-semibold">🧩 Especialista em Transtorno do Espectro Autista</span>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-800">
            Como posso ajudar você?
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Oferecemos cuidado especializado e personalizado para cada necessidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />)}
          </div>
          <div className="text-center mt-12">
            <WhatsAppButton phoneNumber="5548998294338" message="Olá Dr. Jackson! Gostaria de saber mais sobre seus serviços." text="Fale diretamente comigo no WhatsApp" size="lg" />
          </div>
        </div>
      </section>

      {/* Contato */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton phoneNumber="5548998294338" message="Olá Dr. Jackson! Gostaria de conversar." variant="floating" />
      </div>
    </div>;
};
export default Index;