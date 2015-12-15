(ns card-mgmt.core
  (:require
    [rum.core :as rum]))

(enable-console-print!)
;(println "Card management!")

(rum/defc label [n text]
  [:.label (repeat n text)])

(rum/mount (label 5 "abc") js/document.body)