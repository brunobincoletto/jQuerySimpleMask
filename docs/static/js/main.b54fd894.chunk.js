(this.webpackJsonppage=this.webpackJsonppage||[]).push([[0],{19:function(e,n,t){e.exports=t(32)},24:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(15),c=t.n(l),o=(t(24),t(10)),u=(t(25),t(26),t(34)),m=t(35),p=t(18),i=t(36),s=t(5),f=t(6),k=t(7),E=t(8),d=t(33),h=t(37),C=(t(27),function(e){Object(E.a)(t,e);var n=Object(k.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"jumbotron"},r.a.createElement("h1",null,"jQuerySimpleMask"),r.a.createElement("p",null,"Simple and fast number input masks"),r.a.createElement("p",null,r.a.createElement(h.a,{href:"https://github.com/DevUtils/jQuerySimpleMask/archive/master.zip",variant:"primary"},"Download")))}}]),t}(r.a.Component)),I=function(e){Object(E.a)(t,e);var n=Object(k.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(i.a.Group,{controlId:this.props.controlId},r.a.createElement(i.a.Label,null,this.props.caption),r.a.createElement(i.a.Control,{type:"text",placeholder:this.props.caption})))}}]),t}(r.a.Component);t(31);function $(){var e=Object(o.a)(["$(document).ready\n(\n  function()\n  {\n    $('#frCep' ).simpleMask( { 'mask': '#####-###'                          , 'nextInput': $('#frDtel') } );\n    $('#frDtel').simpleMask( { 'mask': ['(##) ####-####', '(##) #####-####'], 'nextInput': $('#frTel' ) } );\n    $('#frTel' ).simpleMask( { 'mask': ['####-####', '#####-####']          , 'nextInput': $('#frData') } );\n    $('#frData').simpleMask( { 'mask': '##/##/####'                         , 'nextInput': $('#frCpf' ) } );\n    $('#frCpf' ).simpleMask( { 'mask': '###.###.###-##'                     , 'nextInput': $('#frCnpj') } );\n    $('#frCnpj').simpleMask( { 'mask': '##.###.###/####-##' } );\n\n  $('#frCallback').simpleMask\n  (\n    {\n      'mask'       : '#####',\n      'nextInput'  : true,\n      'onComplete' : function(element)\n      {\n        console.log('onComplete', element);\n      }\n    }\n  );\n);"]);return $=function(){return e},e}function b(){var e=Object(o.a)(["$(document).ready\n(\n  function()\n  {\n    $('#frCep' ).simpleMask( { 'mask': 'cep'     , 'nextInput': true } );\n    $('#frDtel').simpleMask( { 'mask': 'ddd-tel9', 'nextInput': true } );\n    $('#frTel' ).simpleMask( { 'mask': 'tel9'    , 'nextInput': true } );\n    $('#frData').simpleMask( { 'mask': 'data'    , 'nextInput': true } );\n    $('#frCpf' ).simpleMask( { 'mask': 'cpf'     , 'nextInput': true } );\n    $('#frCnpj').simpleMask( { 'mask': 'cnpj'    , 'nextInput': true } );\n  }\n);"]);return b=function(){return e},e}var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(I,{controlId:"frCep",caption:"CEP"}),r.a.createElement(I,{controlId:"frDtel",caption:"(DDD) Telefone"})),r.a.createElement(m.a,null,r.a.createElement(I,{controlId:"frTel",caption:"Telefone"}),r.a.createElement(I,{controlId:"frData",caption:"Data"})),r.a.createElement(m.a,null,r.a.createElement(I,{controlId:"frCpf",caption:"CPF"}),r.a.createElement(I,{controlId:"frCnpj",caption:"CNPJ"})),r.a.createElement(m.a,null,r.a.createElement(I,{controlId:"frCallback",caption:"With Callback"}),r.a.createElement(I,{controlId:"frNone",caption:"Without Mask"}))))),r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement("h3",null,"Helper Mode"),r.a.createElement("pre",null,String.raw(b()))),r.a.createElement(p.a,null,r.a.createElement("h3",null,"Custom Mode"),r.a.createElement("pre",null,String.raw($()))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b54fd894.chunk.js.map