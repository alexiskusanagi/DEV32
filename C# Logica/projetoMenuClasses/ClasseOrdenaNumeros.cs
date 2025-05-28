using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoMenuClasses
{
    public class ClasseOrdenaNumeros
    {/* para criar uma nova classe é só clicar botão direito sobre projetoMenuClasses no gerenciador de soluções e
         * escoçher a opção ADICIONAR -> CLASSE     */

        // vai ordenar 3 números de forma crescente 
        
        private int a, b, c, auxiliar;

        public int organizar()
        {
        
        
        Console.Clear();
        Console.WriteLine("Digite o primeiro número");
            a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite o segundo número");
            b = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite o terceiro número");
            c = Convert.ToInt32(Console.ReadLine());

            //de ordenar os númeors

            if (a>b) { auxiliar =a ; a=b ; b = auxiliar;}
            if (a>c) { auxiliar =a ; a=c ; c = auxiliar;}
            if (b>c) { auxiliar =b ; b=c ; c = auxiliar;}

            // exibir os dados ordenados
            Console.WriteLine($"Os Numeros ordenados: {a}, {b}, {c}");
            return 0;  // esse comando vai encerrar o método (processo) - (geralmente usado para indicar que o programa
                      //ou método foi executado com sucesso) - pode ser usado com while-nesse caso ele encerra o loop antes de o
                      // prórpio terminar todas as iterações



        }

    }
}
