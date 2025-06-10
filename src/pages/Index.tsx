
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const services = [
    {
      title: "Avaliação Neuropsicológica",
      description: "Avaliação completa das funções cognitivas para diagnóstico preciso de transtornos do neurodesenvolvimento.",
      icon: "🧠"
    },
    {
      title: "Intervenção em TDAH",
      description: "Tratamento especializado para crianças e adolescentes com Transtorno do Déficit de Atenção e Hiperatividade.",
      icon: "🎯"
    },
    {
      title: "Reabilitação Cognitiva",
      description: "Programas personalizados para desenvolvimento e fortalecimento de habilidades cognitivas específicas.",
      icon: "🔄"
    },
    {
      title: "Orientação Familiar",
      description: "Suporte e orientação para famílias no manejo de transtornos do neurodesenvolvimento.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Consultoria Escolar",
      description: "Assessoria para instituições de ensino na inclusão e adaptação pedagógica.",
      icon: "🏫"
    },
    {
      title: "Laudos e Relatórios",
      description: "Elaboração de documentos técnicos para fins educacionais, clínicos e legais.",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center text-6xl lg:text-8xl">
                👨‍⚕️
              </div>
            </div>
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
                Dr. Jackson Costa
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-2">
                Neuropsicólogo
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Especialista em Transtornos do Neurodesenvolvimento
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton 
                  phoneNumber="5511999999999"
                  message="Olá Dr. Jackson! Gostaria de agendar uma consulta."
                  size="lg"
                />
                <Button variant="outline" size="lg" asChild>
                  <a href="#sobre" className="inline-flex items-center gap-2">
                    Saiba Mais
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre Mim */}
      <section id="sobre" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Sobre Mim
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Dr Jackson Costa é graduado em psicologia, especialista em avaliação psicológica, 
                Neuropsicologia, reabilitação neuropsicológica, Terapia Cognitivo-Comportamental e 
                Análise do Comportamento Aplicada ao Transtorno do Espectro Autista (TEA), mestre em 
                transtornos do neurodesenvolvimento, mestrando em transtorno do espectro do autismo pela ISEP Espanha.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Atende pacientes de todas as idades, com um olhar atento e acolhedor para a neurodiversidade, 
                tanto na infância quanto na vida adulta. Com expertise e vivência pessoal como TEA nível 1, 
                dedica-se a promover o desenvolvimento saudável de crianças neurodiversas, garantindo que tenham 
                acesso aos apoios necessários para seu crescimento.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                É também palestrante, compartilhando seu conhecimento sobre neurodiversidade e orientando pais, 
                professores e instituições de ensino sobre a importância de um olhar inclusivo e informado em 
                creches, escolas e universidades em todo o país.
              </p>
              <p className="text-lg leading-relaxed">
                Seu trabalho é pautado por uma abordagem profunda e personalizada, focada no entendimento do 
                funcionamento cognitivo de cada paciente, visando ao autoconhecimento, tratamento eficaz e 
                aceitação. Natural de Florianópolis, é casado e pai de três filhos, que inspiram diariamente 
                sua dedicação à causa da neurodiversidade. Atende em Florianópolis Centro/Coqueiros e on-line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Ofereço uma gama completa de serviços especializados em neuropsicologia, 
            com foco em transtornos do neurodesenvolvimento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <WhatsAppButton 
              phoneNumber="5511999999999"
              message="Olá Dr. Jackson! Gostaria de saber mais sobre seus serviços."
              text="Agende sua Consulta"
            />
          </div>
        </div>
      </section>

      {/* Contato */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton 
          phoneNumber="5511999999999"
          message="Olá Dr. Jackson! Gostaria de conversar."
          variant="floating"
        />
      </div>
    </div>
  );
};

export default Index;
