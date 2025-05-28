using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace projetoSenacWindowsForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void CbMarca_SelectedIndexChanged(object sender, EventArgs e)
        {
            //se receber nome da marca, mostrar produtos referentes a marca
            if(CbMarca.SelectedIndex == 0)
            {
                CbNome.Items.Clear();
                CbNome.Items.Add ( "Double Double");
                CbNome.Items.Add ( "Double Double Animal Style");
            }

            else if (CbMarca.SelectedIndex == 1)
            {
                CbNome.Items.Clear();
                CbNome.Items.Add("Original Slider");
                CbNome.Items.Add("Cheese Slider");
            }

            else
            {
                CbNome.Items .Clear();
                CbNome.Items.Add("Big Mac");
                CbNome.Items.Add("Quarter Pounder");
            }
        }

        private void CbNome_SelectedIndexChanged(object sender, EventArgs e)
        {
            //se o produto x for selecionado, o preço vai aparecer no campo subtotal.
            if(CbNome.Text == "Double Double" || CbNome.Text == "Original Slider" || CbNome.Text == "Big Mac")
            {
                txtBoxValorUnitario.Text = ""; //desnecessário porque não é aqui que se usa essa linha de código para apagar o valor no subtotal quando trocamos a marca do produto selecionada.
                txtBoxValorUnitario.Text = "4,99"; //preço do valor unitário
            }

            else if (CbNome.Text == "Double Double Animal Style")
            {
                txtBoxValorUnitario.Text = "";
                txtBoxValorUnitario.Text = "6,79";
            }

            else
            {
                txtBoxValorUnitario.Text = "";
                txtBoxValorUnitario.Text = "3,49";
            }
        }

        private void txtBoxQuantidade_TextChanged(object sender, EventArgs e)
        {
            //valor de quantidade vai definir o subtotal
            double quantidade, subtotal;
            quantidade= Convert.ToDouble(txtBoxQuantidade.Text);
           

            if (txtBoxValorUnitario.Text == "4,99")
            {

              subtotal =  quantidade *4.99;
                txtBoxSubtotal.Text = subtotal.ToString("C");
            }

            else if(txtBoxValorUnitario.Text == "6,79")
            {
                subtotal = quantidade * 6.79;
                txtBoxSubtotal.Text = subtotal.ToString("C");
            }

            else 
            {
                subtotal = quantidade * 3.49;
                txtBoxSubtotal.Text = subtotal.ToString("C");
            }

        }

        private void rbAVista_CheckedChanged(object sender, EventArgs e)
        {
            double desconto, subtotal, valorTotal;
            subtotal = txtBoxSubtotal.Text;
            if (rbAVista.Checked) 
            {
                desconto = txtBoxSubtotal.Text * 5 / 100;
            }
        }
    }
}
