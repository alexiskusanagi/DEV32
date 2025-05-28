using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoContaVogaisArray
{
    public class Program
    {
        static void Main(string[] args)
        {/* 5. Contador de Vogais em uma Palavra
            NOME: ProjetoContaVogais
            Crie um programa que solicite ao usuário uma palavra e conte quantas 
            vogais (a, e, i, o, u) existem nela. Use um loop for e um if dentro dele para verificar cada letra.    */

            char[] vogais = { 'a', 'e', 'i', 'o', 'u' };

            Console.WriteLine("Digite uma palavra: ");
            string palavra= Console.ReadLine().ToLower();
            

            for(int i = 0; i < palavra.Length; i++)
            {
                char letra= palavra[i];

                if (letra = 'a' || letra = 'e' || palavra = 'i' || palavra = 'o' || palavra = 'u')
                {

                }

            }

            /*   
             * Crie um programa que solicite ao 
             * usuário uma palavra e conte quantas 
             * vogais (a, e, i, o, u) existem nela. 
             * Use um loop for e um if dentro dele 
             * para verificar cada letra.
             
            Console.Write("Digite uma palavra: ");
            string palavra = Console.ReadLine().ToLower(); // Converte para minúsculas

            int contadorVogais = 0;
            //char vai armazenar 1 letra e entre aspas simples
            char[] vogais = { 'a', 'e', 'i', 'o', 'u' };

            foreach (char letra in palavra)
            {
                //usei método exists para analisar se no vetor vogais existe a letra vogal em questão
                if (Array.Exists(vogais, v => v == letra)) // Verifica se é vogal
                    contadorVogais++;//se existir, vai somar no contador.
            }

            Console.WriteLine($"Número de vogais na palavra: {contadorVogais}");
            Console.ReadKey(); */


        }
    }
}
