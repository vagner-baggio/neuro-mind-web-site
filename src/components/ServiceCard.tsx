
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300 group">
      <CardHeader className="text-center pb-4">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-600 text-center leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
