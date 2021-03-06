/* bald *\ \* build script */

!async function (services) {
    function resetOutputDirectory() {
        return services.removeDirectory("bin") &&
            services.ensureDirectory("bin/framework");
    }
    function createBootModule() {
        return services.concatFiles("bin/framework/bald.js", [,
            "src/framework/bald.prelude.js",
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/systemjs/dist/system-production.js",
            "src/framework/bald.loader.js"
        ], "utf8");
    }
    function copyBoilerplateFiles() {
        return services.copyFile("src/index.html", "bin/index.html") &&
            services.copyFile("src/favicon.ico", "bin/favicon.ico") &&
            services.copyFile("src/bald.app.js", "bin/bald.app.js") &&
            services.copyFile("src/bald.main.js", "bin/bald.main.js") &&
            services.copyFile("src/bald.electron.js", "bin/bald.electron.js") &&
            services.copyFile("src/appicon.png", "bin/appicon.png") &&
            services.copyFile("src/package.json", "bin/package.json");
    }
    function rollupCoreModule() {
        return services.rollupBundle({
            input: "src/framework/bald.core.js",
            plugins: [
                require("rollup-plugin-uglify-es")({})
            ],
            treeshake: false
        }, {
            file: "bin/framework/bald.core.js",
            format: "iife",
            name: "bald"
        });
    }
    if (resetOutputDirectory() && createBootModule() && copyBoilerplateFiles() && await rollupCoreModule()) {
        console.log("[32mDONE[39m");
    } else {
        console.log("[31mERROR[39m");
    }
}(require("./build.services.js"));
