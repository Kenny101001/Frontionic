import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.FootBall.app',
  appName: 'FootBall',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
