using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoProdutoDesconto
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* Crie um programa que solicite ao usuário a quantidade de produtos comprados em uma loja. 
            Para cada produto, peça o nome e o preço. 
            O programa deve calcular o valor total da compra, a média de preço dos produtos e determinar se a compra tem direito a um desconto.

            -Se o valor total for maior ou igual a R$ 500, aplicar 10% de desconto.
            -Se for entre R$ 100 e R$ 499.99, aplicar 5% de desconto.
            -Caso contrário, nenhum desconto é aplicado.

            ->>O sistema deve rodar para x produtos ->você que vai criar a qtd de vezes que terá o loop. */

            int quantidadeProdutos, totalItems=0;
            string nomeProduto;
            decimal precoProduto, media, totalPagar=0, subtotal=0, desconto;

            Console.WriteLine("Digite a quantidade de produtos comprados: ");
            quantidadeProdutos=Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= quantidadeProdutos; i++)
            {

                Console.WriteLine("Digite o nome do produto: ");
                nomeProduto = Console.ReadLine();
                Console.WriteLine("Digite o preço do produto: ");
                precoProduto = Convert.ToDecimal(Console.ReadLine());
                Console.WriteLine("Digite a quantidade do item comprado: ");
                int quantidadeItems = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine($"o item {i} - {nomeProduto} custa: {precoProduto.ToString("C")}");
                Console.WriteLine();

                
                subtotal += precoProduto *= quantidadeItems;
                totalItems += quantidadeItems;


            }
            media = subtotal / quantidadeProdutos;
            

            if (subtotal >= 500)
                {
                    desconto = (subtotal *10)/100;
                    totalPagar = subtotal - desconto;
                    Console.WriteLine($"O total de items foi: {totalItems}");
                    Console.WriteLine($"O subtotal da compra foi: {subtotal.ToString("C")}");
                    Console.WriteLine($"A média dos preços é: {media.ToString("C")}");
                    Console.WriteLine($"Houve um desconto de: {desconto.ToString("C")}");
                    Console.WriteLine($"O total a pagar é: {totalPagar.ToString("C")}");
                   

                }
                else if (subtotal >= 100 && subtotal <500)
                {
                    desconto = (subtotal *5)/100;
                    totalPagar = subtotal - desconto;
                    Console.WriteLine($"O total de items foi: {totalItems}");
                    Console.WriteLine($"O subtotal da compra foi: {subtotal.ToString("C")}");
                    Console.WriteLine($"A média dos preços é: {media.ToString("C")}");
                    Console.WriteLine($"Houve um desconto de: {desconto.ToString("C")}");
                    Console.WriteLine($"O total a pagar é: {totalPagar.ToString("C")}");
                    

                }
                else 
                {
                   Console.WriteLine($"O total de items foi: {totalItems}");
                   Console.WriteLine($"O subtotal da compra foi: {subtotal.ToString("C")}");
                   Console.WriteLine($"A média dos preços é: {media.ToString("C")}");
                   Console.WriteLine($"O total a pagar é: {subtotal.ToString("C")}");
                }
            
            

            Console.ReadKey();




        }
    }
}
