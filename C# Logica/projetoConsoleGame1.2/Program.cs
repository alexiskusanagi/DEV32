using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoConsoleGame1._2
{
    public class Program
    {
        static void Main(string[] args)
        {// objetivo: jogo de RPG simples, com alternância na ordem de ataque e diversas mecânicas como Ataque Crítico, Esquiva, Bloqueio e Contra-Ataque.

            //trabalhar com valores aleatórios - classe Random
            Random random = new Random();
            //variavel de personagens
            int vidaGuerreiro = 100, vidaMago = 40;
            int turno = 1;

            Console.WriteLine("Batalha Medieval: Guerreiro VS Mago - Vers. 1.2\n");

            //vai rodar enquanto um dos dois possuir vida
            while (vidaGuerreiro > 0 && vidaMago > 0)
            {
                Console.WriteLine($"-------------Turno {turno}-------------");

                int guerreiroIniciativa = random.Next(1, 10);//randomizando a ordem de ataque do mago e gurreiro
                int guerreiroAtaque = random.Next(1, 10); //chance de acerto ataque do guerreiro
                int guerreiroVelocidade = random.Next(1, 10); // chance de esquiva do guerreiro
                int guerreiroDefesa = random.Next(1, 10); // chance de bloqueio 
                int ataqueGuerreiro = random.Next(10, 20); //dano do guerreiro

                int magoIniciativa = random.Next(1, 15);
                int magoAtaque = random.Next(1, 10); // chance de acerto ataque do mago
                int magoVelocidade = random.Next(1, 10); // chance de esquiva do mago
                int magoDefesa = random.Next(1, 10);
                int ataqueMago = random.Next(15, 35); // dano do mago 


                //ataque do guerreiro primeiro
                if (guerreiroIniciativa > magoIniciativa)
                {
                    Console.WriteLine("Guerreiro Ataca Primeiro nesse turno");

                    
                    if (guerreiroAtaque >= magoVelocidade && guerreiroAtaque >= magoDefesa)
                    {
                        if (guerreiroAtaque >= 9)
                        {
                            vidaMago -= ataqueGuerreiro * 2;
                            Console.WriteLine("GUERREIRO ATACA E CONSEGUE UM");
                            Console.WriteLine("CRITICAL HIT!!!");
                            Console.WriteLine($"Mago leva {ataqueGuerreiro * 2} de dano");
                            Console.WriteLine($"Mago tem {Math.Max(vidaMago, 0)} de vida");
                        }
                        else
                        {
                            vidaMago -= ataqueGuerreiro;
                            Console.WriteLine($"\nGuerreiro ataca causando {ataqueGuerreiro}" + $" de dano! \nMago agora tem {Math.Max(vidaMago, 0)} de vida");
                        }

                    }
                    else if (guerreiroAtaque < magoVelocidade)
                    {
                        if (magoVelocidade >= 9)
                        {
                            Console.WriteLine("Guerreiro errou o ataque");
                            Console.WriteLine("MAGO CONTRA-ATACA!!!");
                            vidaGuerreiro -= ataqueMago;
                            Console.WriteLine($"Guerreiro leva {ataqueMago} de dano e agora tem: {Math.Max(vidaGuerreiro, 0)} de vida");
                            
                            if (vidaGuerreiro <= 0) //SOMENTE se a vida do guerreiro acabar ANTES do ataque do mago
                                break;
                        }

                        else
                        {
                            Console.WriteLine("Guerreiro errou o ataque");
                            Console.WriteLine($"Mago tem {Math.Max(vidaMago, 0)} de vida");
                        }
                    }

                    else if (guerreiroAtaque >= magoVelocidade && guerreiroAtaque < magoDefesa)
                    {
                        vidaMago -= ataqueGuerreiro - ((ataqueGuerreiro*90) / 100);
                        Console.WriteLine($"Mago bloqueou ataque do Guerreiro e levou apenas {ataqueGuerreiro - ((ataqueGuerreiro * 90) / 100)} de dano");
                        Console.WriteLine($"Mago tem {Math.Max(vidaMago, 0)} de vida");
                    }

                    if (vidaMago <= 0) //caso a vida do mago termine antes do mago atacar no turno
                        break;

                   
                    if (magoAtaque >= guerreiroVelocidade && magoAtaque >= guerreiroDefesa)
                    {
                        vidaGuerreiro -= ataqueMago;
                        Console.WriteLine($"\nMago lança magia causando {ataqueMago}" + $" de dano! \nGuerreiro agora tem: {Math.Max(vidaGuerreiro, 0)} de vida"); //Math.Max para limitar o valor a um mínimo de 0.

                    }

                    else if (magoAtaque < guerreiroVelocidade)
                    {
                        Console.WriteLine("Mago erra o ataque");
                        Console.WriteLine($"Guerreiro tem: {Math.Max(vidaGuerreiro, 0)} de vida");
                    }

                    else if (magoAtaque >= guerreiroVelocidade && magoAtaque < guerreiroDefesa)
                    {
                        vidaGuerreiro -= ataqueMago  - ((ataqueMago * 90) / 100);
                        Console.WriteLine($"Guerreiro bloqueia ataque do mago e leva apenas {ataqueMago - ((ataqueMago * 90) / 100)} de dano ");
                        Console.WriteLine($"Guerreiro tem: {Math.Max(vidaGuerreiro, 0)} de vida");
                    }

                    if (vidaGuerreiro <= 0) //vai acabar a vida do guerreiro
                        break;
                }

                //ataque do mago primeiro
                else
                {
                    Console.WriteLine("Mago Ataca Primeiro nesse turno");
                    


                    if (magoAtaque >= guerreiroVelocidade && magoAtaque >= guerreiroDefesa)
                    {
                        vidaGuerreiro -= ataqueMago;
                        Console.WriteLine($"\nMago lança magia causando {ataqueMago}" + $" de dano! \nGuerreiro agora tem: {Math.Max(vidaGuerreiro, 0)} de vida");

                    }
                    else if (magoAtaque < guerreiroVelocidade)
                    {
                        Console.WriteLine("Mago erra o ataque");
                        Console.WriteLine($"Guerreiro tem: {Math.Max(vidaGuerreiro, 0)} de vida");
                    }

                    else if (magoAtaque >= guerreiroVelocidade && magoAtaque < guerreiroDefesa)
                    {
                        vidaGuerreiro -= ataqueMago - ((ataqueMago * 90) / 100);
                        Console.WriteLine($"Guerreiro bloqueia ataque do mago e leva apenas {ataqueMago - ((ataqueMago * 90) / 100)} de dano ");
                        Console.WriteLine($"Guerreiro tem: {Math.Max(vidaGuerreiro, 0)} de vida");
                    }
                    if (vidaGuerreiro <= 0)
                        break;

                    
                    if (guerreiroAtaque >= magoVelocidade && guerreiroAtaque >= magoDefesa)
                    {
                        if (guerreiroAtaque >= 9)
                        {
                            vidaMago -= ataqueGuerreiro * 2;
                            Console.WriteLine("GUERREIRO ATACA E CONSEGUE UM");
                            Console.WriteLine("CRITICAL HIT!!!");
                            Console.WriteLine($"{ataqueGuerreiro * 2} de dano");
                            Console.WriteLine($"Mago tem {Math.Max(vidaMago, 0)} de vida");
                        }
                        else
                        {
                            vidaMago -= ataqueGuerreiro;
                            Console.WriteLine($"\nGuerreiro ataca causando {ataqueGuerreiro}" + $" de dano! \nMago agora tem {Math.Max(vidaMago, 0)} de vida");
                        }
                    }
                    else if (guerreiroAtaque < magoVelocidade)
                    {
                        if (magoVelocidade >= 9)
                        {
                            Console.WriteLine("Guerreiro errou o ataque");
                            Console.WriteLine("MAGO CONTRA-ATACA!!!");
                            vidaGuerreiro -= ataqueMago;
                            Console.WriteLine($"Guerreiro leva {ataqueMago} de dano e agora tem: {Math.Max(vidaGuerreiro, 0)} de vida");
                        }

                        else
                        {
                            Console.WriteLine("Guerreiro errou o ataque");
                            Console.WriteLine($"Mago tem {Math.Max(vidaMago, 0)} de vida");
                        }
                    }

                    else if (guerreiroAtaque >= magoVelocidade && guerreiroAtaque < magoDefesa)
                    {
                        vidaMago -= ataqueGuerreiro - ((ataqueGuerreiro * 90) / 100);
                        Console.WriteLine($"Mago bloqueou ataque do Guerreiro e levou apenas {ataqueGuerreiro - ((ataqueGuerreiro * 90) / 100)} de dano");
                        Console.WriteLine($"Mago tem {Math.Max(vidaMago, 0)} de vida");
                    }

                    if (vidaMago <= 0) //vai acabar a vida do mago
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
    
