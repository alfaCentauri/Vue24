/* 
    Created on : 05/02/2019, 11:20:00 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
    js/app.js
 */
/**Componente asincrono.*/
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Pase la definición del componente a la resolución de devolución de llamada
    resolve({
      template: '<div><h1>Esto es una prueba asincrona</h1></div>'
    })
  }, 1000)
});
/**Instancia del vue**/
var vue = new Vue({
    el: '#app',
    data: {},
    methods: {},
    computed: {},
    template: '<div><async-example></async-example>Prueba asyncrona...</div>'
});

