using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Switch___If_1
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* usuario iforma um valor acima de 499 para conseguir um desconto. tipo de cliente C= comum, V = VIP e F= funcionário. 
             * Usar Switch case para determinar desconto (0, 10 e 20%) e If Else para calcular e exibir o preço final da compra */

            decimal valor, valorTotal;
            string clienteTipo;

            Console.WriteLine("Informe um valor da sua compra ");
            valor=Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Informe se é cliente comum, VIP ou funcionário");
            clienteTipo=Console.ReadLine();
            clienteTipo=clienteTipo.ToLower();
            
            
            
            switch (clienteTipo)
            {
                case "c": 
                    valorTotal=valor;
                    Console.WriteLine("Total da compra: " + valorTotal.ToString("C")); // esse.ToString (C) é R$
                    break;

               
                case "v":
                    if (valor >= 500)
                    {
                        valorTotal = (valor - (valor * 10) /100);
                        Console.WriteLine("Seu total com desconto de 10% foi: " + valorTotal.ToString("C"));
                        
                    }

                    else 
                    { valorTotal = valor;
                        Console.WriteLine("Não há desconto");
                    }
                    break;

                case "f":
                    if (valor >= 500)
                    {
                        valorTotal = (valor - (valor * 20) / 100);
                        Console.WriteLine("Seu total com desconto de 20% foi: " + valorTotal.ToString("C"));

                    }

                    else
                    {
                        valorTotal = valor;
                        Console.WriteLine("Não há desconto");
                    }
                    break;

                    default:
                    Console.WriteLine("opção inválida");
                    break;


            }



            Console.ReadKey();

        }
    }
}
