function billingFunction(){
    if (document.getElementById('same').checked){
      var x = document.getElementById('shippingName').value
      document.getElementById('billingName').value = x
      var y = document.getElementById('shippingZip').value
      document.getElementById('billingZip').value = y
    }
    else {
      document.getElementById('billingName').value = ''
      document.getElementById('billingZip').value = ''
    }
}