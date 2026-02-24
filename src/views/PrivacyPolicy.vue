<template>
  <div class="min-h-screen bg-brand-light font-['Nunito'] text-brand-text flex flex-col">
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b-[3px] border-brand-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-3">
          <img src="/imgs/practica-ingles-ia-logo.png" alt="PracticAIngles Logo"
            class="w-12 h-12 rounded-xl object-cover border-2 border-brand-secondary shadow-sm" />
          <span class="text-2xl font-black text-brand-primary tracking-tight">PracticAIngles</span>
        </router-link>
      </div>
    </nav>

    <!-- Privacy Policy Content -->
    <main class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-4 border-brand-secondary">
        <h1 class="text-4xl font-black text-brand-primary mb-8">Política de Privacidad</h1>
        
        <div class="space-y-6 text-gray-700 leading-relaxed font-medium">
          <p>
            En <strong>PracticAIngles</strong>, nos tomamos muy en serio tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestra aplicación móvil.
          </p>

          <h2 class="text-2xl font-bold text-brand-text mt-8 mb-4">1. Información que Recopilamos</h2>
          <p>
            No recopilamos ni almacenamos datos personales confidenciales. La aplicación funciona principalmente de manera local y descentralizada.
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Datos de Progreso:</strong> Tu progreso de aprendizaje, packs de vocabulario y oraciones creadas se almacenan localmente en tu dispositivo.</li>
            <li><strong>Interacciones con IA:</strong> Las consultas enviadas a los modelos de inteligencia artificial se procesan en tiempo real a través de las APIs (como Gemini o OpenAI) que hayas configurado. No almacenamos estas conversaciones en nuestros servidores.</li>
          </ul>

          <h2 class="text-2xl font-bold text-brand-text mt-8 mb-4">2. Uso de la Información</h2>
          <p>
            Utilizamos la información recopilada únicamente para:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Mejorar tu experiencia de aprendizaje dentro de la aplicación.</li>
            <li>Generar contenido personalizado (palabras, oraciones, pronunciación) mediante inteligencia artificial.</li>
          </ul>

          <h2 class="text-2xl font-bold text-brand-text mt-8 mb-4">3. Servicios de Terceros</h2>
          <p>
            Nuestra aplicación puede integrar servicios de terceros (como las APIs de inteligencia artificial). El uso de tu información por parte de estos servicios se rige por sus respectivas políticas de privacidad.
          </p>

          <h2 class="text-2xl font-bold text-brand-text mt-8 mb-4">4. Privacidad de los Menores</h2>
          <p>
            Nuestra aplicación es apta para todas las edades, pero no recopilamos conscientemente información personal de menores de 13 años. Todo el progreso se almacena localmente y la conexión con la IA requiere configuración manual por parte del usuario.
          </p>

          <h2 class="text-2xl font-bold text-brand-text mt-8 mb-4">5. Seguridad de los Datos</h2>
          <p>
            Dado que la información se almacena localmente en tu dispositivo, la seguridad de la misma depende de las medidas de seguridad que tengas activadas en tu teléfono (PIN, huella dactilar, contraseña). Recomendamos usar métodos de bloqueo seguros y hacer copias de seguridad de tu dispositivo.
          </p>

          <h2 class="text-2xl font-bold text-brand-text mt-8 mb-4">6. Cambios en esta Política</h2>
          <p>
            Podemos actualizar nuestra Política de Privacidad ocasionalmente. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última modificación".
          </p>
          
          <p class="mt-8 text-sm text-gray-500">
            Última modificación: 24 de Febrero de 2026
          </p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-brand-light py-10 border-t-4 border-brand-secondary text-center mt-auto">
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
  name: 'PrivacyPolicy'
}
</script>
