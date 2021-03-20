const assert = require('chai').assert;
const app = require('../201610673');

describe('Pruebas - 201610673', function ()
{

    describe('Conversión de Celcius a Fahrenheit', function (){
        it('Convertir 50C a Faherenheit, debería retornar 122', function(){
         var cs = app.toFar(50);
         assert.equal(cs, 122);
        });
    });
    

    describe('Conversión de Fahrenheit a Celcius', function (){
        it('Convertir 122F a Celcius,debería retornar 50', function(){
         var fh = app.toCelsius(122);
         assert.equal(fh, 50);
        });
    });

    describe('Calcular el área de un triángulo', function (){
        it('El área de un triangulo con altura = 3 y base = 4, debería retornar 6 ', function(){
         var area = app.areaTriangulo(3,4)
         assert.equal(area, 6);
        });
    });

    describe('Convierte toda la cadena a minusculas', function (){
        it('Debería retornar una cadena en minusculas', function(){
         var cad = app.toLowerCase('Hola Mundo');
         assert.equal(cad, 'hola mundo');
        });
    });

    describe('Redondea al entero más cercano', function (){
        it('Debería retornar 51', function(){
         var res = app.redondear(50.85);
         assert.equal(res, 51);
        });
    });

});