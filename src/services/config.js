const production = {
  api: ""
};

const dev = {
  api: ""
};
const test = {
  api: "6"
};
module.exports = (env => {
  let config;
  switch (env) {
    case "development": {
      config = dev;
      break;
    }
    case "test": {
      config = test;
      break;
    }
    case "debug": {
      config = production;
      break;
    }
    case "production": {
      config = production;
      break;
    }
    default: {
      config = dev;
      break;
    }
  }
  return config;
})(process.env.VUE_APP_ENV);
