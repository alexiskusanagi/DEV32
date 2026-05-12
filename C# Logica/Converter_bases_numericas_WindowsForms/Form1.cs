using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Converter_bases_numericas_WindowsForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void btnConverter_Click(object sender, EventArgs e)
        {
            // 1. LIMPEZA DOS CAMPOS
            txtBinario.Clear();
            txtDecimal.Clear();
            txtHexa.Clear();

            if (string.IsNullOrWhiteSpace(txtInput.Text)) return;

            string entrada = txtInput.Text.ToUpper();
            long valorTotal = 0;

            // 2. LER AS OPÇÕES DA LISTA (clbOpcoes)
            bool querTodos = clbOpcoes.GetItemChecked(0);
            bool querBin = clbOpcoes.GetItemChecked(1);
            bool querDec = clbOpcoes.GetItemChecked(2);
            bool querHex = clbOpcoes.GetItemChecked(3);

            // 3. CÁLCULO DO VALOR DECIMAL ÚNICO (Base 36)
            for (int i = 0; i < entrada.Length; i++)
            {
                char c = entrada[i];
                int valorCaractere = char.IsDigit(c) ? c - '0' : c - 'A' + 10;
                int expoente = entrada.Length - 1 - i;
                valorTotal += valorCaractere * (long)Math.Pow(36, expoente);
            }

            // 4. BLOCO DECIMAL DIDÁTICO (Traduzindo letras para números no título)
            if (querTodos || querDec)
            {
                string repNum = "";
                foreach (char c in entrada)
                {
                    int v = char.IsDigit(c) ? c - '0' : c - 'A' + 10;
                    repNum += v + " ";
                }
                txtDecimal.Text = $"SISTEMA DECIMAL (Base 36): {repNum.Trim()}\r\n";
                txtDecimal.Text += "Fórmula Base: Σ (Dígito × 36^p)\r\n\r\n";
                string aplicacao = "Aplicação: ";
                for (int i = 0; i < entrada.Length; i++)
                {
                    int p = entrada.Length - 1 - i;
                    int v = char.IsDigit(entrada[i]) ? entrada[i] - '0' : entrada[i] - 'A' + 10;
                    aplicacao += $"({v} × 36^{p})";
                    if (p > 0) aplicacao += " + ";
                }
                txtDecimal.Text += $"{aplicacao} = {valorTotal}";
            }

            // 5. BLOCO BINÁRIO DIDÁTICO
            if (querTodos || querBin)
            {
                string b = Convert.ToString(valorTotal, 2);
                txtBinario.Text = $"SISTEMA BINÁRIO: {b}\r\n";
                txtBinario.Text += "Fórmula Base: Σ (bit × 2^p)\r\n\r\n";
                string aplicacao = "Aplicação: ";
                for (int i = 0; i < b.Length; i++)
                {
                    if (b[i] == '1')
                    {
                        int p = b.Length - 1 - i;
                        aplicacao += $"2^{p} + ";
                    }
                }
                txtBinario.Text += $"{aplicacao.TrimEnd(' ', '+')} = {valorTotal}";
            }

            // 6. BLOCO HEXADECIMAL DIDÁTICO
            if (querTodos || querHex)
            {
                string h = valorTotal.ToString("X");
                txtHexa.Text = $"SISTEMA HEXADECIMAL: {h}\r\n";
                txtHexa.Text += "Fórmula Base: Σ (Dígito × 16^p)\r\n\r\n";
                string aplicacao = "Aplicação: ";
                for (int i = 0; i < h.Length; i++)
                {
                    int p = h.Length - 1 - i;
                    int val = Convert.ToInt32(h[i].ToString(), 16);
                    aplicacao += $"({val} × 16^{p})";
                    if (p > 0) aplicacao += " + ";
                }
                txtHexa.Text += $"{aplicacao} = {valorTotal}";
            }
        }

        private void btnApagar_Click(object sender, EventArgs e)
        {
            // Limpa o texto de entrada
            txtInput.Clear();

            // Limpa todos os campos de resultado e fórmula
            txtBinario.Clear();
            txtDecimal.Clear();
            txtHexa.Clear();

            // Desmarca todos os itens do CheckedListBox
            for (int i = 0; i < clbOpcoes.Items.Count; i++)
            {
                clbOpcoes.SetItemChecked(i, false);
            }

            // Devolve o foco para o campo de entrada para o usuário digitar de novo
            txtInput.Focus();
        }
    }
}
