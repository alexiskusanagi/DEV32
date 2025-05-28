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
    public partial class frmMenu : Form
    {
        public frmMenu()
        {
            InitializeComponent();
        }

        private void btnAlteraTela_Click(object sender, EventArgs e)
        {
            //vai chamar a tela do Form1
            Form1 form = new Form1(); //instancia do form
            form.ShowDialog(); // exibindo a tela

        }
    }
}
