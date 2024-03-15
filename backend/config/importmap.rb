# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "daisyui" # @4.7.3
pin "buffer" # @2.0.1
pin "camelcase-css" # @2.0.1
pin "css-selector-tokenizer" # @0.8.0
pin "cssesc" # @3.0.0
pin "culori/require", to: "culori--require.js" # @3.3.0
pin "fastparse" # @1.1.2
pin "fs" # @2.0.1
pin "nanoid/non-secure", to: "nanoid--non-secure.js" # @3.3.7
pin "path" # @2.0.1
pin "picocolors" # @1.0.0
pin "postcss" # @8.4.35
pin "postcss-js" # @4.0.1
pin "process" # @2.0.1
pin "source-map-js" # @1.0.2
pin "url" # @2.0.1
