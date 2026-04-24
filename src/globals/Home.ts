import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    { name: 'pillOne', type: 'upload', relationTo: 'media', required: true },
    { name: 'pillTwo', type: 'upload', relationTo: 'media', required: true },
  ],
}
