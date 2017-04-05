angular
    .module("atv4").controller('pessoaController', function(pessoaService){
        this.novo = {};

        this.list = () => {
            pessoaService.list()
                .then((ret) => {
                    this.listAll = ret.data;
                });
        };

        this.list();

        this.save = () => {
            pessoaService.save(this.novo)
                .then( (ret) => {
                    this.list();
                    this.novo = {};
                });
        };

    });