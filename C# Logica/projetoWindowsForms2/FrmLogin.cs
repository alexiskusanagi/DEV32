using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace projetoWindowsForms2
{
    public partial class FrmLogin : Form
    {
        public FrmLogin()
        {
            InitializeComponent();
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            /* 1. Validar os campos preechidos
               2. testar com usuário admin e senha 123
               3. acessar o Form1*/

            if (txtBoxUsuario.Text == "" || txtBoxSenha.Text == "") // alternativa == String.Empty
            {
                MessageBox.Show("Preencha os Campos", "Sistema TI32", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                lblResultado.Text = "Campo Obrigatório";

            }

            else if (txtBoxUsuario.Text== "admin" && txtBoxSenha.Text == "123")
            {
                lblResultado.Text = "Login Concluído com sucesso";
                Form1 form1 = new Form1();
                form1.Show();
                this.Hide(); //comando que esconde a tela de Login
                
            }

            else
            {
                lblResultado.Text = "Login não Concluído";
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
           
            txtBoxUsuario.Clear();
            txtBoxSenha.Clear();
            lblResultado.Text = "label3"; //mas pode ficar vazio.
        }
    }
}
