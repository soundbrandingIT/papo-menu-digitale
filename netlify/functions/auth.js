const { NetlifyCMSOauthProvider } = require("netlify-cms-oauth-provider");

const provider = new NetlifyCMSOauthProvider({
  config: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authUrl: "https://github.com/login/oauth/authorize",
      tokenUrl: "https://github.com/login/oauth/access_token",
      apiUrl: "https://api.github.com",
      scope: "repo",
    },
  },
});

exports.handler = async (event, context) => provider.handle(event, context);
