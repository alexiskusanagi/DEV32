using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoMenuInterativo
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* ATIVIDADE 1: MENU INTERATIVO

            CRIE UM NOVO PROJETO ONDE TENHA O SEGUINTE MENU:
            ESCOLHA UMA OPÇÃO ABAIXO:
            1- CONVERTER TEXTO
            2- VERIFICAR PAR OU ÍMPAR
            3- CALCULAR O QUADRADO DO NÚMERO
            4- CALCULAR A MÉDIA DE 3 VALORES FINANCEIROS
            5- SAIR DO SISTEMA

            AS AÇÕES SERÃO:
            1->A PESSOA VAI INSERIR UM TEXTO E SERÁ CONVERTIDO PARA MAIÚSCULO
            2->A PESSOA VAI INSERIR UM Nº INTEIRO E O SISTEMA VAI VERIFICAR SE É PAR OU ÍMPAR
            3->A PESSOA VAI INSERIR UM Nº INTEIRO E O SISTEMA VAI INFORMAR O QUADRADO DESSE VALOR
            4->A PESSOA VAI INFORMAR 3 VALORES DECIMAIS E O SISTEMA DEVERÁ CALCULAR A MÉDIA DOS VALORES
            5->SOMENTE QUANDO A PESSOA INFORMAR A OPÇÃO 5, QUE O SISTEMA VAI FINALIZAR.  */

            string texto;
            int parImpar, numeroQuadrado, operacao;
            decimal valor1, valor2, valor3, media;

            while (true)
            {

                Console.WriteLine("Selecione uma das opções abaixo: \n1- CONVERTER TEXTO \n2- VERIFICAR PAR OU ÍMPAR \n3- CALCULAR O QUADRADO DO NÚMERO \n4- CALCULAR A MÉDIA DE 3 VALORES FINANCEIROS \n5- SAIR DO SISTEMA ");
                operacao = Convert.ToInt32(Console.ReadLine());

                switch (operacao)
                {
                    case 1:
                        Console.WriteLine("Digite um texto qualquer: ");
                        texto = Console.ReadLine();
                        Console.WriteLine(texto.ToUpper());
                        Console.WriteLine();
                        Console.WriteLine("Presione qualquer tecla para continuar");
                        Console.WriteLine();
                        break;
                    case 2:
                        Console.WriteLine("Digite um número: ");
                        parImpar = Convert.ToInt32(Console.ReadLine());
                        if (parImpar % 2 == 0)
                        {
                            Console.WriteLine($"O número {parImpar} é: Par");
                            Console.WriteLine();
                            Console.WriteLine("Presione qualquer tecla para continuar");
                            Console.WriteLine();
                        }

                        else
                        {
                            Console.WriteLine($"O número {parImpar} é: Ímpar");
                            Console.WriteLine();
                            Console.WriteLine("Presione qualquer tecla para continuar");
                            Console.WriteLine();
                        }
                        break;

                    case 3:
                        Console.WriteLine("Digite um número inteiro para calcular o quadrado do número digitado: ");
                        numeroQuadrado = Convert.ToInt32(Console.ReadLine());
                        numeroQuadrado = numeroQuadrado * numeroQuadrado; //alternativa, usar - math.pow(valor, 2);
                        Console.WriteLine($"O quadrado do número digitado é: {numeroQuadrado}");
                        Console.WriteLine();
                        Console.WriteLine("Presione qualquer tecla para continuar");
                        Console.WriteLine();
                        break;

                    case 4:
                        Console.WriteLine("Quando solicitado, digite três valores para calcular a média dos mesmos");
                        Console.WriteLine("Digite o primeiro valor: ");
                        valor1 = Convert.ToDecimal(Console.ReadLine());
                        Console.WriteLine("Digite o segundo valor: ");
                        valor2 = Convert.ToDecimal(Console.ReadLine());
                        Console.WriteLine("Digite o terceiro valor: ");
                        valor3 = Convert.ToDecimal(Console.ReadLine());
                        media = (valor1 + valor2 + valor3) / 3;
                        Console.WriteLine($"A media dos valores {valor1.ToString("C")}, {valor2.ToString("C")} e {valor3.ToString("C")} é: {media.ToString("C")}");
                        Console.WriteLine();
                        Console.WriteLine("Presione qualquer tecla para continuar");
                        Console.WriteLine();
                        break;

                    case 5:
                        Environment.Exit(0);
                        break;

                        default:
                        Console.WriteLine("Operação inválida. Tente novamente.");
                        Console.WriteLine();
                        break;

                }

                Console.ReadKey();
            }
        }
    }
}
