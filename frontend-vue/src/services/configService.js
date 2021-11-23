class ConfigService {
  constructor() {
    this.config = {};
  }

  loadConfig() {
    // axios.get(`${vueConfig.publicPath}static/config.json`).then(response => {
    this.config = {
      "apiUrl": process.env.VUE_APP_API_URL,
      "format": {
        "dateTime": "YYYY-MM-DD HH:MM:SS"
      }
    };
    // });
  }

  set(key, value) {
    this.config[key] = value;
  }

  get(key) {
    return this.config[key];
  }
}

export default new ConfigService();
