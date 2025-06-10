
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200">
      <CardHeader className="text-center pb-4">
        <div className="text-4xl mb-3">{icon}</div>
        <CardTitle className="text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-center leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
