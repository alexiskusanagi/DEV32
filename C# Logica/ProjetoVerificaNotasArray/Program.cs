using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoVerificaNotasArray
{
    public class Program
    {
        static void Linha() //quando criado, fica inacessível até ser usado.
        {
            Console.WriteLine("**************************");
        }
        static void Main(string[] args)
        {
            /* 1. Verificação de Notas e Status do Aluno
                NOME: ProjetoVerificaNotas
                Crie um programa que solicite ao usuário as notas (3 notas) de 4 alunos em uma prova. 
                As notas devem ser armazenadas em um array. Depois, o programa deve calcular a média e 
                classificar cada aluno como Aprovado (média ≥ 7), Recuperação (média entre 5 e 6.9) ou 
                Reprovado (média < 5) usando um if else.    */

            decimal[] notas = new decimal[3]; //vetor/array contendo os 3 elementos que serão ocupados pelo valor das notas
            for (int aluno = 1; aluno < 5; aluno++) //laço de repetição para os alunos - até o quarto aluno.
            {
                Console.WriteLine("Aluno " + aluno);

                for (int i = 0; i < notas.Length; i++) // laço para as 3 notas.
                {
                    Console.WriteLine("Digite a nota: ");
                    notas[i] = Convert.ToDecimal(Console.ReadLine());
                }
                Console.WriteLine("As notas informadas foram: ");

                foreach (decimal nota in notas)
                {
                    Console.WriteLine(nota);
                }
                decimal media = (notas[0] + notas[1] + notas[2]) / 3; //pegando as notas dentro de cada elemento

                if (media >= 7)
                {
                    Console.WriteLine($"O aluno {aluno} teve média: {media}");
                    Console.WriteLine("Aluno Aprovado");
                    Linha();
                    Linha();
                }

                else if (media < 5)
                {
                    Console.WriteLine($"O aluno {aluno} teve média: {media}");
                    Console.WriteLine("Aluno Reprovado");
                    Linha();
                    Linha();
                }

                else
                {
                    Console.WriteLine($"O aluno {aluno} teve média: {media}");
                    Console.WriteLine("Aluno em Recuperação");
                    Linha();
                    Linha();
                }

            }
            Console.ReadKey();


        }
    }
}
