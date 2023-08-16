class CaixaDaLanchonete {
    
    //pensei em fazer uma lista de nodos com os itens do cardápio
    //porém eu não sei fazer listas em JavaScript e também não 
    //estou conseguindo declarar as variáveis

    


    calcularValorDaCompra(metodoDePagamento, itens) {
        valorTotal = 0;
        //itens
        itens.forEach(element => {
            if(element.includes(searchString["0"])){
                return"Quantidade inválida!";
            }else if(element == null){
                return "Não há itens no carrinho de compra!";
            }
        });




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
