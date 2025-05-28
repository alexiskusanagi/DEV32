using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using System.Threading.Tasks;

namespace projetoCaixaEletronicoArray
{
    public class Program
    {
        static void Main(string[] args)
        { /*        4. Simulação de Caixa Eletrônico
                    NOME: ProjetoSimulaCaixa
                    Crie um programa que simule um caixa eletrônico. O usuário deve informar um valor para saque.
                    O programa deve verificar se o saque pode ser realizado com as cédulas disponíveis 
                    (100, 50, 20, 10, 5, 2 e 1 real)(utilize array), utilizando um loop while.  
            
            
            Esse enunciado pede a criação de um programa que simule um caixa eletrônico. Vou explicar cada parte dele de forma clara:
            Entrada do valor de saque: O programa deve permitir que o usuário informe um valor que deseja sacar do caixa eletrônico.
            Esse valor será o ponto de partida para a lógica do programa.
            Verificação se o saque pode ser realizado: O programa precisa verificar se é possível realizar 
            o saque utilizando as cédulas disponíveis. As cédulas são de 100, 50, 20, 10, 5, 2 e 1 real. 
            O objetivo é dividir o valor informado pelo usuário utilizando essas cédulas, de forma que o saque seja possível 
            sem precisar de cédulas menores ou maiores.
            Uso de um array (vetor): Para facilitar o processo de divisão do valor do saque, o programa pode usar um array (ou vetor) 
            contendo os valores das cédulas disponíveis (100, 50, 20, 10, 5, 2 e 1). O programa irá iterar sobre esse vetor para 
            "distribuir" o valor do saque entre as cédulas.
            Loop while: O programa deve usar um loop while para iterar enquanto ainda houver valor a ser sacado. 
            O loop vai continuar dividindo o valor do saque pelas cédulas, e a cada iteração ele vai subtrair do valor total 
            o montante correspondente a cada cédula que foi utilizada.
            
            Resumo do que o programa precisa fazer:
            O programa começa com o valor total a ser sacado.
            Utiliza o vetor das cédulas para tentar subtrair o valor total.
            Em cada iteração do while, o programa verifica quantas cédulas de determinado valor são necessárias para sacar uma parte do total.
            O programa vai subtraindo o valor do saque enquanto houver necessidade de cédulas, e ao final imprime a 
            quantidade de cédulas de cada tipo usadas.
            O loop vai continuar até o valor do saque ser completamente reduzido a zero.
            O objetivo final é garantir que o saque seja realizado da forma mais eficiente possível, ou seja, utilizando 
            a menor quantidade de cédulas possíveis.     */

            int[] cedulas = new int[] { 100, 50, 20, 10, 5, 2, 1 };
            int somaCedulas = 0, i=0;
            

            Console.WriteLine("Digite o valor do saque: \nCédulas disponíveis: 100, 50, 20, 10, 5, 2, 1");
            int saque= Convert.ToInt32(Console.ReadLine());

            int valorSaque = saque;


            while (saque > 0 && i < cedulas.Length)
            {

                int cedula = cedulas[i]; //definindo um valor para int cédula, e enfim, comandando o programa
                                         //a percorrer o vetor para selecionar um elemento de dentro dele, ou seja,
                                         //escolher qual cédula será usada - cedulas[i]. Esse era o comando
                                         //que eu queria
                if (saque >= cedula)
                {
                    somaCedulas = saque / cedula;
                    saque %= cedula;

                    Console.WriteLine($"foram sacadas {somaCedulas} cedula(s) de {cedula} reais");


                }
                i++; //seguindo para a próxima cédula disponível no array.

            }

            if (saque > 0)
            {
                Console.WriteLine("\nNão foi possível sacar o valor exato com as cédulas disponíveis.");
            }
            else
            {
                Console.WriteLine("\nSaque realizado com sucesso!");
                Console.WriteLine("Saque solicitado: " + valorSaque);

            }


            Console.ReadKey();





            /*  while (true)
            {

                    if (saque> 0 && < cedulas.Length   ) 
                    {
                        nota + nota;
                    }



                    for (int i = 0; i <= saque; i++)
                    {
                        somaCedulas += saque;
                        somaCedulas = saque;
                        if (saque > 0)
                        {

                        }

                        
                    }


                

                Console.WriteLine("saque solicitado " + saque + " cédula sacada :" + somaCedulas);
                

                Console.ReadKey(); */



            // --------------------------------------------------------------------



            /* Console.Write("Digite o valor para saque: R$ ");
        int valor = Convert.ToInt32(Console.ReadLine());

        int[] cedulas = { 100, 50, 20, 10, 5, 2, 1 };

        Console.WriteLine("\nNotas entregues:");
        //vai analisar cada item do vetor cedulas
        foreach (int cedula in cedulas)
        {
            //quer saber qtd de notas que cabem no valor informado
            int quantidade = valor / cedula;
            if (quantidade > 0)//se a qtd de notas for >0
            {
                //vai exibir a qtd de notas e seus valores
                Console.WriteLine($"{quantidade} nota(s) " +
                    $"de R$ {cedula}");
                //vai verificar se a divisão do valor informado e o valor da nota tem resto 0
                valor %= cedula;
            }
        }

        Console.ReadKey();   */
        }
    
    }
}
