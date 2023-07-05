module.exports = {
  apps: [
    {
      name: 'agenda-job',
      script: 'agenda.js',
      watch: false,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
