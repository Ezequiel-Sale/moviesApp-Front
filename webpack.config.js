module.exports = {
    entry:{
        index:  "./scripts/index.js",
        films: "./scripts/form.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js"
    },
}