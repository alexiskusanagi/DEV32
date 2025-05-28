using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoBancoC_WindowsForms
{
    internal class USER_CLASS
    {
		//PROPFUL + TAB TAB

		private int user_id;

		public int User_id
		{
			get { return user_id; }
			set { user_id = value; }
		}

		private string user_nome;

		public string User_nome
		{
			get { return user_nome; }
			set { user_nome = value; }
		}

		private int user_cpf;

		public int User_cpf
		{
			get { return user_cpf; }
			set { user_cpf = value; }
		}
		
		private string user_end;

		public string User_end
        {
			get { return user_end; }
			set { user_end = value; }
		}

		private int user_end_num;

		public int User_end_num
        {
			get { return user_end_num; }
			set { user_end_num = value; }
		}

		private DateTime user_nascimento;

		public DateTime User_nascimento
        {
			get { return user_nascimento; }
			set { user_nascimento = value; }
		}

		private string user_sexo;

		public string User_sexo
		{
			get { return user_sexo; }
			set { user_sexo = value; }
		}

		private int user_cel;

		public int User_cel
        {
			get { return user_cel; }
			set { user_cel = value; }
		}

		private string user_cidade;

		public string User_cidade
        {
			get { return user_cidade; }
			set { user_cidade = value; }
		}

		private string user_uf;

		public string User_uf
        {
			get { return user_uf; }
			set { user_uf = value; }
		}




	}
}
