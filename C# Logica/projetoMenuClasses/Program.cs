using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoMenuClasses
{
    public class Program
    {
        static void Linha()  //static void Linha() criado manualmente
        {
            // é uma função que vai desenhar uma linha
            Console.WriteLine("***************************************************");
        }
        static void Main(string[] args)
        {
            /* chamar funções em classes diferentes  */

            bool inicio = false; //essa é a condição para que o while inicie ou não. Ela é necessária nesse caso porque
                                 //ela está dentro da condição do while - while (inicio!=true)
            while (inicio != true) // o sistema vai seguir rodando - inicio também poderia ser (inicio == false)
            {
                Console.Clear(); // limpeza do cash do console
                int operacao;
                // criar os vínculos com as classes (a.k.a. as instâncias)
                ClasseConverte converte = new ClasseConverte();
                ClasseOrdenaNumeros ordenaNumeros = new ClasseOrdenaNumeros();

                //iniciar o comando
                Linha(); // vai chamar a função da linha e criar a linha
                // comando de posicioar o curso e escrever algo
                Console.SetCursorPosition(15, 1);  // 15 posição da linha horizontal (esquerda para direita. 1 posição da linha vertical (topo para a base)
                Console.WriteLine("Menu de opções");
                Linha();
                Console.SetCursorPosition(10, 4);
                Console.WriteLine("1 - Conversão de String");
                Console.SetCursorPosition(10, 6);
                Console.WriteLine("2 - Ordenar Números");
                Console.SetCursorPosition(10, 8);
                Console.WriteLine("3 - Finalizar");
                Linha();
                Console.SetCursorPosition(15, 11);
                Console.WriteLine("Opção[ ]");
                Console.SetCursorPosition(21, 11);
                // trabalhar com tratamento de erros
                // atalho do try catch = try tab tab
                try
                {
                    // o que estiver dentro do try será analisado. 
                    //Caso exista alguma inconsistência ele entrará no catch
                    operacao=Convert.ToInt32(Console.ReadLine());
                    // vamos analisar as opções
                    if (operacao == 1) 
                    {
                        Console.WriteLine("O texto alterado é: " +converte.AlteraNome());
                    }

                    if (operacao == 2) 
                    { // chamar direto a função na classeOrdenarNumeros
                        ordenaNumeros.organizar();
                        
                    }

                    if(operacao == 3)
                    {
                        Console.Clear();
                        inicio = true;
                        Console.WriteLine("*********** Fim de Execução ***********");
                    }
                    else if (operacao != 1 && operacao != 2 && operacao != 3)
                    {
                        Console.WriteLine("*********** Operação Inválida ***********");
                    }
                }
                catch (Exception ex)
                {
                    Console.Clear();
                    Linha();
                    Console.WriteLine("Informe uma opção válida. \nTente novamente.");
                    Linha();
                    Console.ReadKey();
                    
                }


                Console.ReadKey();
            }


            
        }
    }
}
