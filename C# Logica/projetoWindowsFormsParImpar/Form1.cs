using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace projetoWindowsFormsParImpar
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        int val1;
        private void label1_Click(object sender, EventArgs e) //o resultado será exibido aqui de qualquer forma, pois foi "instanciado" embaido
        {
            
        }

        private void txtBoxSolicite_TextChanged(object sender, EventArgs e) //captura o número digitado pelo usuário
        {
            val1 = Convert.ToInt32(txtBoxSolicite.Text);
            // val1 = int.Parse(txtBoxSolicite.Text); //ALTERNATIVA ao Convert

        }

        private void btnCalculo_Click(object sender, EventArgs e)
        {
           
            if (val1 % 2 == 0)
            {
                lblResultado.Text = "Número digitado é Par"; // lblResultado.Text vai enviar e mstrar o resultado lá na label resultado
            }

            else if (val1 % 2 != 0)
            {
                lblResultado.Text = "Número digitado é Ímpar";
            }

            else
            {
                lblResultado.Text = "Operação inválida";
            }

        }
    }
}
