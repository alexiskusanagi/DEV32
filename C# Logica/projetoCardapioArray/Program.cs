using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoCardapioArray
{
    public class Program
    {
        static void Linha()
        {
            Console.WriteLine("=================================================================");
        }
        static void Main(string[] args)
        { /* 2. Cardápio de Restaurante
                NOME: ProjetoCardapio
                Crie um programa que exiba um menu de restaurante e peça ao usuário para escolher um 
                prato digitando o número correspondente. O programa deve usar um switch case para 
                exibir o nome e o preço do prato escolhido.      */

            int[] prato = new int[5];
            prato[0] = 80; //valor do preço dos pratos
            prato[1] = 75;
            prato[2] = 90;
            prato[3] = 65;
            prato[4] = 70;

            while (true)

            {
                Console.Clear();
                Console.SetCursorPosition(18, 1);
                Console.WriteLine("----------MENU À LA CARTE:---------- \n1 - Fillet Mignon à Parmegiana com arroz e fritas \n2 - Risotto à Piemontese com Fillet de Chorizo na brasa \n3 - Picanha à moda da casa com pão francês, arroz e mandioca frita \n4 - Gnocchi ao sugo com Lombo na brasa \n5 - Risotto de palmito e alho-poró, acompanha protéina de soja e feijão preto assada ao molho de mel e mostarda \n6 - SAIR");
                Linha();
                Console.SetCursorPosition(0, 9);
                Console.WriteLine("Opção[ ] ");
                Console.SetCursorPosition(6, 9); //o que o usuário digitar vai aparecer a partir dessa posição.
                int escolhaPrato = Convert.ToInt32(Console.ReadLine());
                Linha();

                switch (escolhaPrato)
                {
                    case 1:
                        Console.WriteLine("Você escolheu: \nFillet Mignon à Parmegiana com arroz e fritas");
                        Console.WriteLine($"Preço do prato: R$: {prato[0]},00 reais");
                        break;

                    case 2:
                        Console.WriteLine("Você escolheu:\nRisotto à Piemontese com Fillet de Chorizo na brasa");
                        Console.WriteLine($"Preço do prato: R$: {prato[1]},00 reais");
                        break;

                    case 3:
                        Console.WriteLine("Você escolheu:\nPicanha à moda da casa com pão francês, arroz e mandioca frita");
                        Console.WriteLine($"Preço do prato: R$: {prato[2]},00 reais");
                        break;

                    case 4:
                        Console.WriteLine("Você escolheu:\nGnocchi ao sugo com Lombo na brasa");
                        Console.WriteLine($"Preço do prato: R$: {prato[3]},00 reais");
                        break;

                    case 5:
                        Console.WriteLine("Você escolheu:\nRisotto de palmito e alho-poró, acompanha protéina de soja e feijão preto assada ao molho de mel e mostarda");
                        Console.WriteLine($"Preço do prato: R$: {prato[4]},00 reais");
                        break;

                    case 6:
                        Environment.Exit(0);
                        break;

                    default:
                        Console.WriteLine("Opção inválida. Tente novamente.");
                        break;
                }

                Console.ReadKey();
            }
        }
    }
}