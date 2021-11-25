class ConfigService {
  constructor() {
    this.config = {};
  }

  async loadConfig() {
    // const response = await axios.get(`${vueConfig.publicPath}static/config.json`);
    this.config = {
      "apiUrl": process.env.VUE_APP_API_URL,
      "format": {
        "timeZone": "Australia/Melbourne",
        "dateTime": "YYYY-MM-DD HH:mm:ss",
        "pickerDateTime": "yyyy-MM-dd HH:mm"
      }
    }
  }

  set(key, value) {
    this.config[key] = value;
  }

  get(key) {
    return this.config[key];
  }
}

export default new ConfigService();
