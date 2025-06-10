import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "./WhatsAppButton";
export const ContactSection = () => {
  return <section id="contato" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-800">
          Agende sua consulta
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Estou aqui para ajudar. Entre em contato para agendar sua consulta ou esclarecer dúvidas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-4xl mx-auto">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-slate-200 hover:border-blue-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-800">WhatsApp</h3>
              <p className="text-slate-600 mb-4">(48) 99829-4338</p>
              <WhatsAppButton phoneNumber="5548998294338" message="Olá Dr. Jackson! Gostaria de agendar uma consulta." text="Chamar no WhatsApp" size="sm" />
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-slate-200 hover:border-blue-300">
            <CardContent className="pt-6 px-[9px]">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-800">E-mail</h3>
              <p className="text-slate-600 mb-4 mx-0 my-[26px] py-[6px] px-0">jacksoncosta.neuropsi@gmailcom</p>
              <a href="mailto:contato@drjacksoncosta.com" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Enviar E-mail
              </a>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-slate-200 hover:border-blue-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-800">Localização</h3>
              <p className="text-slate-600 mb-4">Florianópolis Centro/Coqueiros – SC</p>
              <a href="https://maps.google.com/search/Florianópolis+Centro+Coqueiros" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Ver no Mapa
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Mapa embed (placeholder) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-200 rounded-lg h-64 lg:h-80 flex items-center justify-center border border-slate-300">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-600 font-medium">Mapa interativo do consultório</p>
              <p className="text-sm text-slate-500">Florianópolis Centro/Coqueiros – SC</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};