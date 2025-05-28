using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    public class ClasseNotasMedia
    {
        public decimal studentOverall()
        {
            Console.Clear();
            string[] nomeAluno = new string[2]; // vetor/array que recebe e armazena o nome dos alunos
            double[] nota = new double[4]; // vetor/array que recebe e armazena as 3 notas dos alunos
            double media = 0;
            Console.SetCursorPosition(15, 1);
            Console.WriteLine("Sistema para cálculo de médias");

            for (int nomes = 0; nomes < nomeAluno.Length; nomes++) // para repetir o cadastro de nomes dos alunos
                                                                   // que, por sua vez, será armazenado no vetor/array
            {
                Console.WriteLine("Digite nome do aluno");
                nomeAluno[nomes] = (Console.ReadLine());

                for (int i = 1; i < nota.Length; i++) // começa no 1 para exibir 'nota 1'. E é usado para repetir as
                                                      // notas do aluno[nomes] que serão digitadas pelo usuário
                {
                    Console.WriteLine($"Digite nota {i} do aluno {nomeAluno[nomes]}:"); // vai exibir a ordem da nota
                                                                                        // se nota 1, nota 2 etc. e
                                                                                        // exibir o nome digitado pelo
                                                                                        // usuário (que foi armazenado no vetor)

                    nota[i] = Convert.ToDouble(Console.ReadLine());

                }
                double notasSomadas = 0; // criando a variável que irá conter o valor total da soma das notas
                foreach (double grade in nota) //para somar as notas contidas no vetor (o programa cria um vetor de
                                               //notas para cada aluno individualmente, ou seja, os valores
                                               //contidos no vetor são substituídos a cada repetição do loop)
                {
                    notasSomadas += grade;
                    media = notasSomadas / 3;
                }
                if (media >= 7)
                {
                    Console.WriteLine($"Aluno: {nomeAluno[nomes]} teve média: {media.ToString("F2")}. Aluno aprovado. ");
                    Console.WriteLine();
                }

                else if (media < 7 && media >= 5)
                {
                    Console.WriteLine($"Aluno: {nomeAluno[nomes]} teve média: {media.ToString("F2")}. Aluno em Recuperação. ");
                    Console.WriteLine();
                }

                else
                {
                    Console.WriteLine($"Aluno: {nomeAluno[nomes]} teve média: {media.ToString("F2")}. Aluno Reprovado. ");
                    Console.WriteLine();
                }

            }

           
            return 0;
        }
    }
}
