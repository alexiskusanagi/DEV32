using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    public class ClasseTemperaturaConversao
    {
       
            private double C, F, K; //o usuário vai digitar a temperatura a ser convertida para
                                    //outra unidade de medida (C° -> F°) ou (F° -> K°) ou (K° -> C°)
            public double tempConvert()
            {
            Console.Clear();
            //double C = 0, F = 32, K = 273.15;

            Console.SetCursorPosition(15, 1);
            Console.WriteLine("Conversão de Temperatura");
            Console.WriteLine("Escolha a conversão de temperatura que deseja efetuar: \n1. Celsius para Fahrenheit\n2. Celsius para Kelvin\n3. Fahrenheit para Celsius\n4. Fahrenheit para Kelvin\n5. Kelvin para Celsius\n6. Kelvin para Fahrenheit \n0. Para retornar ao Menu Anterior");
                int operacao = Convert.ToInt32(Console.ReadLine());

                switch (operacao)
                {
                    case 0:
                    Console.WriteLine("Retornando ao menu anterior. Presione qualquer tecla para continuar.");
                        return 0;
                        

                    case 1:

                        Console.WriteLine("Celsius para Fahrenheit");
                        C = Convert.ToDouble(Console.ReadLine());
                        double CelsiusParaFahrenheit = (F = (C * 1.8) + 32);
                        Console.WriteLine($"{C}°C = {CelsiusParaFahrenheit}°F");
                        return CelsiusParaFahrenheit;

                    case 2:
                        Console.WriteLine("Celsius para Kelvin");
                        C = Convert.ToDouble(Console.ReadLine());
                        double CelsiusParaKelvin = K = C + 273.15;
                        Console.WriteLine($"{C}°C = {CelsiusParaKelvin}°K");
                        return CelsiusParaKelvin;

                    case 3:
                        Console.WriteLine("Fahrenheit para Celsius");
                        F = Convert.ToDouble(Console.ReadLine());
                        double FahrenheitParaCelsius = ((F - 32) / 1.8);
                        Console.WriteLine($"{F}°F = {FahrenheitParaCelsius}°C");
                        return FahrenheitParaCelsius;

                    case 4:
                        Console.WriteLine("Fahrenheit para Kelvin");
                        F = Convert.ToDouble(Console.ReadLine());
                        double FahrenheitParaKelvin = ((F + 479.67) * (5 / 9));
                        Console.WriteLine($"{F}°F = {FahrenheitParaKelvin}°K");
                        return FahrenheitParaKelvin;

                    case 5:
                        Console.WriteLine("Kelvin para Celsius");
                        K = Convert.ToDouble(Console.ReadLine());
                        double KelvinParaCelsius = C = (K - 273.15);
                        Console.WriteLine($"{K}°K = {KelvinParaCelsius}°C");
                        return KelvinParaCelsius;

                    case 6:
                        Console.WriteLine("Kelvin para Fahrenheit");
                        K = Convert.ToDouble(Console.ReadLine());
                        double KelvinParaFahrenheit = F = ((K - 273.15) * 1.8) - 32;
                        Console.WriteLine($"{K}°K = {KelvinParaFahrenheit}°F");
                        return KelvinParaFahrenheit;

                default:
                    Console.WriteLine("Operação Inválida");
                    break;

            }

                return 0;
            }


    }
}
