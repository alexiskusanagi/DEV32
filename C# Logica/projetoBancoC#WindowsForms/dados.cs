using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoBancoC_WindowsForms
{
    internal class dados
    {
        //string de conexão com o banco

        public static string Conexao
        {
            get 
            {
               return $"Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=\"C:\\Users\\alexis.hskamizaki\\OneDrive - SENAC - SP\\Documentos\\bancoC#.mdf\";Integrated Security=False;Connect Timeout=30";
            }
        }


    }
}
