namespace projetoSenacWindowsForms
{
    partial class Form1
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.CbMarca = new System.Windows.Forms.ComboBox();
            this.CbNome = new System.Windows.Forms.ComboBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.rbAVista = new System.Windows.Forms.RadioButton();
            this.rbCredito = new System.Windows.Forms.RadioButton();
            this.rbBoleto = new System.Windows.Forms.RadioButton();
            this.txtBoxValorUnitario = new System.Windows.Forms.TextBox();
            this.txtBoxQuantidade = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.txtBoxSubtotal = new System.Windows.Forms.TextBox();
            this.txtBoxValorTotal = new System.Windows.Forms.TextBox();
            this.label9 = new System.Windows.Forms.Label();
            this.txtBoxParcela1 = new System.Windows.Forms.TextBox();
            this.txtBoxParcela2 = new System.Windows.Forms.TextBox();
            this.rb12x = new System.Windows.Forms.RadioButton();
            this.rb24x = new System.Windows.Forms.RadioButton();
            this.rb36x = new System.Windows.Forms.RadioButton();
            this.rb48x = new System.Windows.Forms.RadioButton();
            this.txtBoxParcela3 = new System.Windows.Forms.TextBox();
            this.txtBoxParcela4 = new System.Windows.Forms.TextBox();
            this.btnPagar = new System.Windows.Forms.Button();
            this.btnLimpar = new System.Windows.Forms.Button();
            this.textBox5 = new System.Windows.Forms.TextBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(59, 31);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(136, 17);
            this.label1.TabIndex = 0;
            this.label1.Text = "Venda de Produto X";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(41, 83);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(121, 17);
            this.label2.TabIndex = 1;
            this.label2.Text = "Marca do Produto";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(207, 83);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(119, 17);
            this.label3.TabIndex = 2;
            this.label3.Text = "Nome do Produto";
            // 
            // CbMarca
            // 
            this.CbMarca.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.CbMarca.FormattingEnabled = true;
            this.CbMarca.Items.AddRange(new object[] {
            "In n\' Out",
            "White Castle",
            "McDonald\'s"});
            this.CbMarca.Location = new System.Drawing.Point(44, 127);
            this.CbMarca.Name = "CbMarca";
            this.CbMarca.Size = new System.Drawing.Size(121, 24);
            this.CbMarca.TabIndex = 3;
            this.CbMarca.SelectedIndexChanged += new System.EventHandler(this.CbMarca_SelectedIndexChanged);
            // 
            // CbNome
            // 
            this.CbNome.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.CbNome.FormattingEnabled = true;
            this.CbNome.Location = new System.Drawing.Point(210, 127);
            this.CbNome.Name = "CbNome";
            this.CbNome.Size = new System.Drawing.Size(121, 24);
            this.CbNome.TabIndex = 4;
            this.CbNome.SelectedIndexChanged += new System.EventHandler(this.CbNome_SelectedIndexChanged);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(41, 184);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(132, 17);
            this.label4.TabIndex = 5;
            this.label4.Text = "Tipo de Pagamento";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(232, 184);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(94, 17);
            this.label5.TabIndex = 6;
            this.label5.Text = "Valor Unitário";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(408, 184);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(82, 17);
            this.label6.TabIndex = 7;
            this.label6.Text = "Quantidade";
            // 
            // rbAVista
            // 
            this.rbAVista.AutoSize = true;
            this.rbAVista.Location = new System.Drawing.Point(44, 220);
            this.rbAVista.Name = "rbAVista";
            this.rbAVista.Size = new System.Drawing.Size(102, 21);
            this.rbAVista.TabIndex = 8;
            this.rbAVista.TabStop = true;
            this.rbAVista.Text = "À vista (5%)";
            this.rbAVista.UseVisualStyleBackColor = true;
            this.rbAVista.CheckedChanged += new System.EventHandler(this.rbAVista_CheckedChanged);
            // 
            // rbCredito
            // 
            this.rbCredito.AutoSize = true;
            this.rbCredito.Location = new System.Drawing.Point(44, 247);
            this.rbCredito.Name = "rbCredito";
            this.rbCredito.Size = new System.Drawing.Size(137, 21);
            this.rbCredito.TabIndex = 9;
            this.rbCredito.TabStop = true;
            this.rbCredito.Text = "Cartão de Crédito";
            this.rbCredito.UseVisualStyleBackColor = true;
            // 
            // rbBoleto
            // 
            this.rbBoleto.AutoSize = true;
            this.rbBoleto.Location = new System.Drawing.Point(44, 274);
            this.rbBoleto.Name = "rbBoleto";
            this.rbBoleto.Size = new System.Drawing.Size(66, 21);
            this.rbBoleto.TabIndex = 10;
            this.rbBoleto.TabStop = true;
            this.rbBoleto.Text = "Boleto";
            this.rbBoleto.UseVisualStyleBackColor = true;
            // 
            // txtBoxValorUnitario
            // 
            this.txtBoxValorUnitario.Enabled = false;
            this.txtBoxValorUnitario.Location = new System.Drawing.Point(231, 204);
            this.txtBoxValorUnitario.Name = "txtBoxValorUnitario";
            this.txtBoxValorUnitario.Size = new System.Drawing.Size(100, 23);
            this.txtBoxValorUnitario.TabIndex = 11;
            // 
            // txtBoxQuantidade
            // 
            this.txtBoxQuantidade.Location = new System.Drawing.Point(411, 204);
            this.txtBoxQuantidade.Name = "txtBoxQuantidade";
            this.txtBoxQuantidade.Size = new System.Drawing.Size(100, 23);
            this.txtBoxQuantidade.TabIndex = 12;
            this.txtBoxQuantidade.TextChanged += new System.EventHandler(this.txtBoxQuantidade_TextChanged);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(232, 230);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(60, 17);
            this.label7.TabIndex = 13;
            this.label7.Text = "Subtotal";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(413, 230);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(77, 17);
            this.label8.TabIndex = 14;
            this.label8.Text = "Valor Total";
            // 
            // txtBoxSubtotal
            // 
            this.txtBoxSubtotal.Enabled = false;
            this.txtBoxSubtotal.Location = new System.Drawing.Point(231, 247);
            this.txtBoxSubtotal.Name = "txtBoxSubtotal";
            this.txtBoxSubtotal.Size = new System.Drawing.Size(100, 23);
            this.txtBoxSubtotal.TabIndex = 15;
            // 
            // txtBoxValorTotal
            // 
            this.txtBoxValorTotal.Location = new System.Drawing.Point(411, 250);
            this.txtBoxValorTotal.Name = "txtBoxValorTotal";
            this.txtBoxValorTotal.Size = new System.Drawing.Size(100, 23);
            this.txtBoxValorTotal.TabIndex = 16;
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(59, 321);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(161, 17);
            this.label9.TabIndex = 17;
            this.label9.Text = "Quantidade de Parcelas";
            // 
            // txtBoxParcela1
            // 
            this.txtBoxParcela1.Location = new System.Drawing.Point(87, 352);
            this.txtBoxParcela1.Name = "txtBoxParcela1";
            this.txtBoxParcela1.Size = new System.Drawing.Size(100, 23);
            this.txtBoxParcela1.TabIndex = 20;
            // 
            // txtBoxParcela2
            // 
            this.txtBoxParcela2.Location = new System.Drawing.Point(87, 399);
            this.txtBoxParcela2.Name = "txtBoxParcela2";
            this.txtBoxParcela2.Size = new System.Drawing.Size(100, 23);
            this.txtBoxParcela2.TabIndex = 21;
            // 
            // rb12x
            // 
            this.rb12x.AutoSize = true;
            this.rb12x.Location = new System.Drawing.Point(30, 352);
            this.rb12x.Name = "rb12x";
            this.rb12x.Size = new System.Drawing.Size(51, 21);
            this.rb12x.TabIndex = 22;
            this.rb12x.TabStop = true;
            this.rb12x.Text = "12X";
            this.rb12x.UseVisualStyleBackColor = true;
            // 
            // rb24x
            // 
            this.rb24x.AutoSize = true;
            this.rb24x.Location = new System.Drawing.Point(30, 398);
            this.rb24x.Name = "rb24x";
            this.rb24x.Size = new System.Drawing.Size(51, 21);
            this.rb24x.TabIndex = 23;
            this.rb24x.TabStop = true;
            this.rb24x.Text = "24X";
            this.rb24x.UseVisualStyleBackColor = true;
            // 
            // rb36x
            // 
            this.rb36x.AutoSize = true;
            this.rb36x.Location = new System.Drawing.Point(219, 354);
            this.rb36x.Name = "rb36x";
            this.rb36x.Size = new System.Drawing.Size(51, 21);
            this.rb36x.TabIndex = 24;
            this.rb36x.TabStop = true;
            this.rb36x.Text = "36X";
            this.rb36x.UseVisualStyleBackColor = true;
            // 
            // rb48x
            // 
            this.rb48x.AutoSize = true;
            this.rb48x.Location = new System.Drawing.Point(219, 399);
            this.rb48x.Name = "rb48x";
            this.rb48x.Size = new System.Drawing.Size(51, 21);
            this.rb48x.TabIndex = 25;
            this.rb48x.TabStop = true;
            this.rb48x.Text = "48X";
            this.rb48x.UseVisualStyleBackColor = true;
            // 
            // txtBoxParcela3
            // 
            this.txtBoxParcela3.Location = new System.Drawing.Point(274, 354);
            this.txtBoxParcela3.Name = "txtBoxParcela3";
            this.txtBoxParcela3.Size = new System.Drawing.Size(100, 23);
            this.txtBoxParcela3.TabIndex = 26;
            // 
            // txtBoxParcela4
            // 
            this.txtBoxParcela4.Location = new System.Drawing.Point(276, 399);
            this.txtBoxParcela4.Name = "txtBoxParcela4";
            this.txtBoxParcela4.Size = new System.Drawing.Size(100, 23);
            this.txtBoxParcela4.TabIndex = 27;
            // 
            // btnPagar
            // 
            this.btnPagar.Location = new System.Drawing.Point(445, 354);
            this.btnPagar.Name = "btnPagar";
            this.btnPagar.Size = new System.Drawing.Size(85, 33);
            this.btnPagar.TabIndex = 28;
            this.btnPagar.Text = "Pagar";
            this.btnPagar.UseVisualStyleBackColor = true;
            // 
            // btnLimpar
            // 
            this.btnLimpar.Location = new System.Drawing.Point(445, 399);
            this.btnLimpar.Name = "btnLimpar";
            this.btnLimpar.Size = new System.Drawing.Size(85, 34);
            this.btnLimpar.TabIndex = 29;
            this.btnLimpar.Text = "Limpar";
            this.btnLimpar.UseVisualStyleBackColor = true;
            // 
            // textBox5
            // 
            this.textBox5.Location = new System.Drawing.Point(30, 510);
            this.textBox5.Multiline = true;
            this.textBox5.Name = "textBox5";
            this.textBox5.Size = new System.Drawing.Size(540, 113);
            this.textBox5.TabIndex = 31;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = global::projetoSenacWindowsForms.Properties.Resources.Double_dlouble_animal_style;
            this.pictureBox1.Location = new System.Drawing.Point(391, 12);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(291, 169);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox1.TabIndex = 30;
            this.pictureBox1.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(706, 666);
            this.Controls.Add(this.textBox5);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.btnLimpar);
            this.Controls.Add(this.btnPagar);
            this.Controls.Add(this.txtBoxParcela4);
            this.Controls.Add(this.txtBoxParcela3);
            this.Controls.Add(this.rb48x);
            this.Controls.Add(this.rb36x);
            this.Controls.Add(this.rb24x);
            this.Controls.Add(this.rb12x);
            this.Controls.Add(this.txtBoxParcela2);
            this.Controls.Add(this.txtBoxParcela1);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.txtBoxValorTotal);
            this.Controls.Add(this.txtBoxSubtotal);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.txtBoxQuantidade);
            this.Controls.Add(this.txtBoxValorUnitario);
            this.Controls.Add(this.rbBoleto);
            this.Controls.Add(this.rbCredito);
            this.Controls.Add(this.rbAVista);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.CbNome);
            this.Controls.Add(this.CbMarca);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Margin = new System.Windows.Forms.Padding(4);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Produtos";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.ComboBox CbMarca;
        private System.Windows.Forms.ComboBox CbNome;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.RadioButton rbAVista;
        private System.Windows.Forms.RadioButton rbCredito;
        private System.Windows.Forms.RadioButton rbBoleto;
        private System.Windows.Forms.TextBox txtBoxValorUnitario;
        private System.Windows.Forms.TextBox txtBoxQuantidade;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.TextBox txtBoxSubtotal;
        private System.Windows.Forms.TextBox txtBoxValorTotal;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.TextBox txtBoxParcela1;
        private System.Windows.Forms.TextBox txtBoxParcela2;
        private System.Windows.Forms.RadioButton rb12x;
        private System.Windows.Forms.RadioButton rb24x;
        private System.Windows.Forms.RadioButton rb36x;
        private System.Windows.Forms.RadioButton rb48x;
        private System.Windows.Forms.TextBox txtBoxParcela3;
        private System.Windows.Forms.TextBox txtBoxParcela4;
        private System.Windows.Forms.Button btnPagar;
        private System.Windows.Forms.Button btnLimpar;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.TextBox textBox5;
    }
}

