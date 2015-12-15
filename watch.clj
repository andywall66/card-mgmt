(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'card-mgmt.core
   :output-to "out/main.js"})