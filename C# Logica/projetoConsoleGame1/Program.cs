using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoConsoleGame1
{
    public class Program
    {
        static void Main(string[] args)
        {
            //Objetivo: jogo de RPG simplessssssssssss

            //trabalhar com valores aleatórios - classe Random
            Random random = new Random();
            //var de personagens
            int vidaGuerreiro = 100, vidaMago = 100;
            int turno = 1;

            Console.WriteLine("BATALHA MEDIEVAL: GUERREIRO VS MAGO\n");

            //vai rodar enqto tiver vida
            while (vidaGuerreiro > 0 && vidaMago > 0)
            {
                Console.WriteLine($"------ TURNO {turno} -------");

                //ataque do guerreiro
                int ataqueGuerreiro = random.Next(10, 20);
                vidaMago -= ataqueGuerreiro;
                //vai exibir o ataque e mostrar qto o mago tem ainda de vida
                Console.WriteLine($"GUERREIRO ATACA CAUSANDO {ataqueGuerreiro}" +
                    $" DE DANO! \nMAGO AGORA TEM {Math.Max(vidaMago, 0)} DE VIDA.");

                if (vidaMago <= 0)//vai acabar qdo a vida do mago acabar
                    break;

                //ataque do mago
                int ataqueMago = random.Next(5, 25);
                vidaGuerreiro -= ataqueMago;
                Console.WriteLine($"MAGO LANÇA FEITIÇO CAUSANDO {ataqueMago} " +
                    $" DE DANO!\nGUERREIRO AGORA TEM {Math.Max(vidaGuerreiro, 0)}" +
                    $" DE VIDA!");

                if (vidaGuerreiro <= 0)//vai acabar qdo a vida do mago acabar
                    break;
                //vai incrementar o turno para ir pro próximo
                turno++;
                Console.WriteLine("\nPRESSIONE ENTER PARA CONTINUAR A " +
                    "BATALHA...");
                Console.ReadKey();
            }
            Console.WriteLine("\nFIM DA BATALHA!");
            Console.WriteLine(vidaGuerreiro > 0 ?
                "GUERREIRO VENCEU!" : "MAGO VENCEU!");
            Console.ReadKey();

        }
    }
}
