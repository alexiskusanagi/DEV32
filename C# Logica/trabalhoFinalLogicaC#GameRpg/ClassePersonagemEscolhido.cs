using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_GameRpg
{
    internal class ClassePersonagemEscolhido //contrutor do personagem -copilot - nova classe para armazenar atributos do personagem
    {
        public string PersonagemJogador;
        public int HP;
        public int Atack;
        public int Power;
        public int Defence;
        public int Speed;
        public bool IfMage;
        public ClassePersonagemEscolhido(string classepj, int hp, int atack, int power, int defence, int speed, bool ifMago) //contrutor de personagem - atributos - copilot
        {
            //valores de HP, Atack, Speed, ifMago, etc que foram definidos acima serão atribuídos aqui
            PersonagemJogador = classepj;
            HP = hp;
            Atack = atack;
            Power = power;
            Defence = defence;
            Speed = speed;
            IfMage = ifMago; //vai determinar se o personagem é mago ou não - if mago = true ou if mago = false
        }

        public void ExibirStatusPersonagem()
        {
            Console.WriteLine($"Personagem {PersonagemJogador}\nHP {HP}\nAtack {Atack}\nPower {Power}\nDefence {Defence}\nSpeed {Speed}");
        }
    }
}
