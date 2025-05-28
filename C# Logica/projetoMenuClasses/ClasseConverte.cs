using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoMenuClasses
{
    public class ClasseConverte  //o nome correto seria ClasseConverteMaiusculoOuMinusculo; é pra converter para mauisculo ou minuaculo no caso
    {
        /* para criar uma nova classe é só clicar botão direito sobre projetoMenuClasses no gerenciador de soluções e
         * escoçher a opção ADICIONAR -> CLASSE     */

        // o objetivo dessa classe é converter para maiusculo ou minusculo - o programador decide
        // quando o program.cs acessar essa classe ela visualizará apenas os elementos que estiverem como "" Public ""

        private string nome, nomeAlterado;

        // função pública para realizar a conversão
        public string AlteraNome() 
        { 
            Console.Clear();
            Console.WriteLine("Nome completo");
            nome = Console.ReadLine();
            nomeAlterado = nome.ToUpper();
            return nomeAlterado;
        }


    }
}
