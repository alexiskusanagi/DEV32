using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoArraysAKAVetores02
{
    public class Program
    {
        static void Main(string[] args)
        {
            // Criando um array de string um buscando um valor

            //declarando um arry string com nome
            string[] nomes= { "ALICE", "BRUNO", "CARLA", "DANILO", "ELIANE" }; //array com nomes

            Console.WriteLine("Digite um nome para procurar: ");
            string busca=Console.ReadLine();
            busca = busca.ToUpper();

            bool encontrado = false;

            foreach (string nome in nomes)//vai percorrer a lista de nomes
            {
                if (nome == busca) // se encontrar algum nome da lista
                { 
                    encontrado = true; //vai atribuir true para encontrado
                    break;
                }
            }

            if (encontrado) 
            {
                Console.WriteLine($"O nome foi encontrado com sucesso");
            }
            else
            {
                Console.WriteLine("Nome não encontrado");
            }

            Console.ReadKey();

        }
    }
}
