export default {
  // Spécifie le répertoire racine de votre application
  // roots: ['<rootDir>/src'],

  // Indique à Jest d'utiliser ts-jest pour les fichiers TypeScript
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Indique à Jest d'ignorer certains répertoires, comme node_modules
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Spécifie les extensions de fichiers que Jest doit traiter
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Configuration pour les fichiers .tsx dans votre projet
  // moduleNameMapper: {
  //   '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  // },
};