using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoCalculoSalarioBonus
{
    internal class Program
    {
        static void Main(string[] args)
        {

            /* Crie um programa em C# (Console Application) que solicite ao usuário seu nome, cargo e salário base. 
          O programa deve calcular o valor do bônus salarial com base no cargo informado e exibir o salário final após o acréscimo do bônus.

Regras do Exercício:
Entrada de Dados:

O programa deve solicitar o nome do usuário (variável string).
O usuário deve escolher um cargo digitando um número correspondente (variável int):
Estagiário → Bônus de 5%
Analista → Bônus de 10%
Gerente → Bônus de 15%
Diretor → Bônus de 20%
O programa deve solicitar o salário base (variável decimal).
Processamento:

Utilize um switch case para definir o percentual de bônus com base no cargo escolhido.
Calcule o salário final somando o bônus ao salário base.
Saída de Dados:

Exiba o nome do usuário, cargo, salário base, valor do bônus e salário final.
Use um if else para exibir uma mensagem extra:
Se o salário final for superior a R$ 10.000, exiba uma mensagem parabenizando o usuário.
Caso contrário, exiba uma mensagem motivacional incentivando o crescimento profissional.

==============================================================
EXEMPLO DA ENTRADA DE DADOS:
Digite seu nome: Maria  
Escolha seu cargo pelo número correspondente:  
1 - Estagiário  
2 - Analista  
3 - Gerente  
4 - Diretor  
>> 2  
Digite seu salário base: 8500  

->>>>
EXEMPLO DA SAÍDA DE DADOS:
Nome: Maria  
Cargo: Analista  
Salário Base: R$ 8500,00  
Bônus Recebido: R$ 850,00  
Salário Final: R$ 9350,00  
Continue se esforçando para alcançar salários maiores!     */


            string usuario;
            int cargo;
            decimal salario, bonus, salarioTotal;
            

            Console.WriteLine("Digite seu nome: ");
            usuario = Console.ReadLine();

            Console.WriteLine("Digite o número correspondente ao seu cargo de exercício: \n1 - estagiário \n2 - analista \n3 - gerente \n4 - diretor ");
            cargo = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Digite seu salário: ");
            salario = Convert.ToDecimal(Console.ReadLine());


            switch (cargo)
            {
                case 1:
                    bonus = (salario * 5) / 100;
                    salarioTotal = salario + bonus;
                    Console.WriteLine("Nome: " + usuario);
                    Console.WriteLine("Seu cargo é de: Estagiário ");
                    Console.WriteLine("Seu salário base é: " + salario.ToString("C"));
                    Console.WriteLine("Seu bônus recebido é: " + bonus.ToString("C"));
                    Console.WriteLine("Seu salário final é: " + "R$ " + salarioTotal.ToString("C"));
                    break;

                case 2:

                    bonus = (salario * 10) / 100;
                    salarioTotal = salario + bonus;
                    Console.WriteLine("Nome: " + usuario);
                    Console.WriteLine("Seu cargo é de: Estagiário ");
                    Console.WriteLine("Seu salário base é: " + salario.ToString("C"));
                    Console.WriteLine("Seu bônus recebido é: " + bonus.ToString("C"));
                    Console.WriteLine("Seu salário final é: " + "R$ " + salarioTotal.ToString("C"));
                    break;
                case 3:

                    bonus = (salario * 15) / 100;
                    salarioTotal = salario + bonus;
                    Console.WriteLine("Nome: " + usuario);
                    Console.WriteLine("Seu cargo é de: Estagiário ");
                    Console.WriteLine("Seu salário base é: " + salario.ToString("C"));
                    Console.WriteLine("Seu bônus recebido é: " + bonus.ToString("C"));
                    Console.WriteLine("Seu salário final é: " + "R$ " + salarioTotal.ToString("C"));
                    break;

                case 4:

                    bonus = (salario * 20) / 100;
                    salarioTotal = salario + bonus;
                    Console.WriteLine("Nome: " + usuario);
                    Console.WriteLine("Seu cargo é de: Estagiário ");
                    Console.WriteLine("Seu salário base é: " + salario.ToString("C"));
                    Console.WriteLine("Seu bônus recebido é: " + bonus.ToString("C"));
                    Console.WriteLine("Seu salário final é: " + "R$ " + salarioTotal.ToString("C"));
                    break;


                default:
                    {
                        Console.WriteLine("Operação inválida");
                        break;
                    }


            }
            if (salarioTotal > 10000)
            {
                Console.WriteLine("Parabéns" + cargo + "você ganha o mínimo pra sobreviver");
            }

            else
            {
                Console.WriteLine("Continue se esforçando," + cargo + ". A empresa agradece pela exploração do seu trabalho");
            }

            Console.ReadKey();
        }
    }
}
