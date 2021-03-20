module.exports = {

    toFar : function (c){
        return (c * 9/5) + 32;
    },
  
    toCelsius : function (f){
        return (f - 32) * 5/9;
    },

    areaTriangulo : function (a, b) {
        let resultado = (a * b) / 2;
        return resultado;
    },

    toLowerCase : function (cadena){
        let cad = cadena.toLowerCase();
        return cad;
    },

    redondear : function (x){
        let res = Math.round(x);
        return res;
    }
}