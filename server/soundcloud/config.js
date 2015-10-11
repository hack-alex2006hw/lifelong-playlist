ServiceConfiguration.configurations.upsert(
  { service: "soundcloud" },
  { $set: { clientId: "8b20d79eab46a0e8efb913c580489070",
          loginStyle: "popup",
    redirect_uri: 'https://lifelong.meteor.com/_oauth/soundcloud?close' } }
);
