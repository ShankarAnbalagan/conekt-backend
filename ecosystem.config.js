module.exports = {
  apps : [{
    name: 'conektapi',
    script: 'bin/www',
    instances: "max",
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
