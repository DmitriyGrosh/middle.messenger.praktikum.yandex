module.extends = {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "color-hex-case": "lower",
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true,
  },
  ignoreFiles: [
    "build/*"
  ],
}
