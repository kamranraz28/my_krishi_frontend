export default {
  load() {
    // Load CSS dynamically
    const existingCss = document.querySelector('link[href="/asset/css/style.css"]');
    if (!existingCss) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/asset/css/style.css";
      document.head.appendChild(link);
    }

    // Load JS files dynamically
    const scripts = [
      "/asset/js/vendor-all.min.js",
      "/asset/js/plugins/bootstrap.min.js",
      "/asset/js/pcoded.min.js",
      "/asset/js/plugins/apexcharts.min.js",
      "/asset/js/pages/dashboard-main.js",
    ];

    scripts.forEach((src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
      }
    });
  },

  unload() {
    // Remove CSS
    const css = document.querySelector('link[href="/asset/css/style.css"]');
    if (css) css.remove();

    // Remove JS
    const scripts = [
      "/asset/js/vendor-all.min.js",
      "/asset/js/plugins/bootstrap.min.js",
      "/asset/js/pcoded.min.js",
      "/asset/js/plugins/apexcharts.min.js",
      "/asset/js/pages/dashboard-main.js",
    ];

    scripts.forEach((src) => {
      const script = document.querySelector(`script[src="${src}"]`);
      if (script) script.remove();
    });
  },
};
