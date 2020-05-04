/*20) Dado o seguinte algoritmo

declare Z numérico;
função numérico OP ( X, Y )
    declare X, Y numéricos;

    se Z = 0 então
        OP <- X+Y;
    senão
        OP <- X-Y;
    fim se
fim função

Algoritmo Exercicio
    declare X, Y numéricos;
    declare RES numérico;
leia Z, Y, X;
RES <- OP(Y, X);
Escreva “O resultado de op sobre Y e X é”, RES;
fim algoritmo

Responda:
a) O que será mostrado para o usuário ao final do algoritmo se ele entrar com os
seguintes valores em resposta ao comando de entrada:
1 -12 3
b) Por que o valor de Z é conhecido (e pode ser testado) dentro da função OP?
c) OP poderia ser reescrita como uma subrotina, mantendo-se o restante do
algoritmo inalterado? Se não, explique por quê.
*/