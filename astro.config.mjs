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
    // pour ne pas polluer l index et signaler clairement les URLs cibles a Google.
    sitemap({
      filter: (page) =>
        !page.includes('/contact/merci') && !page.includes('/404'),
      // i18n FR uniquement (signal hreflang explicite)
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' },
      },
      // Frequence et priorite par defaut (Google ignore mais bon signal)
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
