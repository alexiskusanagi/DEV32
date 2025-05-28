using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoRepeteMediaArray
{
    class Program
    {
        static void Main(string[] args)
        { /* 3. Cálculo de Média com Repetição
            NOME: ProjetoRepeteMedia
            Crie um programa que solicite ao usuário 5 notas e armazene-as em um array. 
            Utilize um loop for para calcular a média. Se a média for maior ou igual a 6, 
            exiba "Aprovado", caso contrário, "Reprovado".    */

            decimal[] notas = new decimal[5]; //array para armazenar as 5 notas digitadas pelo usuário

            int quantidadeNota = 5;

            Console.WriteLine("Digite a primeira nota : ");
            notas[0] = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine($"nota digitada: {notas[0]}");
            Console.WriteLine();

            Console.WriteLine("Digite a segunda nota : ");
            notas[1] = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine($"nota digitada: {notas[1]}");
            Console.WriteLine();

            Console.WriteLine("Digite a terceira nota : ");
            notas[2] = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine($"nota digitada: {notas[2]}");
            Console.WriteLine();

            Console.WriteLine("Digite a quarta nota : ");
            notas[3] = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine($"nota digitada: {notas[3]}");
            Console.WriteLine();

            Console.WriteLine("Digite a quinta nota : ");
            notas[4] = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine($"nota digitada: {notas[4]}");
            Console.WriteLine();


            for (int i = 1; i < quantidadeNota; i++)
            {
                notas[0] += notas[i];

            }
            decimal media = notas[0] / 5;
            Console.WriteLine("Média " + media);

            if (media >= 6)
            {
                Console.WriteLine("Aluno Aprovado");
            }

            else
            {
                Console.WriteLine("Aluno Reprovado");
            }

            Console.ReadKey();
        }
    }
}