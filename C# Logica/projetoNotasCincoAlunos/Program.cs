using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoNotasCincoAlunos
{
    public class Program
    {
        static void Main(string[] args)
        {

            /* 1. Crie um projeto que solicite 3 notas decimais, calcula a média e verifica se o aluno foi aprovado,
               ficou em recuperação ou reprovado, com base nos critérios abaixo:

                Regras de Aprovação:

             Média ≥ 7.0 → Aprovado
             Média entre 5.0 e 6.9 → Recuperação
             Média < 5.0 → Reprovado
              ->>>> Isso aconteça para 5 alunos.  */

            decimal nota1, nota2, nota3, media;
            string aluno;

                Console.WriteLine("Quando solicitado, digite o número do aluno - esse processo se repetirá cinco vezes");

            for (int i = 1; i <= 5; i++)
            {
                Console.WriteLine();// para pular uma linha
                Console.WriteLine($"Digite o número do aluno {i} ");
                aluno = Console.ReadLine();

                
                        Console.WriteLine("Digite primeira nota: ");
                        nota1 = Convert.ToDecimal(Console.ReadLine());
                        Console.WriteLine("Digite a segunda nota: ");
                        nota2 = Convert.ToDecimal(Console.ReadLine());
                        Console.WriteLine("Digite a terceira nota: ");
                        nota3 = Convert.ToDecimal(Console.ReadLine());
                        media = (nota1 + nota2 + nota3) / 3;
                        if (media >= 7)
                        {
                            Console.WriteLine("Aluno " + aluno + " teve uma média de " + media + " e está Aprovado.");
                        }
                        else if (media >= 5 && media <= 7)
                        {
                            Console.WriteLine("Aluno " + aluno + " teve uma média de " + media + " e está em Recuperação.");
                        }

                        else
                        {
                            Console.WriteLine("Aluno " + aluno + " teve uma média de " + media + " e está Reprovado.");
                        }
            }  

            Console.ReadKey();

        }
    }
}
