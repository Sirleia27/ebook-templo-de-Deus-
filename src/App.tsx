import { motion } from "motion/react";
import heroImage from "./assets/images/regenerated_image_1779214869356.jpg";
import contentImage from "./assets/images/regenerated_image_1779214870151.jpg";
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  CloudSun, 
  Crown, 
  Flame, 
  Heart, 
  Lock, 
  MessageSquare, 
  ShieldCheck, 
  Sparkle, 
  Star, 
  Zap 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section id="hero" className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.08)_0%,transparent_60%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-linear-to-b from-transparent via-gold-500/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-900/30 border border-gold-500/20 text-gold-400 text-xs font-medium mb-6 uppercase tracking-widest">
                <Sparkle className="w-3 h-3" />
                Despertar de la Conciencia
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold leading-tight mb-6">
                El Templo Secreto de Jesús Dentro de Ti
              </h1>
              <p className="font-serif italic text-xl md:text-2xl text-stone-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                “Las 7 Claves Gnósticas Ocultas para Activar la Conciencia Crística y Entrar al Reino Interior”
              </p>
              <p className="text-lg text-stone-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Descubre las 7 Claves Gnósticas Ocultas para despertar la conciencia crística, abrir el templo interior y entrar al Reino de Dios dentro de ti.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <a 
                  href="https://pay.hotmart.com/M105906314F?off=hgxauai4" 
                  id="cta-hero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gold-600 hover:bg-gold-500 text-mystic-950 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 glow-gold flex items-center gap-3 overflow-hidden shadow-xl"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Quiero Acceder Ahora
                  <ChevronRight className="w-5 h-5" />
                </a>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-gold-400 font-bold text-sm flex items-center gap-1">
                    <Zap className="w-4 h-4 fill-current" />
                    Últimas unidades con descuento disponibles
                  </span>
                  <p className="text-stone-500 text-xs">Acceso inmediato en PDF</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10 w-full max-w-sm mx-auto lg:mx-0 bg-mystic-900 rounded-2xl border border-gold-500/30 overflow-hidden shadow-2xl-gold group">
                <img 
                  src={heroImage} 
                  alt="El Templo Secreto de Jesús Dentro de Ti Ebook" 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-mystic-950/40 to-transparent pointer-events-none" />
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gold-600/10 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section id="problem" className="py-24 bg-mystic-900/50 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-100 mb-8 italic">
              ¿Vives buscando a Dios fuera de ti?
            </h2>
            <div className="space-y-6 text-stone-400 text-lg leading-relaxed">
              <p>
                Pasamos la vida buscando respuestas en señales externas, templos de piedra y la aprobación de otros. Pero a pesar de todo el esfuerzo, el vacío sigue ahí.
              </p>
              <p>
                Sentimos una extraña confusión espiritual, una distancia que parece insalvable entre nosotros y la presencia divina. Sentimos que falta algo... algo que los antiguos sabían, mas el mundo moderno olvidó.
              </p>
              <p className="text-gold-200/80 font-medium">
                La verdad es que el Reino no está lejos. Está más cerca que tu propia respiración.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section id="solution" className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gold-500/5 rounded-full animate-pulse" />
                <div className="absolute inset-8 border border-gold-500/20 rounded-full rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Flame className="w-32 h-32 text-gold-500 drop-shadow-[0_0_15px_rgba(212,160,23,0.5)]" />
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <motion.div {...fadeIn}>
                <h2 className="font-display text-3xl md:text-4xl text-gradient-gold mb-6">
                  El Camino hacia el Corazón de Luz
                </h2>
                <p className="text-stone-300 text-lg leading-relaxed mb-8">
                  Este libro no es solo teoría; es un mapa para una jornada interior profunda. Aprenderás a reactivar el Templo que existe dentro de tu pecho, silenciando al ego para que la Conciencia Crística pueda hablar.
                </p>
                <ul className="space-y-4">
                  {[
                    "Activa la luz oculta en tu corazón",
                    "Aprende el arte de la verdadera oración interior",
                    "Vence las ilusiones del ego que te mantienen cautivo",
                    "Encuentra el Reino del que habló el Maestro"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-stone-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section id="benefits" className="py-24 bg-linear-to-b from-mystic-900/50 to-mystic-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-gradient-gold mb-4">Lo que vas a descubrir</h2>
            <p className="text-stone-500 italic font-serif">Las puertas se abrirán para quien se atreva a llamar...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "El significado real", desc: "El verdadero significado del templo interior oculto a los ojos del mundo.", icon: Crown },
              { title: "7 Claves Gnósticas", desc: "Las 7 Llaves para desbloquear estados superiores de conciencia.", icon: Lock },
              { title: "Conciencia Crística", desc: "Cómo activar la presencia del Cristo interno en tu día a día.", icon: Flame },
              { title: "Oración Interior", desc: "Técnicas contemplativas para entrar en el silencio absoluto.", icon: MessageSquare },
              { title: "Vencer el Ego", desc: "Cómo identificar y disolver las sombras e ilusiones del yo falso.", icon: ShieldCheck },
              { title: "Cuerpo Espiritual", desc: "El despertar de tu verdadera naturaleza no física.", icon: BookOpen }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                className="p-8 rounded-xl bg-mystic-900 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-display text-xl text-gold-200 mb-3">{benefit.title}</h3>
                <p className="text-stone-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
            <motion.div 
               className="p-8 rounded-xl bg-linear-to-br from-gold-900/20 to-transparent border border-gold-500/20 lg:col-span-3 text-center"
               whileHover={{ scale: 1.01 }}
            >
              <h3 className="font-display text-xl text-gold-200 mb-3">Vivir el Reino en lo Cotidiano</h3>
              <p className="text-stone-300 max-w-2xl mx-auto">
                No es solo para monjes o místicos en cuevas. Aprenderás a manifestar la paz del Reino Interior en medio del caos del mundo moderno.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Offer Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,160,23,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto bg-mystic-900 border-2 border-gold-500/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <div className="inline-block px-4 py-2 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-sm font-bold mb-8 animate-pulse">
              OFERTA ESPECIAL POR TIEMPO LIMITADO
            </div>
            <h2 className="font-serif italic text-3xl text-stone-200 mb-8">
              Inicia hoy tu transformación hacia la Luz Interior
            </h2>
            
            <div className="flex flex-col items-center mb-10">
              <span className="text-stone-500 line-through text-2xl mb-2">€29,90</span>
              <div className="flex items-start">
                <span className="text-gold-500 text-3xl font-bold mt-2">€</span>
                <span className="text-gold-500 text-7xl font-display tracking-tighter">13,90</span>
              </div>
              <p className="text-gold-400/80 text-sm mt-4 font-medium uppercase tracking-widest">
                Últimas unidades liberadas con descuento
              </p>
            </div>

            <a 
              href="https://pay.hotmart.com/M105906314F?off=hgxauai4" 
              id="cta-pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex px-12 py-5 bg-gold-600 hover:bg-gold-500 text-mystic-950 text-xl font-bold rounded-xl transition-all duration-300 glow-gold items-center justify-center gap-3 shadow-xl transform hover:scale-105 mb-8"
            >
              Acceder al Libro Ahora
              <ChevronRight className="w-6 h-6" />
            </a>

            <div className="flex items-center justify-center gap-6 text-stone-400 text-sm">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-gold-500" /> Pago Seguro</span>
              <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-gold-500" /> Acceso Inmediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bonus/Content Section */}
      <section id="content" className="py-24 bg-mystic-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <motion.div {...fadeIn}>
                <h2 className="font-display text-3xl text-gradient-gold mb-6">Contenido Completo y Práctico</h2>
                <div className="space-y-6 text-stone-400">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20">
                      <Star className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-stone-200 font-medium mb-1">20 Capítulos Espirituales</h4>
                      <p className="text-sm">Una profundización gradual desde lo externo hacia lo más sagrado de tu ser.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20">
                      <CloudSun className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-stone-200 font-medium mb-1">Prácticas de Contemplación</h4>
                      <p className="text-sm">Al final de cada etapa, encontrarás ejercicios prácticos para aplicar el conocimiento.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20">
                      <BookOpen className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-stone-200 font-medium mb-1">Formato Digital PDF</h4>
                      <p className="text-sm">Recibirás acceso inmediato para leer en cualquier dispositivo (móvil, tablet o PC).</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 w-full flex justify-center">
               <div className="relative p-2 border border-gold-500/20 rounded-2xl bg-mystic-900/50">
                  <img src={contentImage} className="max-w-[280px] w-full h-auto rounded-lg shadow-2xl" alt="Mockup" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section id="testimonials" className="py-24 bg-mystic-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl text-gradient-gold mb-4">Lo que dicen otros buscadores</h2>
            <p className="text-stone-500 font-serif italic text-sm">Resonancias de almas que ya cruzaron el umbral</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Siempre busqué a Dios en los dogmas y los ritos externos, pero este libro me enseñó a mirar hacia adentro. He comprendido por fin qué es el Reino Interior.",
                author: "Ricardo M.",
                role: "Buscador espiritual"
              },
              {
                text: "Había algo que no cuadraba en mis oraciones hasta que leí el capítulo sobre el silencio. He sentido una profundidad que no conocía antes.",
                author: "Elena S.",
                role: "Estudiante de teología"
              },
              {
                text: "Trae muchísima claridad sobre temas que parecen complejos. Las claves gnósticas son directas y aplicables. Muy recomendado para reflexionar.",
                author: "Javier L.",
                role: "Meditador"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-mystic-950 border border-gold-500/5 relative">
                <Star className="w-8 h-8 text-gold-500/20 absolute top-6 right-6" />
                <p className="text-stone-400 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="text-gold-200 font-bold">{testimonial.author}</p>
                  <p className="text-stone-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Guarantee Section */}
      <section id="guarantee" className="py-20 border-y border-gold-500/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="w-32 h-32 shrink-0 p-4 border-2 border-gold-500/50 rounded-full flex items-center justify-center bg-gold-900/20">
              <ShieldCheck className="w-16 h-16 text-gold-500" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-gold-200 mb-4 tracking-tighter">Garantía de 7 Días de Satisfacción Espiritual</h3>
              <p className="text-stone-400 leading-relaxed">
                Tienes 7 días para conocer el contenido. Si sientes que este material no es para ti, puedes solicitar el reembolso dentro do plazo establecido. Queremos que tu inversión sea un paso seguro en tu camino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="footer" className="py-24 text-center relative overflow-hidden bg-mystic-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(212,160,23,0.05)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Heart className="w-12 h-12 text-gold-500 mx-auto mb-8 animate-pulse" />
            <h2 className="font-serif italic text-3xl md:text-4xl text-stone-100 mb-8 leading-tight">
              Si sientes que este mensaje llegó a ti por una razón, este puede ser el momento de abrir la puerta del templo interior.
            </h2>
            <p className="text-stone-500 mb-12 text-lg">
              No dejes para mañana el encuentro que tu alma anhela hoy.
            </p>
            
            <a 
              href="https://pay.hotmart.com/M105906314F?off=hgxauai4" 
              id="cta-final"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-10 py-5 bg-linear-to-r from-gold-700 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-mystic-950 text-xl font-bold rounded-full transition-all duration-300 glow-gold items-center gap-3 shadow-2xl transform hover:scale-105 active:scale-95"
            >
              Sí, Quiero Despertar el Reino Interior
              <ChevronRight className="w-6 h-6" />
            </a>

            <div className="mt-20 pt-8 border-t border-white/5 text-stone-600 text-xs">
              <p>© {new Date().getFullYear()} El Templo Secreto - El Camino de la Conciencia Crística.</p>
              <p className="mt-2">Reservados todos los derechos espirituales y editoriales.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
