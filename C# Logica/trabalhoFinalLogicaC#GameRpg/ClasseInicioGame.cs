using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_GameRpg
{
    public class ClasseInicioGame
    {
        public static void GameBeginning() 
        {
            
                Console.WriteLine("É impossível retornar a Selita por aqui. A entrada foi selada magicamente. Poucos metros adentro da caverna surgem 3 caminhos");
                Console.WriteLine("Você decide seguir pelo: \n1. Caminho 1\n2. Caminho 2\n3. Caminho 3");
                int opcao = Convert.ToInt32(Console.ReadLine());
                switch (opcao)
                {
                    case 1:

                         ClasseC1AnteSala.AnteRoom();
                    break;

                    case 2:

                        ClasseC2Sala sala = new ClasseC2Sala();
                         sala.Room();
                    break;

                    case 3:
                        ClasseC3Corredor2 corredor2 = new ClasseC3Corredor2();
                         corredor2.Corridor2();
                    break;

                    default:

                        Console.WriteLine("Opção inválida tente novamente.");
                        Console.ReadKey();

                        break;
                }
               
            
        }
    }
}
