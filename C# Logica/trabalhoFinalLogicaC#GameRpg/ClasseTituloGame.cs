using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_GameRpg
{
    internal class ClasseTituloGame
    {
        public void GameTitle() // Lembrando que 1) "public" é um modificador de acesso, 2) "void" é o tipo de retorno e que por ser vazio (hence the name) não
                                // retorna valores, não precisa de "return". 3) GameTitle() é método que está dentro da ClasseTituloGame (classe que precisou ser
                                // instanciada pois é um método de uma classe de instância (e não de static) - copilot
        {
            Console.WriteLine("     _           _             ____                                     \r\n    | |_   _ ___| |_    __ _  |  _ \\ _   _ _ __   __ _  ___  ___  _ __  \r\n _  | | | | / __| __|  / _` | | | | | | | | '_ \\ / _` |/ _ \\/ _ \\| '_ \\ \r\n| |_| | |_| \\__ \\ |_  | (_| | | |_| | |_| | | | | (_| |  __/ (_) | | | |\r\n \\___/ \\__,_|___/\\__|  \\__,_| |____/ \\__,_|_| |_|\\__, |\\___|\\___/|_| |_|\r\n  ____                    _             ____     |___/  _           _   \r\n / ___|_ __ __ ___      _| | ___ _ __  |  _ \\ _ __ ___ (_) ___  ___| |_ \r\n| |   | '__/ _` \\ \\ /\\ / / |/ _ \\ '__| | |_) | '__/ _ \\| |/ _ \\/ __| __|\r\n| |___| | | (_| |\\ V  V /| |  __/ |    |  __/| | | (_) | |  __/ (__| |_ \r\n \\____|_|  \\__,_| \\_/\\_/ |_|\\___|_|    |_|   |_|  \\___// |\\___|\\___|\\__|\r\n                                                     |__/               ");
        }

        static bool piscar = true; //para o subtexto ficar piscando - copilot
        public static async Task PiscarSubtexto() //criando um método para fazer o subtexto piscar, onde 1) public permite que a informação seja acessado por outra
                                                  //classe. 2) static é o método que não precisa ser instanciado e 3) async é assíncrono, ou seja, pode rodar em
                                                  //paralelo sem interromper ou interferir com o resto do código
                                                  //(consegue rodar paralelo ou, apesar de, um loop while) -copilot
        {

            while (piscar) //loop que vai possibilitar o subtexto a piscar
            {
                Console.SetCursorPosition(25, 12);
                Console.WriteLine("Press Enter to Play");

                await Task.Delay(700); // - copilot
                Console.SetCursorPosition(25, 12);
                Console.WriteLine(new string(' ', "Press Enter to Play".Length)); // - copilot
                await Task.Delay(700); // -copilot
            }


        }
        public static async Task<int> IniciarJogo()
        {

            string opcaoTitulo = (Console.ReadLine());


            switch (opcaoTitulo)
            {
                case "menusecreto": //inserir classes do menu trabalho final

                    return 0;

                default:
                    piscar = false; //condição para quebrar o loop. É necessário que exista um bool piscar = true
                    Console.Clear();

                    return 0;
            }


        }



    }
    
}
