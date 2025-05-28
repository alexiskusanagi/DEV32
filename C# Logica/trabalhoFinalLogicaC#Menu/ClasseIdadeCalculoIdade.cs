using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    internal class ClasseIdadeCalculoIdade
    {
        private int anoNascimento;


        public int ageCalculus()
        {
            Console.Clear();
            while (true)
            {
                DateTime anoAtual;//utilizando DateTime para chamar a variável anoAtual
                anoAtual = DateTime.Now; //definindo valores e a data/hora pra variável anoAtual

                Console.SetCursorPosition(15, 1);
                Console.WriteLine("Sistema para cálculo de Idade\nSelecione a opção desejada:\n1. Para realizar o cálculo valendo-se apenas do ano (método impreciso)\n2. Para realizar o cálculo valendo-se da data completa - dia, mês, ano - (método preciso) \n0. Para retornar ao Menu Anterior");
                int opcao = Convert.ToInt32(Console.ReadLine());

                switch (opcao)
                {
                    case 0:
                        Console.WriteLine("Retornando ao menu anterior. Presione qualquer tecla para continuar.");
                        return 0;

                    case 1:
                        Console.WriteLine("Digite o ano de nascimento: ");
                        anoNascimento = Convert.ToInt32(Console.ReadLine());
                        int idade = anoAtual.Year - anoNascimento; // .Year transforma a variável DateTime (anoAtual) em Int

                        Console.WriteLine($"A idade calculada é: {idade}");
                        Console.ReadKey();
                        Console.Clear();

                        continue;

                    case 2:
                        // As duas primeiras linhas dessa parte do código foram sugestão do COPILOT, eu não conhecia o comando:
                        // CultureInfo currentCulture e nem o comando: currentCulture.DateTimeFormat.ShortDatePattern
                        CultureInfo currentCulture = CultureInfo.CurrentCulture;// buscar a "cultura" - formato de data - do sistema,
                                                                                // se está no padrão Brasil, E.U.A., Suiça, etc

                        Console.WriteLine("Formato de data curto: " + currentCulture.DateTimeFormat.ShortDatePattern); //Exibir a "cultura" do sistema
                        Console.WriteLine();
                        Console.WriteLine("digite a data de nascimento no formato dd/mm/aaaa (não se esqueça das /): ");
                        DateTime BirthDate = Convert.ToDateTime(Console.ReadLine());

                        int age = anoAtual.Year - BirthDate.Year;


                        if (anoAtual < BirthDate.AddYears(age)) //método BirthDate.AddYears(age) sugerido pelo COPILOT (eu também não conhecia),
                                                                //esse método adiciona a idade e verifica se a data
                                                                //de aniversário do ano atual já passou ou não

                        {
                            age--; //se o aniversário ainda não ocorreu no ano atual, esse ano de idade será decrementado
                        }


                        Console.WriteLine($"A idade calculada é: {age}");
                        Console.ReadKey();
                        Console.Clear();

                        continue;


                    default:
                        Console.WriteLine("Opção inválida. Tente novamente.");
                        Console.WriteLine();
                        break;
                }


            }
        }

    }
}
