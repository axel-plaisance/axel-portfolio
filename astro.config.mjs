// Configuration Astro
// Doc : https://docs.astro.build/fr/reference/configuration-reference/
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL canonique du site en production (utilisée par le sitemap et les meta)
  site: 'https://axelplaisance.fr',
  integrations: [
    // Tailwind CSS — intégration officielle
    tailwind(),
    // Sitemap XML automatique généré au build
    // Phase 5 — @seo : exclusion des pages utilitaires (post-formulaire, 404)
    // pour ne pas polluer l'index et signaler clairement les URLs cibles à Google.
    sitemap(),
  ],
});