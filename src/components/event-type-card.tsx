import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface EventTypeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isFree: boolean;
}

const EventTypeCard: React.FC<EventTypeCardProps> = ({ icon, title, description, isFree }) => {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="flex justify-center">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <p className="font-semibold">
          {isFree ? (
            <span className="text-green-500">Gratuito</span>
          ) : (
            <span className="text-primary">Premium</span>
          )}
        </p>
      </CardContent>
    </Card>
  );
};

export default EventTypeCard;
