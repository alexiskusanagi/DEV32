using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_GameRpg
{
    internal class ClasseIntroducaoGame
    {
        public int GameIntro()
        {
            Console.WriteLine("Um grande mal tomou o mundo de Wellham, a criatura maléfica conhecida como Gruntharn corrompeu os reinos com sua magia negra. \r\nFlorestas, plantas, rios, montanhas, animais e lagos, praticamente nada escapou do alcance da corrupção de Gruntharn. Exceto\r\no Reino de Selita, o principal e maior reino do mundo, foi salvo graças ao poder de sua Governante, a Rainha Niunah VII, \r\nque também é uma das magas mais poderosas entre os reinos. Quando a corrupção chegou em Selita, a Rainha Maga usou todo seu poder \r\npara criar um selo mágico e proteger seu reino e seus habitantes. Mas, uma magia de proteção poderosa como essa cobra um preço alto. \r\nAlguns diriam, alto demais. O selo de proteção absorve a energia vital daquele que o criou, e a cada dia que passa a Rainha fica cada vez mais fraca.\r\nQuando sua energia vital se esgotar, a rainha morrerá e o selo será quebrado. Sem nenhum tipo de barreira de proteção, todo mundo será tomado \r\npela corrupção de Gruntharn. Nenhum clérigo ou mago conseguiu encontrar uma magia, seja ela divina ou arcana, forte o suficiente para\r\nrestaurar a força vital da rainha de modo permanente sem que o selo de proteção criado por ela seja desfeito, pior do que isso, quanto mais se utilizam meios \r\nmágicos tradicionais para restaurá-la mais rápido a energia recomposta da Rainha é drenada. Os estudiosos do Reino estimam que a Rainha \r\ntem apenas mais 7 dias de vida. [Press ENTER to Continue]");
            string opcaoIntro = Console.ReadLine();
            switch (opcaoIntro)
            {
                case "333":
                    Console.WriteLine();
                    Console.WriteLine("Esses mesmos estudiosos também teorizam que o único meio mágico capaz de salvar a Rainha \r\ne destruir Gruntharn de uma vez por todas é por meio de um Artefato Lendário \r\nconhecido como Vetalorien. O Vetalorien é uma espada sagrada que só pode ser usada por pessoas com causas justas e bonsosas. \r\nMas há milênios, devido ao seu incrível poder, o Vetalorien foi divido em três artefatos menores, a Empunhadura da cura, \r\na Gema da velocidade e a Lâmina da força. Suas partes foram escondidas no lar de Gruntharn, as Cavernas de Kir, e rumores dizem que foi \r\no próprio Gruntharn quem as escondeu e, temendo que o poder do Vetalorien seja usado contra ele, as mantém sob sua vigia, pois ele sabe\r\nque um herói empunhando o Vetalorien e a Rainha Niunah fazem parte dos poucos seres do mundo que podem destruí-lo para sempre.\r\nCaso você encontre as três partes do Vetalorien, poderá combiná-las e derrotar Gruntharn.\nEntão prepare-se pois, a maior aventura de sua vida começa... Agora! Boa caçada, aventureiro");
                    break;

                default:
                    Console.WriteLine("Um desses estudiosos tem fortes evidências que o Artefato Mágico conhecido como Empunhadura da cura está escondido nas profundezas\r\ndas Cavernas de Kir, infelizmente, lá também é o lar de Gruntharn. Mas esse artefato é a única maneira de salvar a vida da Rainha e manter  \r\no selo de proteção. É aí que você entra, um heroi pronto pra entrar em ação e salvar o dia, a rainha e a todos. Após adquirir um velho mapa \r\ncom a localização das cavernas de Kir, você ouve a informação mais importante de sua missão: \"Lembre-se que enfrentar Gruntharn em um combate direto não é \r\numa opção. Você é um aventureiro bem experiente mas a criatura é extremamente poderosa e nem mesmo os maiores heróis de todos reinos conseguiram \r\nderrotá-lo, por isso caso o encontre, fuja o mais rápido que puder, recuperar a Empunhadura da cura e salvar a vida da Rainha é prioridade TOTAL!\nA maior aventura de sua vida começa agora! Boa sorte, aventureiro.");
                    break;
            }
            Console.ReadKey();
            return 0;

        }

    }
}
