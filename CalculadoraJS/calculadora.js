function suma() {
    var myelem1 = $('#numero1').val();
    var myelem2 = $('#numero2').val();

var url = "http://localhost:8085/suma/?elemento1=" + myelem1 + "&elemento2=" + myelem2;

$.getJSON(url,
    function(json) {
       console.log(json);
       $('#resultado').html('<h1>' + json.resultado + '</h1>');
    }
  );
}

function resta() {
    var myelem1 = $('#numero1').val();
    var myelem2 = $('#numero2').val();

var url = "http://localhost:8085/resta/?elemento1=" + myelem1 + "&elemento2=" + myelem2;

$.getJSON(url,
    function(json) {
       console.log(json);
       $('#resultado').html('<h1>' + json.resultado + '</h1>');
    }
  );
}

function multi() {
    var myelem1 = $('#numero1').val();
    var myelem2 = $('#numero2').val();

var url = "http://localhost:8085/multi/?elemento1=" + myelem1 + "&elemento2=" + myelem2;

$.getJSON(url,
    function(json) {
       console.log(json);
       $('#resultado').html('<h1>' + json.resultado + '</h1>');
    }
  );
}

function divid() {
    var myelem1 = $('#numero1').val();
    var myelem2 = $('#numero2').val();

var url = "http://localhost:8085/divid/?elemento1=" + myelem1 + "&elemento2=" + myelem2;

$.getJSON(url,
    function(json) {
       console.log(json);
       $('#resultado').html('<h1>' + json.resultado + '</h1>');
    }
  );
}

function potencia() {
    var myelem1 = $('#numero1').val();
    var myelem2 = $('#numero2').val();

var url = "http://localhost:8085/potencia/?elemento1=" + myelem1 + "&elemento2=" + myelem2;

$.getJSON(url,
    function(json) {
       console.log(json);
       $('#resultado').html('<h1>' + json.resultado + '</h1>');
    }
  );
}