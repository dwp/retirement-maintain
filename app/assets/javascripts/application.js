/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

// Add number input polyfill
// For options and data attributes, see number-input.js
// moved this inside function
  window.GOVUK.numberInput.init();

  if (document.getElementById('location-autocomplete')) {
    openregisterLocationPicker({
      selectElement: document.getElementById('location-autocomplete')
    })
  }
})

function nextPageBasedOnSelection($radioObject) {
  console.log("hello")
    if (nextPageRoutes) {
      for (let index = 0; index < Object.keys(nextPageRoutes).length; index++) {
        var checkboxValue = $radioObject.val()
        if (nextPageRoutes[checkboxValue] != undefined) {
          var nextPageField = null
          if ($('#next-page').length) {
            nextPageField = $('#next-page')
          } else {
            nextPageField = $('<input type="hidden" id="next-page" name="next-page">')
            $('form').append(nextPageField)
          }
          nextPageField.val(nextPageRoutes[checkboxValue])
          console.log('Next page destination has been set as "' + nextPageRoutes[checkboxValue] + '"')
          break
        } else {
          $('#next-page').remove()
        }
      }
    }
  
  }
  
  $(document).ready(function () {
  
    window.GOVUKFrontend.initAll()
  
    try { 
      $('input[type=radio]:checked').each(function() {
        nextPageBasedOnSelection($(this))
      })
      enableInternalBranding()
    } catch (e) {}
  
  
  })
  
  
  $('input[type=radio]').on('change', function() {
    try { 
      $('input[type=radio]:checked').each(function() {
        nextPageBasedOnSelection($(this))
      })
    } catch (e) {}
  }) 