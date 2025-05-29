import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Calendar, Navigation } from "lucide-react";
import { motion } from "framer-motion";

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  coordinates: { lat: number; lng: number };
  classes: Array<{
    day: string;
    times: string[];
  }>;
}

interface LocationMapProps {
  locations?: Location[];
}

const LocationMap = ({ locations = defaultLocations }: LocationMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    locations[0],
  );

  return (
    <div className="w-full h-full bg-slate-50 p-4 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        {/* Map Container */}
        <div className="relative w-full lg:w-2/3 h-[400px] lg:h-full rounded-lg overflow-hidden border border-slate-200 bg-white">
          {/* Placeholder for actual map integration */}
          <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80"
              alt="Map placeholder"
              className="w-full h-full object-cover opacity-50"
            />

            {/* Map markers */}
            {locations.map((location) => (
              <motion.div
                key={location.id}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${selectedLocation?.id === location.id ? "z-20" : "z-10"}`}
                style={{
                  left: `${30 + location.id === "1" ? 30 : 70}%`,
                  top: `${location.id === "1" ? 40 : 60}%`,
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`p-2 rounded-full ${selectedLocation?.id === location.id ? "bg-primary text-white" : "bg-white text-primary"}`}
                  >
                    <MapPin size={24} />
                  </div>
                  {selectedLocation?.id === location.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 bg-white px-2 py-1 rounded-md shadow-md text-xs font-medium"
                    >
                      {location.name}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location Details */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Yoga Centers
          </h3>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            {locations.map((location) => (
              <Card
                key={location.id}
                className={`cursor-pointer transition-all ${selectedLocation?.id === location.id ? "border-primary shadow-md" : "border-slate-200"}`}
                onClick={() => setSelectedLocation(location)}
              >
                <CardContent className="p-4">
                  <h4 className="text-lg font-medium mb-2">{location.name}</h4>
                  <div className="flex items-start gap-2 mb-2 text-sm text-slate-600">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
                    <Phone size={16} className="flex-shrink-0" />
                    <span>{location.phone}</span>
                  </div>

                  {selectedLocation?.id === location.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 pt-3 border-t border-slate-200"
                    >
                      <div className="flex items-start gap-2 mb-2 text-sm">
                        <Calendar size={16} className="mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium mb-1">Class Schedule:</p>
                          <ul className="space-y-1">
                            {location.classes.map((classItem, idx) => (
                              <li key={idx} className="text-slate-600">
                                <span className="font-medium">
                                  {classItem.day}:
                                </span>{" "}
                                {classItem.times.join(", ")}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Navigation size={16} className="mr-1" /> Get
                          Directions
                        </Button>
                        <Button size="sm" className="flex-1">
                          Register for Classes
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultLocations: Location[] = [
  {
    id: "1",
    name: "Yoga Shakti Center - Main Branch",
    address: "123 Serenity Lane, Harmony Gardens, New Delhi, 110001",
    phone: "+91 98765 43210",
    coordinates: { lat: 28.6139, lng: 77.209 },
    classes: [
      {
        day: "Monday & Wednesday",
        times: ["6:00 AM - 7:30 AM", "5:30 PM - 7:00 PM"],
      },
      {
        day: "Tuesday & Thursday",
        times: ["7:00 AM - 8:30 AM", "6:00 PM - 7:30 PM"],
      },
      { day: "Saturday", times: ["8:00 AM - 10:00 AM (Dance Yoga Special)"] },
    ],
  },
  {
    id: "2",
    name: "Yoga Shakti Center - Riverside",
    address: "45 Peaceful Road, Riverside Colony, Mumbai, 400001",
    phone: "+91 98765 12345",
    coordinates: { lat: 19.076, lng: 72.8777 },
    classes: [
      {
        day: "Monday & Friday",
        times: ["6:30 AM - 8:00 AM", "6:00 PM - 7:30 PM"],
      },
      { day: "Wednesday", times: ["7:00 AM - 8:30 AM", "5:00 PM - 6:30 PM"] },
      { day: "Sunday", times: ["9:00 AM - 11:00 AM (Meditation Special)"] },
    ],
  },
];

export default LocationMap;
