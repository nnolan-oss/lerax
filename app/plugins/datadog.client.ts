import { datadogRum } from "@datadog/browser-rum";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const applicationId = config.public.ddApplicationId;
  const clientToken = config.public.ddClientToken;

  if (!applicationId || !clientToken) return;

  datadogRum.init({
    applicationId,
    clientToken,
    site: "us5.datadoghq.com",
    service: "lerax.nolan.uz",
    env: process.env.NODE_ENV,
    version: "1.0.0",
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackBfcacheViews: true,
    defaultPrivacyLevel: "mask-user-input",
  });

  datadogRum.startSessionReplayRecording();
});
