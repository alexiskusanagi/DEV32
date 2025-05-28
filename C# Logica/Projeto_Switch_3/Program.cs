using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Switch_3
{
    public class Program
    {
        static void Main(string[] args)
        {

            /* trabalhar com switch-case e tratar a variável 
              string antes de acionar o switch */
            Console.WriteLine("Digite M ou F");
            string genero;

            // tratar a variável genero para letra maiusculo
            genero = mgenero.string.ToUpper(); //.string.toLower();

            switch (mgenero)
            {
                case 1: Console.WriteLine("Masculino");
                    break;
                case 2: Console.WriteLine("Feminino");
                    break;
                default: Console.WriteLine("Opção inválida");
                    break;
            }

            Console.ReadKey();

        }
    }
}



