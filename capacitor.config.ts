import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'memory-leak-investigation',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
