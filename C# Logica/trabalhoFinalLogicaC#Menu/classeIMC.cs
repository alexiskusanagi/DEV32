using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    public class classeIMC //o objetivo dessa classe é fazer o cálculo do IMC
    {

        private double peso, altura; // é a informção que o usuário vai digitar

        public double imc()
        {
            Console.Clear();
            Console.SetCursorPosition(15, 1);
            Console.WriteLine("Cálculo de Índice de Massa Corporal");
            Console.WriteLine("Digite seu peso: ");
            peso = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Digite sua altura: ");
            altura = Convert.ToDouble(Console.ReadLine());
            double imcCalculo = peso / (altura*2);


            if (imcCalculo < 16)
            {

                Console.WriteLine("Seu IMC é: " + imcCalculo.ToString("F2") + " e se enquadra em: Muito abaixo do peso");
            }
            else if (imcCalculo >= 16 && imcCalculo <= 16.9)
            {
                Console.WriteLine("Seu IMC é: " + imcCalculo.ToString("F2") + " e se enquadra em: Moderadamente abaixo do peso");

            }
            else if (imcCalculo >= 17 && imcCalculo <= 18.5)
            {
                Console.WriteLine("Seu IMC é: " + imcCalculo.ToString("F2") + " e se enquadra em: Levemente abaixo do peso");

            }
            else if (imcCalculo >= 18.6 && imcCalculo <= 24.9)
            {
                Console.WriteLine("Seu IMC é: " + imcCalculo.ToString("F2") + " e se enquadra em: Peso ideal");

            }
            else if (imcCalculo >= 25 && imcCalculo <= 29.9)
            {
                Console.WriteLine("Seu IMC é: " + imcCalculo.ToString("F2") + " e se enquadra em: Sobrepeso");

            }
            else if (imcCalculo >= 30 && imcCalculo <= 34.9)
            {
                Console.WriteLine("Seu IMC é: " + imcCalculo.ToString("F2") + " e se enquadra em: Obesidade grau I");

            }
            else if (imcCalculo >= 35 && imcCalculo <= 39.9)
            {
                Console.WriteLine("Seu IMC é: " + imcCalculo.ToString("F2") + " e se enquadra em: Obesidade grau II");

            }
            else
            {
                Console.WriteLine("Seu IMC é: " + imcCalculo.ToString("F2") + " e se enquadra em: Obesidade grau III");
            }

            return imcCalculo; // vai encerrar o método (processo) - (geralmente usado para indicar que o programa ou método foi executado com sucesso)

         

        }
    
    }
}
