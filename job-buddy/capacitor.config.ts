import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'jobBuddy',
  webDir: '../dist/job-buddy',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
