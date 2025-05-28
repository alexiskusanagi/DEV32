using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace projetoWindowsFormsMediaCalculo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        /*  atividade 2
         Crie um novo projeto windows forms que calcule a média aritimética com 4 notas decimais.
        Utilize labels para identificar os campos
        receba as notas em textboxes (txtnota1, textnota2...)
        tenha 2 botoes calcular e limpar (btncalcular)
        se media >= 8 aprovado
        se media >=5 e <8 recuperação
        se media<5 reprovad
        exiba as informações em label.(lblresultado)

         */

        //declarando variáveis
        decimal nota1, nota2, nota3, nota4, media;

        private void txtBoxNota2_TextChanged(object sender, EventArgs e) //pode ficar em branco, pois o comando para exibir aqui é dado direto no Calcular
        {
            
        }

        private void txtBoxNota3_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void txtBoxNota4_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void lblResultado_Click(object sender, EventArgs e) //media resultado
        {
            lblResultado.Text = btnCalcular.Text; //vai buscar o resultado em cálculo
        }
        
        /* Alternativa AO BOTÃO Limpar
           private void LimparTudo() 
        {
            txtBoxNota1.Clear();
            txtBoxNota2.Clear();
            txtBoxNota3.Clear();
            txtBoxNota4.Clear();
            lblResultado.Text = "";
            txtBoxNota1.Focus();
        }  */

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            //LimparTudo();
            txtBoxNota1.Clear();
            txtBoxNota2.Clear();
            txtBoxNota3.Clear();
            txtBoxNota4.Clear();
            lblResultado.Text = "";
            
        }

        private void btnCalcular_Click(object sender, EventArgs e) //realiza o calculo da média
        {
            // 1 calcular campos em branco
            // 2 capturar os valores dos textBoxes para as variáveis
            // 3 efetuar o cálculo
            // 4 analisar as médias
            // 5 exibir os resultados

            if (txtBoxNota1.Text =="" || txtBoxNota2.Text == "" || txtBoxNota3.Text == "" || txtBoxNota4.Text == "") //if campos em branco
            {
                lblResultado.Text = "Preencha os campos";
            }

            else
            {
                // capturar valores
                nota1 = Convert.ToDecimal(txtBoxNota1.Text);
                nota2 = Convert.ToDecimal(txtBoxNota2.Text);
                nota3 = Convert.ToDecimal(txtBoxNota3.Text);
                nota4 = Convert.ToDecimal(txtBoxNota4.Text);
                // efetuando o calculo
                media = (nota1 + nota2 + nota3 + nota4) / 4;
               
                //exibindo resultados dentro do if
                if (media >= 8)
                {
                    lblResultado.Text = $"média: {media.ToString("F2")}  Aprovado";
                }

                else if (media >= 5 && media < 8)
                {
                    lblResultado.Text = $"média: {media.ToString("F2")} Recuperação";
                }

                else
                {
                    lblResultado.Text = $"média: {media.ToString("F2")} Reprovado";
                }

            }
            
        }

        private void txtBoxNota1_TextChanged(object sender, EventArgs e)
        {
           
        }

        private void lblNota1_Click(object sender, EventArgs e) //Enunciado nota 1 - fica vazio
        {

        }

        private void lblNota3_Click(object sender, EventArgs e) //Enunciado nota 2 - fica vazio
        {

        }
    }
}
