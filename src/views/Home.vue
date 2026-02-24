<template>
  <div class="min-h-screen bg-brand-light font-['Nunito'] text-brand-text flex flex-col overflow-x-hidden">
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b-[3px] border-brand-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/imgs/practica-ingles-ia-logo.png" alt="PracticAIngles Logo"
            class="w-12 h-12 rounded-xl object-cover border-2 border-brand-secondary shadow-sm" />
          <span class="text-2xl font-black text-brand-primary tracking-tight">PracticAIngles</span>
        </div>
        <div>
          <a href="#descargar"
            class="hidden sm:flex gamified-button text-sm px-6 py-2 shadow-[0_4px_0_0_#cab9df] hover:shadow-[0_2px_0_0_#cab9df] hover:translate-y-0.5 active:shadow-none active:translate-y-1">
            Quiero probarlo
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
      <!-- Decoración de fondo -->
      <div class="absolute -z-10 bg-brand-secondary/30 w-96 h-96 rounded-full blur-3xl -top-20 -left-20"></div>

      <div class="space-y-8 relative z-10">
        <div
          class="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary font-bold px-4 py-1.5 rounded-full ring-2 ring-brand-primary/20">
          ⭐ <span class="text-sm">¡Aprende inglés más rápido con IA!</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-black text-brand-text leading-tight">
          La inteligencia artificial es tu <span class="text-brand-primary bg-clip-text">cerebro</span>.
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 font-medium">
          La app es tu plantilla de juego. Domina el inglés y español gratis, creando tus propios packs y practicando
          con modelos IA.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <a href="#descargar"
            class="gamified-button text-lg shadow-[0_6px_0_0_#cab9df] hover:shadow-[0_4px_0_0_#cab9df] hover:translate-y-0.5 active:shadow-none active:translate-y-1.5 justify-center w-full sm:w-auto">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24C13.61,7.7,10.39,7.7,7.53,8.91L5.65,5.67C5.46,5.38,5.07,5.29,4.78,5.47C4.49,5.65,4.38,6.04,4.53,6.33l1.86,3.22C3.22,11.39,1.15,14.53,1,18.23h22C22.85,14.53,20.78,11.39,17.6,9.48z M6.76,15.63c-0.63,0-1.14-0.5-1.14-1.12c0-0.61,0.51-1.12,1.14-1.12s1.14,0.5,1.14,1.12C7.9,15.12,7.39,15.63,6.76,15.63z M17.24,15.63c-0.63,0-1.14-0.5-1.14-1.12c0-0.61,0.51-1.12,1.14-1.12s1.14,0.5,1.14,1.12C18.38,15.12,17.87,15.63,17.24,15.63z" />
            </svg>
            Disponible en Android
          </a>
          <div
            class="flex items-center justify-center sm:justify-start gap-2 text-brand-text font-bold text-sm bg-white/50 px-4 py-2 rounded-full border-2 border-brand-secondary">
            🍏 iOS próximamente
          </div>
        </div>
      </div>

      <!-- Hero Images (Floating Screenshots) -->
      <div class="relative h-[500px] sm:h-[600px] flex justify-center items-center">
        <!-- Center Phone -->
        <img src="/imgs/aprender-ingles-completar-oraciones.png" alt="App Preview 1"
          class="absolute z-30 w-52 sm:w-64 rounded-[2rem] shadow-2xl border-4 border-gray-800 rotate-0 transition-transform duration-500 hover:scale-105" />
        <!-- Left Phone -->
        <img src="/imgs/aprender-ingles-ia-app-principal.png" alt="App Preview 2"
          class="absolute z-20 w-48 sm:w-56 rounded-[2rem] shadow-xl border-4 border-gray-800 -rotate-12 -translate-x-20 sm:-translate-x-32 transition-transform duration-500 hover:rotate-[-6deg] hover:scale-105 opacity-90" />
        <!-- Right Phone -->
        <img src="/imgs/aprender-ingles-vocabulario-ia.png" alt="App Preview 3"
          class="absolute z-10 w-44 sm:w-52 rounded-[2rem] shadow-lg border-4 border-gray-800 rotate-12 translate-x-20 sm:translate-x-32 transition-transform duration-500 hover:rotate-[6deg] hover:scale-105 opacity-80" />
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-white border-y-[4px] border-brand-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-4xl font-black text-brand-text">¿Por qué usar PracticAIngles?</h2>
          <p class="text-lg text-gray-500 max-w-2xl mx-auto font-semibold">Descubre todas las características diseñadas
            para potenciar tu aprendizaje sin costo y a tu propio ritmo.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="gamified-card space-y-4">
            <div class="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl">
              🤖
            </div>
            <h3 class="text-2xl font-bold">Impulsado por IA</h3>
            <p class="text-gray-600 font-medium leading-relaxed">Ponte a prueba con oraciones, palabras, traducciones y
              pronunciación generadas en tiempo real por el increíble cerebro de la IA.</p>
          </div>
          <!-- Feature 2 -->
          <div class="gamified-card space-y-4">
            <div class="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center text-3xl">
              ⚡
            </div>
            <h3 class="text-2xl font-bold">Variedad Modular</h3>
            <p class="text-gray-600 font-medium leading-relaxed">Diferentes modos como "Selección", "Completar" y
              "Pronunciación" aseguran que entrenes tu inglés desde cualquier ángulo metodológico.</p>
          </div>
          <!-- Feature 3 -->
          <div class="gamified-card space-y-4">
            <div class="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-3xl">
              📶
            </div>
            <h3 class="text-2xl font-bold">Modo Offline</h3>
            <p class="text-gray-600 font-medium leading-relaxed">¿No tienes internet? No hay excusas. Dispondrás de
              palabras y oraciones locales para que nunca detengas tu progreso y constancia.</p>
          </div>
          <!-- Feature 4 -->
          <div class="gamified-card space-y-4">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl">
              📦
            </div>
            <h3 class="text-2xl font-bold">Crea tus Packs</h3>
            <p class="text-gray-600 font-medium leading-relaxed">Estudia lo que te gusta. Crea agrupaciones
              personalizadas de vocabulario y oraciones, perfectos para tu área de estudio o el trabajo diario.</p>
          </div>
          <!-- Feature 5 -->
          <div class="gamified-card space-y-4">
            <div class="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-3xl">
              🔄
            </div>
            <h3 class="text-2xl font-bold">Repaso Inteligente</h3>
            <p class="text-gray-600 font-medium leading-relaxed">Podrás volver a revisar el historial, ver todo lo que
              practicaste y retomar ese aprendizaje antes de que se olvide. Repasa palabras y oraciones clave.</p>
          </div>
          <!-- Feature 6 -->
          <div
            class="gamified-card space-y-4 relative overflow-hidden bg-gradient-to-br from-brand-primary to-purple-800 text-white border-0">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div class="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-3xl">
              🎁
            </div>
            <h3 class="text-2xl font-bold text-white">¡100% Gratis!</h3>
            <p class="text-white/90 font-medium leading-relaxed">Descarga, usa la IA integrada y estudia sin paywalls ni
              límites que te frustren. La educación de calidad tiene que ser accesible para todos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Carousel/Gallery Slider -->
    <section class="py-20 bg-brand-light overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-black text-brand-text">Echa un vistazo por dentro</h2>
          <p class="text-lg text-gray-500 font-semibold mt-4">Un diseño pensado para mantenerte motivado.</p>
        </div>
      </div>

      <!-- Auto-Scrolling Track CSS based -->
      <div class="relative w-full overflow-hidden py-12 flex -skew-y-2 translate-y-4 scale-110">
        <!-- The Track container holding everything inline -->
        <div class="flex w-max animate-marquee hover:pause items-center">
          <!-- First set -->
          <div class="flex min-w-max gap-8 px-4 items-center">
            <img src="/imgs/aprender-ingles-ia-app-principal.png" alt="Pantalla principal de PracticAIngles"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/practicar-ingles-oraciones-ia.png" alt="Práctica de oraciones en inglés"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/aprender-ingles-completar-oraciones.png"
              alt="Completar oraciones con inteligencia artificial"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/practica-ingles-modulos-aprendizaje.png" alt="Diferentes módulos de aprendizaje"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/aprender-ingles-vocabulario-ia.png" alt="Aprender vocabulario nuevo en inglés"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/practicar-pronunciacion-ingles-ia.png" alt="Módulo de pronunciación"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
          </div>
          <!-- Duplicated set -->
          <div class="flex min-w-max gap-8 px-4 items-center">
            <img src="/imgs/aprender-ingles-ia-app-principal.png" alt="Pantalla principal de PracticAIngles (duplicado)"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/practicar-ingles-oraciones-ia.png" alt="Práctica de oraciones en inglés (duplicado)"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/aprender-ingles-completar-oraciones.png"
              alt="Completar oraciones con inteligencia artificial (duplicado)"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/practica-ingles-modulos-aprendizaje.png" alt="Diferentes módulos de aprendizaje (duplicado)"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/aprender-ingles-vocabulario-ia.png" alt="Aprender vocabulario nuevo en inglés (duplicado)"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
            <img src="/imgs/practicar-pronunciacion-ingles-ia.png" alt="Módulo de pronunciación (duplicado)"
              class="w-64 rounded-3xl shadow-xl border-4 border-gray-800 object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section id="descargar" class="py-24 bg-white relative">
      <div class="absolute inset-0 z-0 bg-brand-primary/5 pattern-dots-md opacity-50"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 z-10 relative text-center">
        <div
          class="bg-gradient-to-r from-brand-primary to-[#9b3bcc] rounded-[3rem] p-12 sm:p-20 shadow-[0_20px_0_0_#cab9df] border-4 border-[#CAB9DF] text-white">
          <h2 class="text-4xl sm:text-5xl font-black mb-6">¿Listo para dominar el inglés?</h2>
          <p class="text-xl font-medium text-white/90 mb-10 max-w-2xl mx-auto">Únete a cientos de estudiantes y empieza
            a practicar en nuestra app totalmente gratuita impulsada por IA. No necesitas pagos mensuales ni límites de
            aprendizaje.</p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#"
              class="gamified-button bg-white text-brand-primary text-xl px-12 py-5 shadow-[0_6px_0_0_#cab9df] hover:shadow-[0_4px_0_0_#cab9df] hover:translate-y-0.5 active:shadow-none active:translate-y-1.5 w-full sm:w-auto">
              Descargar para Android
            </a>
            <div class="text-white/80 font-bold bg-black/20 px-6 py-4 rounded-full border-2 border-white/20">
              Pronto en App Store
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-light py-10 border-t-4 border-brand-secondary text-center">
      <div class="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <div class="flex items-center gap-2">
          <img src="/imgs/practica-ingles-ia-logo.png" class="w-8 h-8 rounded-lg shadow-sm" />
          <span class="text-xl font-black text-brand-text">PracticAIngles</span>
        </div>
        <p class="text-gray-500 font-semibold">&copy; 2026 PracticAIngles. Todos los derechos reservados.</p>
        <router-link to="/politica-privacidad" class="text-brand-primary hover:underline font-bold">
          Política de Privacidad
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Add the smooth marquee animation for the gallery scroll */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.hover\:pause:hover {
  animation-play-state: paused;
}
</style>
