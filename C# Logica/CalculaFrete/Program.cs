using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculaFrete
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* Crie um projeto onde o funcionário da empresa de frete informará:
             1. UF destino (Ex.: RJ)
        Para determinada UF terá um valor destino:
                 - AM: R$4500,00
                 - RO: R$4800,00
                 - RS: R$3600,00
                 - RJ: R$3500,00
                 - Demais UF: R$3000,00
            2. Tamanho do transporte (p,m,g)
            3. Se tamanho p ->valor transporte R$1800,00
            Se tamanho m -> valor transporte R$2200,00
            Se tamanho g -> valor transporte R$3000,00
            4. Somar os valores e exibir o valor final. */

            string destinoFrete, tamanhoPacote;
            decimal valorTamanho, valorDestino, total;

            while (true)
            {
                Console.WriteLine();
                Console.WriteLine("Informe o UF destino do frete: ");
                destinoFrete = Console.ReadLine();
                destinoFrete = destinoFrete.ToUpper();

                Console.WriteLine();
                Console.WriteLine("Inforome o tamanho do pacote P, M ou G ");
                tamanhoPacote = Console.ReadLine();
                tamanhoPacote = tamanhoPacote.ToUpper();







                switch (destinoFrete)
                {
                    case "AM":
                        valorDestino = 4500;
                        break;
                    case "RO":
                        valorDestino = 4800;
                        break;
                    case "RS":
                        valorDestino = 3600;
                        break;
                    case "RJ":
                        valorDestino = 3500;
                        break;
                    default:
                        valorDestino = 3000;
                        break;
                }

                if (tamanhoPacote == "P")
                {
                    valorTamanho = 1200;
                    total = (valorTamanho + valorDestino);
                    Console.WriteLine("O valor total de um pacote pequeno para " + destinoFrete + " é: " + total.ToString("C"));

                }

                else if (tamanhoPacote == "M")
                {
                    valorTamanho = 2200;
                    total = (valorTamanho + valorDestino);
                    Console.WriteLine("O valor total de um pacote médio para " + destinoFrete + " é: " + total.ToString("C"));

                }

                else if (tamanhoPacote == "G")
                {
                    valorTamanho = 3000;
                    total = (valorTamanho + valorDestino);
                    Console.WriteLine("O valor total de um pacote grande para " + destinoFrete + " é: " + total.ToString("C"));

                }

                else
                {
                    Console.WriteLine("Operação inválida");
                    continue;
                }
                break;
            }
            Console.ReadKey();
        }

    }
}

