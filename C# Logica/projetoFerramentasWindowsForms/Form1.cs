using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace projetoFerramentasWindowsForms
{

    /* Label 1 não precisa de NAME - pode ser Label 1.
     Label 2 precisa de um NAME (lembrar de mudar nas propriedades - tecla F4 para abrir - 
    */
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent(); //Pressionar F7 para abrir o código C#
        }

        private void btnEnviar_Click(object sender, EventArgs e) // Ao clicar no botão criado vai executar a ação
                                                                 // de enviar o nome para lblStatus
        {
            
            lblStatus.Text = txtNome.Text;  // A lblStatus vai receber o valor de txtNome
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNome.Clear();
            lblStatus.Text = ""; // alternativa para limpar o dado informado - lblStatus.Text=Sting.Empty;
            txtNome.Focus(); //após limpar o texto, retorna o cursor para o lugar inicial.
        }
    }
}
