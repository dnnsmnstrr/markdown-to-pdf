var markdownpdf = require("markdown-pdf")
fs = require("fs")

// File I/O
const TITLE = "markdown"
const INPUT_PATH = `./in/${TITLE}.md`
const OUTPUT_PATH = `./out/${TITLE}.pdf`

// Config
const CSS_NAME = "custom"
const isLandscape = true
var options = {
    paperOrientation: isLandscape ? 'landscape' : 'portrait',
    cssPath: `./css/${CSS_NAME}.css`,
    remarkable: {
        html: true,
        breaks: true,
        plugins: [ require('remarkable-emoji') ],
		    syntax: [ 'footnote', 'sup', 'sub' ]
    }
}

markdownpdf(options)
  .from(INPUT_PATH)
  .to(OUTPUT_PATH, function () { console.log("Done") })
