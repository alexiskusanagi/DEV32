using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoCalc01
{
    public class Program
    {
        static void Main(string[] args)
        {
            // trabalhando com variáveis do tipo int
            // Cadastro simples e cálculo da idade
            // 1. declarar variáveis
            string nome, cidade, uf, telefone;
            int ano_nascimento, idade, ano_atual;

            //2. solicitar os dados e capturar os valores
            Console.WriteLine("Nome: ");
            nome = Console.ReadLine();

            Console.WriteLine("Cidade: ");
            cidade = Console.ReadLine();

            Console.WriteLine("UF: ");
            uf = Console.ReadLine();

            Console.WriteLine("Telefone: ");
            telefone = Console.ReadLine();
            // convertendo int usando o comando "convert"
            Console.WriteLine("Ano de nascimento: ");
            ano_nascimento= Convert.ToInt32 (Console.ReadLine());

            /* outra forma de converter ée usando o ".Parse"
            ano_nascimento=int.Parse (Console.ReadLine()); */

            Console.WriteLine("Ano Atual: ");
            ano_atual = Convert.ToInt32 (Console.ReadLine());

            idade = ano_atual - ano_nascimento;
            Console.WriteLine(nome+ " tem " + idade + " anos!!!");

            Console.ReadKey();












        }

    }
}
