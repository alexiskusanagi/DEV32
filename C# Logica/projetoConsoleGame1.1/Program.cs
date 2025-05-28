using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoConsoleGame1._1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // objetivo: jogo de RPG simples, com alternância na ordem de ataque

            //trabalhar com valores aleatórios - classe Random
            Random random = new Random();
            //variavel de personagens
            int vidaGuerreiro = 100, vidaMago = 40;
            int turno = 1;

            Console.WriteLine("Batalha Medieval: Guerreiro VS Mago\n");

            //vai rodar enquanto um dos dois possuir vida
            while (vidaGuerreiro > 0 && vidaMago > 0)
            {
                Console.WriteLine($"-------------Turno {turno}-------------");

                int guerreiroIniciativa = random.Next(1, 10);//randomizando a ordem de ataque do mago e gurreiro
                int magoIniciativa = random.Next(1, 15);


                //ataque do guerreiro primeiro
                if (guerreiroIniciativa > magoIniciativa)
                {


                    int ataqueGuerreiro = random.Next(10, 20);
                    vidaMago -= ataqueGuerreiro;
                    Console.WriteLine($"\nGuerreiro ataca causando {ataqueGuerreiro}" + $" de dano! \nMago agora tem {Math.Max(vidaMago, 0)} de vida");

                    if (vidaMago < 0) //vai acabar a vida do mago
                        break;

                    
                    int ataqueMago = random.Next(15, 35);
                    vidaGuerreiro -= ataqueMago;
                    Console.WriteLine($"\nMago lança magia causando {ataqueMago}" + $" de dano! \nGuerreiro agora tem: {Math.Max(vidaGuerreiro, 0)} de vida"); //Math.Max para limitar o valor a um mínimo de 0.

                    if (vidaGuerreiro < 0) //vai acabar a vida do guerreiro
                        break;
                }

                //ataque do mago primeiro
                else
                {
                    int ataqueMago = random.Next(15, 35);
                    vidaGuerreiro -= ataqueMago;
                    Console.WriteLine($"\nMago lança magia causando {ataqueMago}" + $" de dano! \nGuerreiro agora tem: {Math.Max(vidaGuerreiro, 0)} de vida");

                    if (vidaGuerreiro < 0)
                        break;

                    int ataqueGuerreiro = random.Next(10, 20);
                    vidaMago -= ataqueGuerreiro;
                    Console.WriteLine($"\nGuerreiro ataca causando {ataqueGuerreiro}" + $" de dano! \nMago agora tem {Math.Max(vidaMago, 0)} de vida");

                    if (vidaMago < 0) //vai acabar a vida do mago
                        break;
                }
                //vai incrementar o turno para ir pro próximo
                turno++;

                Console.ReadKey();


            }
            Console.WriteLine("\nFim da Batalha!");
            Console.WriteLine(vidaGuerreiro > 0 ? "Guerreiro venceu!" : "Mago venceu!");
            Console.ReadKey();

        }
    }
}
