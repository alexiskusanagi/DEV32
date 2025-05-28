namespace projetoWindowsFormsMediaCalculo
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
            this.lblNota1 = new System.Windows.Forms.Label();
            this.lblNota2 = new System.Windows.Forms.Label();
            this.lblNota3 = new System.Windows.Forms.Label();
            this.lblNota4 = new System.Windows.Forms.Label();
            this.txtBoxNota1 = new System.Windows.Forms.TextBox();
            this.txtBoxNota2 = new System.Windows.Forms.TextBox();
            this.txtBoxNota3 = new System.Windows.Forms.TextBox();
            this.txtBoxNota4 = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.btnCalcular = new System.Windows.Forms.Button();
            this.btnLimpar = new System.Windows.Forms.Button();
            this.lblMédia = new System.Windows.Forms.Label();
            this.lblResultado = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // lblNota1
            // 
            this.lblNota1.AutoSize = true;
            this.lblNota1.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNota1.Location = new System.Drawing.Point(34, 45);
            this.lblNota1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.lblNota1.Name = "lblNota1";
            this.lblNota1.Size = new System.Drawing.Size(149, 17);
            this.lblNota1.TabIndex = 0;
            this.lblNota1.Text = "Digite a primeira Nota ";
            this.lblNota1.Click += new System.EventHandler(this.lblNota1_Click);
            // 
            // lblNota2
            // 
            this.lblNota2.AutoSize = true;
            this.lblNota2.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNota2.Location = new System.Drawing.Point(34, 81);
            this.lblNota2.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblNota2.Name = "lblNota2";
            this.lblNota2.Size = new System.Drawing.Size(149, 17);
            this.lblNota2.TabIndex = 1;
            this.lblNota2.Text = "Digite a segunda Nota";
            // 
            // lblNota3
            // 
            this.lblNota3.AutoSize = true;
            this.lblNota3.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNota3.Location = new System.Drawing.Point(34, 118);
            this.lblNota3.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblNota3.Name = "lblNota3";
            this.lblNota3.Size = new System.Drawing.Size(142, 17);
            this.lblNota3.TabIndex = 2;
            this.lblNota3.Text = "Digite a terceira Nota";
            this.lblNota3.Click += new System.EventHandler(this.lblNota3_Click);
            // 
            // lblNota4
            // 
            this.lblNota4.AutoSize = true;
            this.lblNota4.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNota4.Location = new System.Drawing.Point(34, 155);
            this.lblNota4.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblNota4.Name = "lblNota4";
            this.lblNota4.Size = new System.Drawing.Size(138, 17);
            this.lblNota4.TabIndex = 3;
            this.lblNota4.Text = "Digite a Quarta Nota";
            // 
            // txtBoxNota1
            // 
            this.txtBoxNota1.Location = new System.Drawing.Point(191, 43);
            this.txtBoxNota1.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtBoxNota1.Name = "txtBoxNota1";
            this.txtBoxNota1.Size = new System.Drawing.Size(88, 21);
            this.txtBoxNota1.TabIndex = 4;
            this.txtBoxNota1.TextChanged += new System.EventHandler(this.txtBoxNota1_TextChanged);
            // 
            // txtBoxNota2
            // 
            this.txtBoxNota2.Location = new System.Drawing.Point(191, 81);
            this.txtBoxNota2.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtBoxNota2.Name = "txtBoxNota2";
            this.txtBoxNota2.Size = new System.Drawing.Size(88, 21);
            this.txtBoxNota2.TabIndex = 5;
            this.txtBoxNota2.TextChanged += new System.EventHandler(this.txtBoxNota2_TextChanged);
            // 
            // txtBoxNota3
            // 
            this.txtBoxNota3.Location = new System.Drawing.Point(191, 118);
            this.txtBoxNota3.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtBoxNota3.Name = "txtBoxNota3";
            this.txtBoxNota3.Size = new System.Drawing.Size(88, 21);
            this.txtBoxNota3.TabIndex = 6;
            this.txtBoxNota3.TextChanged += new System.EventHandler(this.txtBoxNota3_TextChanged);
            // 
            // txtBoxNota4
            // 
            this.txtBoxNota4.Location = new System.Drawing.Point(191, 155);
            this.txtBoxNota4.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtBoxNota4.Name = "txtBoxNota4";
            this.txtBoxNota4.Size = new System.Drawing.Size(88, 21);
            this.txtBoxNota4.TabIndex = 7;
            this.txtBoxNota4.TextChanged += new System.EventHandler(this.txtBoxNota4_TextChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(34, 8);
            this.label1.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(225, 20);
            this.label1.TabIndex = 8;
            this.label1.Text = "Sistema para cálculo de Média";
            // 
            // btnCalcular
            // 
            this.btnCalcular.Font = new System.Drawing.Font("Microsoft Sans Serif", 11F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnCalcular.Location = new System.Drawing.Point(65, 209);
            this.btnCalcular.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.btnCalcular.Name = "btnCalcular";
            this.btnCalcular.Size = new System.Drawing.Size(79, 31);
            this.btnCalcular.TabIndex = 9;
            this.btnCalcular.Text = "Calcular";
            this.btnCalcular.UseVisualStyleBackColor = true;
            this.btnCalcular.Click += new System.EventHandler(this.btnCalcular_Click);
            // 
            // btnLimpar
            // 
            this.btnLimpar.Font = new System.Drawing.Font("Microsoft Sans Serif", 11F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnLimpar.Location = new System.Drawing.Point(191, 209);
            this.btnLimpar.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.btnLimpar.Name = "btnLimpar";
            this.btnLimpar.Size = new System.Drawing.Size(71, 31);
            this.btnLimpar.TabIndex = 10;
            this.btnLimpar.Text = "Limpar";
            this.btnLimpar.UseVisualStyleBackColor = true;
            this.btnLimpar.Click += new System.EventHandler(this.btnLimpar_Click);
            // 
            // lblMédia
            // 
            this.lblMédia.AutoSize = true;
            this.lblMédia.Font = new System.Drawing.Font("Microsoft Sans Serif", 11F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblMédia.Location = new System.Drawing.Point(56, 277);
            this.lblMédia.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblMédia.Name = "lblMédia";
            this.lblMédia.Size = new System.Drawing.Size(122, 18);
            this.lblMédia.TabIndex = 12;
            this.lblMédia.Text = "Média e Situação";
            // 
            // lblResultado
            // 
            this.lblResultado.AutoSize = true;
            this.lblResultado.Font = new System.Drawing.Font("Microsoft Sans Serif", 11F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblResultado.Location = new System.Drawing.Point(236, 277);
            this.lblResultado.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblResultado.Name = "lblResultado";
            this.lblResultado.Size = new System.Drawing.Size(49, 18);
            this.lblResultado.TabIndex = 13;
            this.lblResultado.Text = "==-==";
            this.lblResultado.Click += new System.EventHandler(this.lblResultado_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(631, 389);
            this.Controls.Add(this.lblResultado);
            this.Controls.Add(this.lblMédia);
            this.Controls.Add(this.btnLimpar);
            this.Controls.Add(this.btnCalcular);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtBoxNota4);
            this.Controls.Add(this.txtBoxNota3);
            this.Controls.Add(this.txtBoxNota2);
            this.Controls.Add(this.txtBoxNota1);
            this.Controls.Add(this.lblNota4);
            this.Controls.Add(this.lblNota3);
            this.Controls.Add(this.lblNota2);
            this.Controls.Add(this.lblNota1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblNota1;
        private System.Windows.Forms.Label lblNota2;
        private System.Windows.Forms.Label lblNota3;
        private System.Windows.Forms.Label lblNota4;
        private System.Windows.Forms.TextBox txtBoxNota1;
        private System.Windows.Forms.TextBox txtBoxNota2;
        private System.Windows.Forms.TextBox txtBoxNota3;
        private System.Windows.Forms.TextBox txtBoxNota4;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnCalcular;
        private System.Windows.Forms.Button btnLimpar;
        private System.Windows.Forms.Label lblMédia;
        private System.Windows.Forms.Label lblResultado;
    }
}

