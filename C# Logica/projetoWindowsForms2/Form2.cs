using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace projetoWindowsForms2
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void lblNome_Click(object sender, EventArgs e) //vazio
        {

        }

        private void dateTimePicker1_ValueChanged(object sender, EventArgs e)
        {
            dtClendario.Value.ToShortDateString();
        }

        private void label16_Click(object sender, EventArgs e)
        {

        }

        private void label18_Click(object sender, EventArgs e)
        {

        }

        private void lblNomeR_Click(object sender, EventArgs e)
        {

        }

        private void label30_Click(object sender, EventArgs e) //nascimento
        {

        }

        private void btnLimparCampos_Click(object sender, EventArgs e)
        {
            txtBoxNome.Clear();
            txtBoxEndereco.Clear();
            txtBoxCidade.Clear();
            txtBoxCpf.Clear();
            txtBoxCep.Clear();
            txtBoxEstado.Clear();
            dtClendario.Text = DateTime.Today.ToShortDateString();
            rbFeminino.Checked = false;
            rbMasculino.Checked = false;
            listBoxLeitura.ClearSelected();
            //checkedListBoxMusica.Clear
            groupBox3.Visible = false;
            //Desmarcar os elementos do estilo musical
            foreach(int i in checkedListBoxMusica.CheckedIndices)
            {
                checkedListBoxMusica.SetItemChecked(i, false);
            }

        }

        private void groupBox3_Enter(object sender, EventArgs e)
        {
            
        }

        private void Forms2_Load(object sender, EventArgs e)
        {
            groupBox3.Visible = false;
        }

        private void btnGerarDados_Click(object sender, EventArgs e)
        {
            groupBox3.Visible = true;
            lblNomeR.Text = txtBoxNome.Text;
            lblCpfR.Text = txtBoxCpf.Text;
            lblCidade.Text = txtBoxCidade.Text;
            lblEndereco.Text = txtBoxEndereco.Text;
            lblCep.Text = txtBoxCep.Text;
            lblEstado.Text = txtBoxEstado.Text;
            lblNascimento.Text=dtClendario.Text;
            if (rbFeminino.Checked)
            {
                lblSexo.Text=rbFeminino.Text;
            }
            else
            {
                lblSexo.Text=rbMasculino.Text;
            }
            lblMusica.Text=checkedListBoxMusica.Text;
            lblLeitura.Text = listBoxLeitura.Text;
            lblInformacoesAdicionais.Text = txtBoxInformacoesAdicionais.Text;

            if (txtBoxNome.Text == "" || txtBoxCpf.Text == "" || txtBoxCidade.Text== "")
            {
                MessageBox.Show("Preencha os campos", "Campo Vazio");
            }
        }

        private void txtBoxNome_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void toolTip1_Popup(object sender, PopupEventArgs e)
        {
            if (txtBoxNome.Text == "")
            {
                //MessageBox.Show("Preencha os campos", "Campo Vazio");
            }
        }

        private void checkedListBoxMusica_SelectedIndexChanged(object sender, EventArgs e)// vazio
        {

        }

        // mascara CPF. usar números 0 ou 9 exemplo 000,000,000-00 (lembrando que se usa VIRGULA para aparecer PONTO e vice-versa.
        private void txtBoxCpf_MaskInputRejected(object sender, MaskInputRejectedEventArgs e)
        {

        }
    }
}
