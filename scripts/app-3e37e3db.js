"use strict";angular.module("vencontrodeBandas",["ngResource","ui.router","ui.bootstrap","ngSanitize"]).config(["$stateProvider","$urlRouterProvider",function(a,l){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}),l.otherwise("/")}]),angular.module("vencontrodeBandas").factory("ObrasService",["$resource",function(a){return a("http://rafaews.github.io/encontrodebandas/assets/jsons/Obras.json")}]),angular.module("vencontrodeBandas").controller("MainCtrl",["$scope","ObrasService",function(a,l){a.Obras=l.query()}]),angular.module("vencontrodeBandas").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="container-fluid"><div class="jumbotron text-center"><h1>V Encontro de Bandas Militares</h1><h2>Relação de Músicas</h2></div><div class="row"><div class="col-md-8"><accordion close-others="true"><accordion-group is-open="status.open" ng-repeat="Obra in Obras | orderBy: \'numero\'"><accordion-heading><strong>{{Obra.numero + \' - \' + Obra.titulo}}</strong><i class="pull-right"><strong ng-if="status.open">&or;</strong><strong ng-if="!status.open">&gt;</strong></i><span class="pull-right texto-header">{{Obra.regente}}</span></accordion-heading><div class="row"><div class="col-md-4"><strong>{{Obra.numero}}ª</strong> Música a ser executada.</div><div class="col-md-4"><label>Título:</label> {{Obra.titulo}}</div><div class="col-md-4"><label>OM Responsável:</label> {{Obra.OM}}</div></div><br><div class="row"><div class="col-md-4"><label>Autor:</label> {{Obra.autor}}</div><div class="col-md-4"><label>Regente:</label> {{Obra.regente}}</div><div class="col-md-4"><label>Interprete:</label> {{Obra.interprete}}</div></div><br><div class="row" ng-if="Obra.script != \'\'"><div class="col-md-12"><label>Script:</label><br><div class="col-sm-10 col-sm-offset-1"><div ng-bind-html="Obra.script"></div></div></div></div><br><div class="row"><div class="col-md-4"><label>Tempo &cong; Música:</label> {{Obra.tempo}}</div><div class="col-md-4"><label>Tempo &cong; Leitura Script:</label> {{Obra.temposcrpt}}</div><div class="col-md-4"><label>Tempo &cong; Total*:</label> {{Obra.tempototal}}</div></div><br><div class="row"><div class="col-md-4"><label>Download Partitura:</label><a style="padding-left:5%" ng-if="Obra.pdf!=\'\'" href="{{Obra.pdf}}"><img ng-src="http://rafaews.github.io/encontrodebandas/assets/images/PDF.png" alt="pdf"></a><img ng-if="Obra.pdf===\'\'" ng-src="http://rafaews.github.io/encontrodebandas/assets/images/PDFX.png" alt="pdf"></div><div class="col-md-4"><label>Download Mp3:</label><a style="padding-left:5%" ng-if="Obra.audio!=\'\'" href="{{Obra.audio}}"><img ng-src="http://rafaews.github.io/encontrodebandas/assets/images/Mp3.png" alt="pdf"></a><img ng-if="Obra.audio===\'\'" ng-src="http://rafaews.github.io/encontrodebandas/assets/images/Mp3X.png" alt="pdf"></div></div><br><small>*Tempo total aproximado com adição de 15 seg para aplausos</small></accordion-group></accordion></div><div class="col-md-4"><div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">V Encontro de Bandas Militares</h3></div><div class="panel-body"><div class="col-md-12"><label>Data:</label> 27 de outubro de 2015<br><label>Local:</label> Circulo Militar de São Paulo<br><label>Realização:</label> 2ª Divisão de Exército<br><label>Responsável:</label> <strong>Gen</strong> Div Carlos <strong>Sardinha</strong><br><label>Tempo Aprox.:</label> 1 h 20 min<br></div><div class="col-md-4"><label>Participantes:</label></div><div class="col-md-8"><ul class="list-group"><li class="list-group-item">Banda de Música do 4º BIL</li><li class="list-group-item">Banda de Música do 5º BIL</li><li class="list-group-item">Banda de Música do 6º BIL</li><li class="list-group-item">Banda de Música do 37º BIL</li></ul></div><div class="col-md-4"><label>Regentes:</label></div><div class="col-md-8"><ul class="list-group"><li class="list-group-item">1º Ten João Ribeiro</li><li class="list-group-item">1º Ten Roma Neto</li><li class="list-group-item">ST Batista</li><li class="list-group-item">ST Domingos</li><li class="list-group-item">ST Delazari</li><li class="list-group-item">1º Sgt Misael</li></ul></div></div></div></div></div><hr><div class="footer text-center"><span>Desenvolvido por João Rafael dos Santos <strong>Marcelino</strong><br><a href="https://www.facebook.com/rafael.marcelino.9" target="blank"><strong>Cb Marcelino</strong></a></span></div><hr></div>')}]);