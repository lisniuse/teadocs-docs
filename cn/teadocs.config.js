'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "",
        description: "",
        version: "",
        dir: "",
        outDir: "../build/cn",
        staticDir: ""
    }, 
    theme: {
        dir: "", 
        title: "",
        headHtml: "",
        footHtml: "",
        isMinify: true,
        rootPath: "/en/"
    },
    nav: {
        tree: "./tree"
    }
}