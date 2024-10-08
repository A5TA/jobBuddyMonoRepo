import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'testApp',
  webDir: '../dist/test-app',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
