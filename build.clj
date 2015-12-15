(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main 'card-mgmt.core
   :output-to "out/main.js"})