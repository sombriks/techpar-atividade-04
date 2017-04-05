angular
    .module("atv4").service('pessoaService', function($http){
        this.save = (novo) => $http.post("/save", novo);
        this.list = () => $http.get("/list");
    })