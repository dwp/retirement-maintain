/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()


  if (document.getElementById('location-autocomplete')) {
    openregisterLocationPicker({
      selectElement: document.getElementById('location-autocomplete')
    })
  }
})

// Add number input polyfill
// For options and data attributes, see number-input.js
GOVUK.numberInput.init()
