import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  schedule: string[];
  onLearnMore?: () => void;
}

const ProgramCard = ({
  title = "Hatha Yoga",
  description = "Traditional yoga focusing on physical postures and breathing techniques to bring peace to the mind and body.",
  image = "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
  benefits = ["Improves flexibility", "Builds strength", "Reduces stress"],
  schedule = ["Mon & Wed: 7-8 AM", "Tue & Thu: 6-7 PM"],
  onLearnMore = () => console.log("Learn more clicked"),
}: ProgramCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 border-slate-200 bg-white">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">
            {title}
          </CardTitle>
          <CardDescription className="text-slate-600">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-700 mb-2">
              Benefits:
            </h4>
            <div className="flex flex-wrap gap-2">
              {benefits.map((benefit, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-slate-100 text-slate-700"
                >
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">
              Schedule:
            </h4>
            <ul className="text-sm text-slate-600 space-y-1">
              {schedule.map((time, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                  {time}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            onClick={onLearnMore}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProgramCard;
