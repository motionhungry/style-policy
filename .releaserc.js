module.exports = {
  branches: [
    'master',
    {
      name: 'next',
      channel: 'next',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        // eslint-disable-next-line no-template-curly-in-string
        message: 'release: ${nextRelease.version}',
      },
    ],
  ],
};
