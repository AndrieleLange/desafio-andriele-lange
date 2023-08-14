class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        valorTotal = 0;
        //itens
        









        //pagamento
        if(metodoDePagamento == null){
            return "Forma de pagamento inválida!";
        }else if(metodoDePagamento.toLowerCase() === "dinheiro"){
            valorTotal -= (valorTotal*0.05);
        } else if(metodoDePagamento.toLowerCase() === "credito"){
            valorTotal += (valorTotal*0.03);
        }


        return "";
    }



}

export { CaixaDaLanchonete };
