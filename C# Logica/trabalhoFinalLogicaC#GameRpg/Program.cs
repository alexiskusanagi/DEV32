using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_GameRpg
{
    public class Program
    {
        static void Main(string[] args)
        {
            /*  -----------------------------------------------
                    JOGO - JUST A DUNGEON CRAWLER PROJECT
                -----------------------------------------------  */


            // Criando e instanciando as classes pertencentes ao método de instância -> new (essas não são static).

            ClasseTituloGame tituloGameClasse = new ClasseTituloGame(); // onde ClasseTituloGame é nova classe criada  tituloGameClass é a variável e
                                                                        // new ClasseTituloGame é o objeto criado (cujo valor será armazenado na variável)
                                                                        // chamando as classes a partir do método (em amarelo)
            ClasseIntroducaoGame introducaoGameClass = new ClasseIntroducaoGame();
           
            ClasseInicioGame inicioGame = new ClasseInicioGame();
            ClasseC1AnteSala anteSala = new ClasseC1AnteSala();
            ClasseC2Sala sala = new ClasseC2Sala();
            ClasseC3Corredor2 corredor2 = new ClasseC3Corredor2();




            // ~~~~~~~~~~~~~~~~~~~~~~~~ Chamando as Classes ~~~~~~~~~~~~~~~~~~~~~~~~~

            tituloGameClasse.GameTitle(); // onde tituloGameClass é a variável que tem valor igual a "new ClassTituloGame()

            Task piscar = ClasseTituloGame.PiscarSubtexto();// classe pertencente ao método estático (static) não precisa ser instanciada
            Task iniciarJogo = ClasseTituloGame.IniciarJogo();// outra classe pertencente ao método estático (static) não precisa ser instanciada
            introducaoGameClass.GameIntro();
            
            
           


            Console.ReadKey();

        }
        public static void SelecaoPersonagem() // para a seleção de personagem
        {
            Console.Clear();
            Console.WriteLine("A escolha do personagem terá influência em algumas mecânicas do jogo.");
            Console.WriteLine("Escolha seu personagem: ");
            Console.WriteLine();
            Console.WriteLine("|================================================================|");
            Console.WriteLine("|                         1. Guerreiro                           |");
            Console.WriteLine("|================================================================|");
            Console.WriteLine("|            Vantagens           |         Desvantagens          |");
            Console.WriteLine("|================================================================|");
            Console.WriteLine("|            Maior HP            |       Menor Velocidade        |");
            Console.WriteLine("|          Maior Defesa          | Somente Testes de Habilidade  |");
            Console.WriteLine("|     Chance de Ataque Crítico   |       Acesso Resrito a        |");
            Console.WriteLine("|      Talentos de Guerreiro     |     Certas Áreas do Mapa      |");
            Console.WriteLine("|================================================================|");
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("|================================================================|");
            Console.WriteLine("|                             2. Mago                            |");
            Console.WriteLine("|================================================================|");
            Console.WriteLine("|            Vantagens           |         Desvantagens          |");
            Console.WriteLine("|================================================================|");
            Console.WriteLine("|        Maior Velocidade        |           Menor HP            |");
            Console.WriteLine("|         Ataques em Área        |    Ataque Limitado a Magias   |");
            Console.WriteLine("|   Dano da Magia Elemental x2   |      Incapaz de Desferir      |");
            Console.WriteLine("| Acesso a Todas as Área do Mapa |       um Ataque Crítico       |");
            Console.WriteLine("|================================================================|");
            Console.WriteLine();
            Console.WriteLine("Pressione 1 para Guerreiro ou 2 para Mago");
            int opcaoPersonagem = Convert.ToInt32(Console.ReadLine());

            switch (opcaoPersonagem)
            {
                case 1:
                    Console.WriteLine("Você escolheu Guerreiro");
                    Console.WriteLine();
                    Console.WriteLine("|================================|");
                    Console.WriteLine("|            Guerreiro           |");
                    Console.WriteLine("|================================|");
                    Console.WriteLine("|              Stats             |");
                    Console.WriteLine("|================================|");
                    Console.WriteLine("|            HP: 100             |");
                    Console.WriteLine("|            Atack: 8            |");
                    Console.WriteLine("|            Power: 10           |");
                    Console.WriteLine("|            Defence: 10         |");
                    Console.WriteLine("|            Speed: 1            |");
                    Console.WriteLine("|================================|");
                    Console.WriteLine();
                    ClasseDadosDoJogo.personagemEscolhido = new ClassePersonagemEscolhido("Guerreiro", 100, 8, 10, 10, 1, false); // copilot - parte
                                                                                                                                  // do construtor do pernsonagem
                                                                                                                                  //esses valores serão atribídos
                                                                                                                                  //em Public Classe Personagem Escolhido 
                    Console.WriteLine("Deseja seguir com essa escolha? s/n ");
                    string confirma = Console.ReadLine();
                    confirma = confirma.ToLower();
                    if (confirma == "s")
                    {
                        Console.WriteLine("Você afia as lâminas de suas armas e veste a armadura uma última vez antes de partir para sua aventura");
                        Console.ReadKey();
                        Console.Clear();
                        GameInicio();
                    }
                    else if (confirma == "n")
                    {
                        Console.WriteLine("Retornando ao Menu de Seleção de Personagem");
                        SelecaoPersonagem();
                    }
                    else
                    {
                        Console.WriteLine("Informação inválida.\nRetornando ao Menu de Seleção de Personagem.\nPressione Enter para continuar. ");
                        SelecaoPersonagem(); //vai voltar pra seleção de personagem no caso de opção inválida
                        return;
                    }

                    return;

                case 2:
                    Console.WriteLine("Você escolheu Mago");
                    Console.WriteLine();
                    Console.WriteLine("|================================|");
                    Console.WriteLine("|              Mago              |");
                    Console.WriteLine("|================================|");
                    Console.WriteLine("|              Stats             |");
                    Console.WriteLine("|================================|");
                    Console.WriteLine("|            HP: 40              |");
                    Console.WriteLine("|            Atack: 10           |");
                    Console.WriteLine("|            Power: 8            |");
                    Console.WriteLine("|            Defence: 1          |");
                    Console.WriteLine("|            Speed: 10           |");
                    Console.WriteLine("|================================|");
                    Console.WriteLine();
                    ClasseDadosDoJogo.personagemEscolhido = new ClassePersonagemEscolhido("Mago", 40, 10, 8, 1, 10, true);
                    Console.WriteLine("Deseja seguir com essa escolha? s/n");
                    confirma = Console.ReadLine();
                    confirma = confirma.ToLower();
                    if (confirma == "s")
                    {
                        Console.WriteLine("Você revisa as magias anotadas em seu Grimório uma última vez antes de partir para sua aventura.");
                        Console.ReadKey();
                        Console.Clear();
                        GameInicio();
                    }

                    else if (confirma == "n")
                    {
                        Console.WriteLine("Retornando ao Menu de Seleção de Personagem");
                        SelecaoPersonagem();
                    }
                    else
                    {
                        Console.WriteLine("Informação inválida.\nRetornando ao Menu de Seleção de Personagem.\nPressione Enter para continuar. ");
                        SelecaoPersonagem();
                        return;
                    }
                    return;

            }

        }
        public static void GameInicio()
        {
            Console.Clear();
            Console.WriteLine($"Status: Personagem = {ClasseDadosDoJogo.personagemEscolhido.PersonagemJogador}, HP={ClasseDadosDoJogo.personagemEscolhido.HP}, Atack={ClasseDadosDoJogo.personagemEscolhido.Atack}, Power ={ClasseDadosDoJogo.personagemEscolhido.Power}, Defence = {ClasseDadosDoJogo.personagemEscolhido.Defence}, Speed = {ClasseDadosDoJogo.personagemEscolhido.Speed}");
            Console.WriteLine("Você é teleportado para a entrada da caverna. Mas como essa é uma área é protegida por uma magia de Âncora Planar, \né possivel se teleporta para dentro, mas não para fora. Na volta, você terá que caminhar de volta até Selita. \nAo passar por uma área de vegetação fechada, você encontra a entrada das Carvernas de Kir. \nAo adentrar a caverna, uma runa mágica é ativada e uma campo de energia bloquea o caminho por onde você entrou. \nCom a entrada selada magicamente é impossível retornar a Selita por aqui. Poucos metros adentro da caverna surgem 3 caminhos");
            Console.WriteLine("Digite 1. para seguir pelo Caminho 1\nDigite 2. para seguir pelo Caminho 2\nDigite 3. para seguir pelo Caminho 3 ");
            int opcaocaminhos = Convert.ToInt32(Console.ReadLine());
            switch (opcaocaminhos)
            {
                case 1:
                    ClasseC1AnteSala.AnteRoom();
                    break;
            }
        }






    }
}
