 var a = 10
 var b = 20
 var c = null

 document.write('O valor da variavel e:' + a + '<br />')
 document.write('O valor da variavel e:' + b + '<br />')
 document.write('O valor da variavel e:' + c + '<br />')

 c = a
 a = b
 b = c
 c = null


 document.write('<hr>')

 document.write('O valor da variavel A agora e: ' + a + '<br / > ')
 document.write('O valor da variavel B agora e: ' + b + '<br / > ')
 document.write('O valor da variavel C agora e: ' + c + '<br / > ')