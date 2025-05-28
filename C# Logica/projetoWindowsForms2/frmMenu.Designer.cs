namespace projetoWindowsForms2
{
    partial class frmMenu
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnAlteraTela = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnAlteraTela
            // 
            this.btnAlteraTela.Location = new System.Drawing.Point(135, 122);
            this.btnAlteraTela.Name = "btnAlteraTela";
            this.btnAlteraTela.Size = new System.Drawing.Size(225, 87);
            this.btnAlteraTela.TabIndex = 0;
            this.btnAlteraTela.Text = "Tela de Ferramentas";
            this.btnAlteraTela.UseVisualStyleBackColor = true;
            this.btnAlteraTela.Click += new System.EventHandler(this.btnAlteraTela_Click);
            // 
            // frmMenu
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(11F, 24F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1511, 851);
            this.Controls.Add(this.btnAlteraTela);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Margin = new System.Windows.Forms.Padding(6, 6, 6, 6);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "frmMenu";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "frmMenu";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button btnAlteraTela;
    }
}