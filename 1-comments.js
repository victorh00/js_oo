/*
- JS é case sensitive
- literal vs variável
- operações + - * / % **
- var:   escopo função ou global /  reatribuição e redeclaração sim no mesmo escopo / hoisting sim, init undefined
- let:   escopo bloco {}         / reatribuição sim redeclaração não                / hoisting sim init não
- const: escopo bloco {}         / reatribuição e redeclaração não, obriga init na declaração / hoisting sim, init não
- declaração sem var/let/const: variável global independente do bloco / hoisting não
- boa prática: let ou const para evitar escopo global do var
- coerção de tipo: conversão implícita quando uso operador matemático com strings contendo números 
- concatenação com operador + : concatena ao invés de somar se pelo menos 1 valor for str; não faz coerção de tipo
- converter manualmente texto para número: parseInt(), parseFloat()
- interpolação de variáveis: `Texto: ${var1} aqui`
- declaração de array: construtor, gera nova instância de objeto array. 
    - const var1 = new Array();
    - const pq a var guarda o objeto array, não os valores em si */
        let var2 = 2;
        console.log('---> array');
        const lista = new Array('a1', 1, 3.14, `a${var2}`);
        console.log(lista);
        console.log(lista.length); /*
    - alguns métodos: .push(), pop, shift, unshift, slice, splice, concat, forEach, map  
- operadores lógicos: and &&, or ||, not !
- operadores de comparação: < > <= >= == !=
- operador ternário: bool ? case true : case false
- laços: for(init, cond bool, ++){}, while(){}, do{} while(), 
    - for(in){}: itera sobre indices */
        const obj1 = {a: 'val1', b: 'val2', c: 'val3'}; 
        console.log('---> for in: ');
        for(let key in obj1) {console.log(key);} /*
    - for(of){}: itera sobre valores  */
        const obj2 = ['sp', 'rio', 'bsb', 'rec'];
        console.log('---> for of: ');
        for(let valor of obj2) {console.log(valor);}