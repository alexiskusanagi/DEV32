using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Salario
{
    public class Program
    {
        static void Main(string[] args)
        {

            /*O programa pede que o usuário insira seu nome, profissão e salário.
            O funcionário tem R$500,00 de comissão.
            Efetuar a soma do salário com a comissão.
            Analisar se o valor do salário + comissão, 
            for maior ou igual a 5mil, descontar 5% do valor. Caso contrário, descontar 2%.
            Exibir o valor final do salário com o os descontos.

            ** usar declaração do salário como decimal ou double */

            decimal salario, comissao = +500, total, salarioFinal;
            string nome, profissao;

            Console.WriteLine("Insira seu nome: ");
            nome = Console.ReadLine();
            Console.WriteLine("Insira sua profissão: ");
            profissao = Console.ReadLine();
            Console.WriteLine("Insira seu salário: ");
            salario =Convert.ToDecimal(Console.ReadLine());
            total = (salario + comissao);

            if (salario >= 5000)
            {
                salarioFinal = total - ((total * 5) / 100);
                Console.WriteLine("Seu salário com 5% de desconto é: " + salarioFinal);
            }

            else 
            {
                salarioFinal = total - ((total *2) / 100);
                Console.WriteLine("Seu salário com 2% de desconto é: " +salarioFinal);
            }

            
            Console.ReadKey();







        }
    }
}
