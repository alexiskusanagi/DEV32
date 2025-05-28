using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* Opção 2 – Sistema de Cálculos com Menu
            Criar um sistema com menu de 10 opções de cálculo. O usuário poderá navegar pelas opções e realizar cálculos variados. 
            Exemplo de opções que devem estar presentes:

               1. Calcular IMC (peso e altura – mostrar classificação).

               2. Conversão de temperatura (Celsius ↔ Fahrenheit). ** alternativa: Fahrenheit ↔ Celsius - Celsius ↔ Kelvin

               3. Verificar se um número é par ou ímpar. ** alternativa: números primos

               4. Cálculo de média de notas (3 notas – classificação).

               5. Cálculo de juros simples.

               6. Tabuada de um número digitado. ** alternativa: sequência Fibonacci

               7. Cálculo de idade a partir do ano de nascimento.

               8. Conversão de moeda (com base em taxa fictícia). ** conversão real ↔ euro - real ↔ franco suíço - real ↔ iene

               9. Cálculo de área de figuras geométricas (círculo, quadrado, retângulo).

               10. Contador de números pares ou ímpares dentro de um intervalo.

                    Regras importantes:

                    Todas as opções devem usar if else, switch case, for ou do while, conforme a lógica exigir.

                    Deve conter uso de arrays simples e foreach em pelo menos uma das opções.

                    O menu deverá voltar ao início após cada operação, até o usuário escolher a opção "0 - Sair".     */



            //laço de repetição pois o menu
            bool inicio = true;
            while (inicio == true)
            {
                Console.Clear(); //limpeza de tela durante após a escolha da opção
                int operacao; // a opção escolhida pelo usuário para iniciar o switch case

                // o próximo passo é a criação de novas classes -> adicionar -> classe (uma classe pra cada opção do menu)
                // Após a criação das classes vêm a vinculação das classes a.k.a. as instâncias
                classeIMC imcClasse = new classeIMC(); //imcClasse foi usado no final, dentro do case 1
                ClasseTemperaturaConversao tempConvertClasse = new ClasseTemperaturaConversao();
                ClasseParImparPrimo parImparPrimoClasse = new ClasseParImparPrimo();
                ClasseNotasMedia notasMediaClasse = new ClasseNotasMedia();
                ClasseJurosSimples jurosSimplesClasse = new ClasseJurosSimples();
                ClasseTabuadaFibonacci tabuadaFibonacciClasse = new ClasseTabuadaFibonacci();
                ClasseIdadeCalculoIdade calculoIdadeClasse = new ClasseIdadeCalculoIdade();
                ClasseConversaoCambio conversaoCambioClasse = new ClasseConversaoCambio();
                ClasseAreaGeometrica areaGeometricaClasse = new ClasseAreaGeometrica();
                ClasseContadorParImpar contadorParImpar = new ClasseContadorParImpar();
                ClasseRaizCubica raizCubicaClasse = new ClasseRaizCubica();

                // opções do menu
                Console.SetCursorPosition(18, 1);
                Console.WriteLine("Menu para Sistema de Cálculos Variados:\n1. Calcular IMC \n2. Conversão de Temperatura");
                Console.WriteLine("3. Verificar se um Número é Par ou Ímpar e/ou Primo\n4. Cálculo de Média de Notas (2 alunos e 3 notas cada, mais a classificação).");
                Console.WriteLine("5. Cálculo de Juros Simples em Operações Financeiras Diversas\n6. Tabuada de um número digitado ou Sequência Fibonacci");
                Console.WriteLine("7. Cálculo de Idade a partir do Ano ou Data de Nascimento\n8. Conversão de Moeda (com base em taxa fictícia)");
                Console.WriteLine("9. Cálculo de Área de Figuras Geométricas Bidimensionais e Tridimensionais");
                Console.WriteLine("10. Contador de Números Pares ou Ímpares dentro de um intervalo\n0. Sair");

                operacao = Convert.ToInt32(Console.ReadLine());

                switch (operacao)
                {
                    case 0:
                        Environment.Exit(0);
                        break;

                    case 1:
                        imcClasse.imc();
                        break;

                    case 2:
                        tempConvertClasse.tempConvert();
                        break;

                    case 3:
                        parImparPrimoClasse.evenOddPrime();
                        break;

                    case 4:
                        notasMediaClasse.studentOverall();
                        break;

                    case 5:
                        jurosSimplesClasse.simpleInterestRate();
                        break;

                    case 6:
                        tabuadaFibonacciClasse.multiplicationTableFibonacci();
                        break;

                    case 7:
                        calculoIdadeClasse.ageCalculus();
                        break;

                    case 8:
                        conversaoCambioClasse.CurrencyExchange();
                        break;

                    case 9:
                        areaGeometricaClasse.GeometricArea();
                        break;

                    case 10:
                        contadorParImpar.EvenOddCounter();
                        break;

                    case 33:
                        raizCubicaClasse.CubicRoot();
                        break;

                }
                Console.ReadKey();
            }
        }
    }
}
