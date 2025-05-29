import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProgramCard from "./ProgramCard";
import LocationMap from "./LocationMap";
import { ArrowRight, Award, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-amber-50">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&q=80"
            alt="Yoga background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-amber-900/40 z-10" />

        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-900 mb-4">
                Discover Inner Peace with Yogashree Sanjib Das
              </h1>
              <p className="text-xl md:text-2xl text-amber-800 mb-8">
                Experience the transformative power of authentic yoga practices,
                including our signature Dance Yoga, guided by a gold medalist
                instructor.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-full text-lg"
                  asChild
                >
                  <Link to="/register">
                    Register for Classes{" "}
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-800 hover:bg-amber-100 px-8 py-6 rounded-full text-lg"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center font-semibold text-amber-900 mb-4">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Gold Medalist
              </h3>
              <p className="text-amber-800">
                Yogashree Sanjib Das is a gold medalist in yoga asana
                competitions, recognized for his perfect form and technique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                1000+ Students
              </h3>
              <p className="text-amber-800">
                Over a thousand students have transformed their lives through
                our yoga programs across multiple centers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Acclaimed Method
              </h3>
              <p className="text-amber-800">
                Our unique Dance Yoga method has been featured in national
                publications and wellness conferences.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-amber-600 text-amber-800 hover:bg-amber-100"
            >
              View All Achievements
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center font-semibold text-amber-900 mb-4">
              Our Yoga Programs
            </h2>
            <p className="text-center text-amber-800 max-w-2xl mx-auto mb-6">
              Discover a variety of yoga styles tailored to meet your wellness
              goals, from traditional Hatha to our signature Dance Yoga.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Hatha Yoga"
              description="Traditional yoga focusing on physical postures and breathing techniques to bring peace to the mind and body."
              image="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
              benefits={[
                "Improves flexibility",
                "Builds strength",
                "Reduces stress",
              ]}
              schedule={["Mon & Wed: 7-8 AM", "Tue & Thu: 6-7 PM"]}
            />
            <ProgramCard
              title="Dance Yoga"
              description="Our signature program combining fluid dance movements with yoga postures for a joyful and energetic practice."
              image="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80"
              benefits={[
                "Enhances coordination",
                "Boosts mood",
                "Improves cardiovascular health",
              ]}
              schedule={["Sat: 8-10 AM", "Wed & Fri: 5-6:30 PM"]}
            />
            <ProgramCard
              title="Meditation"
              description="Guided meditation sessions to calm the mind, reduce anxiety, and develop greater awareness and inner peace."
              image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
              benefits={[
                "Reduces anxiety",
                "Improves focus",
                "Promotes emotional health",
              ]}
              schedule={["Sun: 9-11 AM", "Tue & Thu: 7-8 PM"]}
            />
            <ProgramCard
              title="Pranayama"
              description="Breath control techniques that promote vital energy flow, mental clarity, and spiritual growth."
              image="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80"
              benefits={[
                "Increases lung capacity",
                "Balances energy",
                "Calms nervous system",
              ]}
              schedule={["Mon & Fri: 6-7 AM", "Wed: 6-7 PM"]}
            />
            <ProgramCard
              title="Ashtanga Yoga"
              description="A dynamic and physically demanding practice that synchronizes breath with a progressive series of postures."
              image="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
              benefits={[
                "Builds core strength",
                "Detoxifies body",
                "Improves stamina",
              ]}
              schedule={["Tue & Thu: 6-7:30 AM", "Sat: 4-5:30 PM"]}
            />
            <ProgramCard
              title="Yoga for Seniors"
              description="Gentle yoga practices adapted for older adults to improve mobility, balance, and overall wellbeing."
              image="https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?w=800&q=80"
              benefits={[
                "Improves balance",
                "Reduces joint pain",
                "Enhances mobility",
              ]}
              schedule={["Mon & Wed: 10-11 AM", "Fri: 11-12 PM"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center font-semibold text-amber-900 mb-4">
              Student Testimonials
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anita"
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Anita Sharma</h4>
                  <p className="text-sm text-slate-600">Dance Yoga Student</p>
                </div>
              </div>
              <p className="text-slate-700 italic">
                "Dance Yoga with Yogashree Sanjib Das has transformed not just
                my body but my entire outlook on life. The joy I feel during and
                after each session is indescribable."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Raj"
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Raj Patel</h4>
                  <p className="text-sm text-slate-600">
                    Meditation Practitioner
                  </p>
                </div>
              </div>
              <p className="text-slate-700 italic">
                "After just three months of meditation classes, my anxiety has
                decreased significantly. Sanjib's guidance has been instrumental
                in my mental health journey."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Priya Gupta</h4>
                  <p className="text-sm text-slate-600">
                    Ashtanga Yoga Student
                  </p>
                </div>
              </div>
              <p className="text-slate-700 italic">
                "The Ashtanga program has completely transformed my physical
                strength. I've never felt more powerful and centered. The
                instructors are knowledgeable and supportive."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center font-semibold text-amber-900 mb-4">
              Our Locations
            </h2>
            <p className="text-center text-amber-800 max-w-2xl mx-auto mb-6">
              Visit us at one of our convenient locations in New Delhi and
              Mumbai. Each center offers a full schedule of classes in a serene
              environment.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>
          </motion.div>

          <div className="h-[600px]">
            <LocationMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Begin Your Yoga Journey Today
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Transform your mind, body, and spirit with Yogashree Sanjib Das's
              expert guidance. Join our community of practitioners and discover
              the life-changing benefits of yoga.
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-amber-100 px-8 py-6 rounded-full text-lg"
              asChild
            >
              <Link to="/register">
                Register for Classes <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4">
                Yoga Shakti Institute
              </h3>
              <p className="mb-4">
                Transforming lives through authentic yoga practices since 2005.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Programs</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Hatha Yoga
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Dance Yoga
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Meditation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pranayama
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ashtanga Yoga
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Contact Us</h4>
              <address className="not-italic">
                <p className="mb-2">123 Serenity Lane</p>
                <p className="mb-2">Harmony Gardens, New Delhi</p>
                <p className="mb-2">Phone: +91 98765 43210</p>
                <p className="mb-2">Email: info@yogashakti.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Yoga Shakti Institute. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
