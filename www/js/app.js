$(function(){
    $('button').click(function(){
        
        
        cordova.plugins.barcodeScanner.scan(
              function (result) {
                  alert("We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);
              }, 
              function (error) {
                  alert("Scanning failed: " + error);
              },
              {
                  
                 
                  "prompt" : "Barcode dentro del area", // supported on Android only
                  
              }
        );
    })
    
})