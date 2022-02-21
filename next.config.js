const nextConfig = () => {
  const config = {
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    // Eslint
    eslint: {
      ignoreDuringBuilds: true, // Don't run lint during the build
    },
  };
  return config;
};

module.exports = nextConfig;
