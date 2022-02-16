const nextConfig = () => {
  const config = {
    // Eslint
    eslint: {
      ignoreDuringBuilds: true, // Don't run lint during the build
    },
  };
  return config;
};

module.exports = nextConfig;
