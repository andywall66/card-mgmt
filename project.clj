(defproject card-mgmt "0.1"

  :dependencies
  [[org.clojure/clojure        "1.7.0"   :scope "provided"]
   [org.clojure/clojurescript  "1.7.170" :scope "provided"]
   [cljsjs/react "0.14.3-0"]
   [cljsjs/react-dom "0.14.3-1"]
   [sablono "0.4.0"]]

  :global-vars
  { *warn-on-reflection* true }

  :plugins [ [lein-cljsbuild "1.1.1"] ]

  :cljsbuild
  { :builds
    [
     { :id "none"
       :source-paths ["src"]
       :compiler
       { :main           card-mgmt.core
         :output-to      "out/main.js"
         :output-dir     "out/none"
         :asset-path     "out/none"
         :optimizations  :none
         :source-map     true
         :compiler-stats true
         :parallel-build true }}]})
