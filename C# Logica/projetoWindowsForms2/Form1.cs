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
    /*combo box - proprioedade dropdown style dropdownlist  para não deixar o usuário digitar

    label abreviado lbl
    checkbox abreviado cb

    */
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            lblDia.Text = DateTime.Now.ToLongDateString();//vai mostrar a  hora completa
            toolTip1.SetToolTip(txtBoxDica, "Preencha o Nome.");
        }
        //declaração de variável global - fora dos private void - estarão disponíveis para esse form inteiro
        int val1, val2, total;

        private void label1_Click(object sender, EventArgs e) //valor 1
        {

        }

        private void button1_Click(object sender, EventArgs e) //SOMAR  (as funções subtrair, dividir e multiplicar estão mais para baixo)
        {
            // validar se os textbox estão preenchidos
            if (txtValor1.Text == "" || txtValor2.Text == "") 
            {
                lblResultado.Text = "Preencha os campos.";
                //exibir a mensagem em popup
                MessageBox.Show("Preencha os campos", "Sistema ABC");
            }

            else
            {
                // atribuir os valores dos text box para as variáveis declaradas
                val1 = Convert.ToInt32(txtValor1.Text);
                val2 = Convert.ToInt32(txtValor2.Text);
                // efetuar o cálculo
                total = val1 + val2;
                //exibir o resultado da lblResultado
                lblResultado.Text = total.ToString();
            }
           

        }

        private void btnDividir_Click(object sender, EventArgs e) //DIVIDIR (funções multiplicar e subtrair estão para baixo. Somar está para cima)
        {
            // validar se os textbox estão preenchidos
            if (txtValor1.Text == "" || txtValor2.Text == "")
            {
                lblResultado.Text = "Preencha os campos.";
            }
            else if (txtValor2.Text == "0")
            {
                lblResultado.Text = "Erro. Tentativa de divisão por Zero";
                txtValor2.Clear();
                txtValor2.Focus(); //para o cursor ficar piscando nesse campo
            }
            else
            {
                // atribuir os valores dos text box para as variáveis declaradas
                val1 = Convert.ToInt32(txtValor1.Text);
                val2 = Convert.ToInt32(txtValor2.Text);
                // efetuar o cálculo
                total = val1 / val2;
                //exibir o resultado da lblResultado
                lblResultado.Text = total.ToString();
            }

        }

        private void label3_Click(object sender, EventArgs e) // rótulo (label) total valores calculadora
        {

        }
        // função/Método sen reotrno que pode ser usada apenas nesse form1
        private void Limpar()
        {
            txtValor1.Clear();
            txtValor2.Clear();
            lblResultado.Text = "";
            txtValor1.Focus();
        }
        private void btnLimpar_Click(object sender, EventArgs e) // Limpar valores calculadora
        {
            Limpar();
        }

        private void label2_Click(object sender, EventArgs e) //valor 2
        {

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            // vai exibir a hora corrente
            lblHora.Text = DateTime.Now.ToLongTimeString(); //formato longo hh.mm.ss

        }

        private void rbAzul_CheckedChanged(object sender, EventArgs e)
        {
            // ao clicar no rbAzul vai atribuir o texto no lblCor
            lblCor.Text=rbAzul.Text;
            //lblAzul.Text=azul
        }

        private void rbAmarelo_CheckedChanged(object sender, EventArgs e)
        {
            lblCor.Text = rbAmarelo.Text;
        }

        private void ckItem1_CheckedChanged(object sender, EventArgs e)
        {
            // ao marcar o item 1 vai desmarcar o outro item2
            if (ckItem1.Checked==true) //vai validar se está checked 
            {
                ckItem2.Checked = false;
                lblItem.Text = "Você escolheu o Item 1!";
            }

            else
            {
                lblItem.Text = "";
            }
         }

        private void ckItem2_CheckedChanged(object sender, EventArgs e)
        {
            if (ckItem2.Checked == true) //vai validar se está checked 
            {
                ckItem1.Checked = false;
                lblItem.Text = "Você escolheu o Item 2!";
            }

            else
            {
                lblItem.Text = "";
            }
        }

        private void lblResultado_Click(object sender, EventArgs e) // resultado calculadora
        {

        }

        private void groupBox1_Enter(object sender, EventArgs e) // Calculadora group Box
        {

        }

        private void dtCalendario_ValueChanged(object sender, EventArgs e) //Calendário
        {
            //Ao alterar o valor da data faça...
            lblData.Text = dtCalendario.Value.ToString(); //Para mostrar da e horário
                                                          // .ToShortDateString(); Para mostrar só a data, sem o horário.

        }

        private void cbNome_SelectedIndexChanged(object sender, EventArgs e) //comboBox
        {
            //ao selecionar um nome, vai atribuir para lblNome
            lblNome.Text = cbNome.Text;
            lblIndice.Text = cbNome.SelectedIndex.ToString();

        }

        private void btnApagar_Click(object sender, EventArgs e)
        {
            cbNome.SelectedIndex = -1; //para mostrar o índice de nome de 0 até 4.
            lblIndice.Text = "";
            lblNome.Text = "";

        }

        private void label7_Click(object sender, EventArgs e)
        {

        }

        private void txtBoxNumero_KeyPress(object sender, KeyPressEventArgs e)
        {
            //vai restringir a digitação de Letras
            if (!System.Text.RegularExpressions.Regex.IsMatch(e.KeyChar.ToString(),"\\d"))
            {
                e.Handled = true;
            }
        }

        private void toolTip1_Popup(object sender, PopupEventArgs e)//em branco
        {

        }

        private void txtBoxDica_TextChanged(object sender, EventArgs e) //em branco
        {

        }

        private void btnSubtrair_Click(object sender, EventArgs e) //SUBTRAIR (funções somar e dividir estão acima do código, multiplicar está para baixo)
        {
            // validar se os textbox estão preenchidos
            if (txtValor1.Text == "" || txtValor2.Text == "")
            {
                lblResultado.Text = "Preencha os campos.";
            }

            else
            {
                // atribuir os valores dos text box para as variáveis declaradas
                val1 = Convert.ToInt32(txtValor1.Text);
                val2 = Convert.ToInt32(txtValor2.Text);
                // efetuar o cálculo
                total = val1 - val2;
                //exibir o resultado da lblResultado
                lblResultado.Text = total.ToString();
            }

        }

        private void btnMultiplicar_Click(object sender, EventArgs e) //MULTIPLICAR (funções somar, subtrair e dividir estão acima no código)
        {
            // validar se os textbox estão preenchidos
            if (txtValor1.Text == "" || txtValor2.Text == "")
            {
                lblResultado.Text = "Preencha os campos.";
            }

            else
            {
                // atribuir os valores dos text box para as variáveis declaradas
                val1 = Convert.ToInt32(txtValor1.Text);
                val2 = Convert.ToInt32(txtValor2.Text);
                // efetuar o cálculo
                total = val1 * val2;
                //exibir o resultado da lblResultado
                lblResultado.Text = total.ToString();
            }
        }
    }
}
