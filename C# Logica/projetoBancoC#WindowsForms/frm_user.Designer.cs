namespace projetoBancoC_WindowsForms
{
    partial class frm_user
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
            this.txtBoxNome = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.cbSexo = new System.Windows.Forms.ComboBox();
            this.maskedtxtBoxCelular = new System.Windows.Forms.MaskedTextBox();
            this.cbUf = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.dataGridCadastroUser = new System.Windows.Forms.DataGridView();
            this.txtBoxEndereco = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.txtBoxCidade = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.txtBoxNumero = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.maskedTextBoxCpf = new System.Windows.Forms.MaskedTextBox();
            this.label8 = new System.Windows.Forms.Label();
            this.dataPickerNascimento = new System.Windows.Forms.DateTimePicker();
            this.label9 = new System.Windows.Forms.Label();
            this.btnCadastrar = new System.Windows.Forms.Button();
            this.btnAlterar = new System.Windows.Forms.Button();
            this.btnLimpar = new System.Windows.Forms.Button();
            this.btnTesteConexao = new System.Windows.Forms.Button();
            this.txtBoxId = new System.Windows.Forms.TextBox();
            this.label10 = new System.Windows.Forms.Label();
            this.txtBoxPesquisa = new System.Windows.Forms.TextBox();
            this.label11 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridCadastroUser)).BeginInit();
            this.SuspendLayout();
            // 
            // txtBoxNome
            // 
            this.txtBoxNome.Location = new System.Drawing.Point(25, 25);
            this.txtBoxNome.Name = "txtBoxNome";
            this.txtBoxNome.Size = new System.Drawing.Size(287, 20);
            this.txtBoxNome.TabIndex = 0;
            this.txtBoxNome.TextChanged += new System.EventHandler(this.txtBoxNome_TextChanged);
            this.txtBoxNome.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.txtBoxNome_KeyPress);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(31, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(83, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "Insira seu Nome";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // cbSexo
            // 
            this.cbSexo.FormattingEnabled = true;
            this.cbSexo.Items.AddRange(new object[] {
            "Masculino",
            "Feminino",
            "Outro"});
            this.cbSexo.Location = new System.Drawing.Point(25, 76);
            this.cbSexo.Name = "cbSexo";
            this.cbSexo.Size = new System.Drawing.Size(121, 21);
            this.cbSexo.TabIndex = 2;
            // 
            // maskedtxtBoxCelular
            // 
            this.maskedtxtBoxCelular.Location = new System.Drawing.Point(25, 185);
            this.maskedtxtBoxCelular.Mask = "(99) 00000-0000";
            this.maskedtxtBoxCelular.Name = "maskedtxtBoxCelular";
            this.maskedtxtBoxCelular.Size = new System.Drawing.Size(100, 20);
            this.maskedtxtBoxCelular.TabIndex = 3;
            this.maskedtxtBoxCelular.MaskInputRejected += new System.Windows.Forms.MaskInputRejectedEventHandler(this.maskedtxtBoxCelular_MaskInputRejected);
            this.maskedtxtBoxCelular.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.maskedtxtBoxCelular_KeyPress);
            // 
            // cbUf
            // 
            this.cbUf.FormattingEnabled = true;
            this.cbUf.Items.AddRange(new object[] {
            "AC",
            "AL",
            "AP",
            "AM",
            "BA",
            "CE",
            "DF",
            "ES",
            "GO",
            "MA",
            "MT",
            "MS",
            "MG",
            "PA",
            "PB",
            "PR",
            "PE",
            "PI",
            "RJ",
            "RN",
            "RS",
            "RO",
            "RR",
            "SC",
            "SP",
            "SE",
            "TO"});
            this.cbUf.Location = new System.Drawing.Point(318, 184);
            this.cbUf.Name = "cbUf";
            this.cbUf.Size = new System.Drawing.Size(48, 21);
            this.cbUf.TabIndex = 4;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(31, 60);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(34, 13);
            this.label2.TabIndex = 5;
            this.label2.Text = "Sexo:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(315, 168);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(21, 13);
            this.label3.TabIndex = 6;
            this.label3.Text = "UF";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(31, 169);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(39, 13);
            this.label4.TabIndex = 7;
            this.label4.Text = "Celular";
            // 
            // dataGridCadastroUser
            // 
            this.dataGridCadastroUser.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridCadastroUser.Location = new System.Drawing.Point(25, 248);
            this.dataGridCadastroUser.Name = "dataGridCadastroUser";
            this.dataGridCadastroUser.Size = new System.Drawing.Size(836, 177);
            this.dataGridCadastroUser.TabIndex = 8;
            this.dataGridCadastroUser.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridCadastroUser_CellClick);
            // 
            // txtBoxEndereco
            // 
            this.txtBoxEndereco.Location = new System.Drawing.Point(25, 133);
            this.txtBoxEndereco.Name = "txtBoxEndereco";
            this.txtBoxEndereco.Size = new System.Drawing.Size(419, 20);
            this.txtBoxEndereco.TabIndex = 9;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(31, 117);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(53, 13);
            this.label5.TabIndex = 10;
            this.label5.Text = "Endereço";
            // 
            // txtBoxCidade
            // 
            this.txtBoxCidade.Location = new System.Drawing.Point(184, 185);
            this.txtBoxCidade.Name = "txtBoxCidade";
            this.txtBoxCidade.Size = new System.Drawing.Size(100, 20);
            this.txtBoxCidade.TabIndex = 11;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(181, 169);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(40, 13);
            this.label6.TabIndex = 12;
            this.label6.Text = "Cidade";
            // 
            // txtBoxNumero
            // 
            this.txtBoxNumero.Location = new System.Drawing.Point(528, 132);
            this.txtBoxNumero.Name = "txtBoxNumero";
            this.txtBoxNumero.Size = new System.Drawing.Size(100, 20);
            this.txtBoxNumero.TabIndex = 13;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(528, 116);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(44, 13);
            this.label7.TabIndex = 14;
            this.label7.Text = "Número";
            // 
            // maskedTextBoxCpf
            // 
            this.maskedTextBoxCpf.Location = new System.Drawing.Point(527, 24);
            this.maskedTextBoxCpf.Mask = "000,000,000-00";
            this.maskedTextBoxCpf.Name = "maskedTextBoxCpf";
            this.maskedTextBoxCpf.Size = new System.Drawing.Size(100, 20);
            this.maskedTextBoxCpf.TabIndex = 15;
            this.maskedTextBoxCpf.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.maskedTextBoxCpf_KeyPress);
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(528, 8);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(27, 13);
            this.label8.TabIndex = 16;
            this.label8.Text = "CPF";
            // 
            // dataPickerNascimento
            // 
            this.dataPickerNascimento.Format = System.Windows.Forms.DateTimePickerFormat.Short;
            this.dataPickerNascimento.Location = new System.Drawing.Point(527, 77);
            this.dataPickerNascimento.Name = "dataPickerNascimento";
            this.dataPickerNascimento.Size = new System.Drawing.Size(106, 20);
            this.dataPickerNascimento.TabIndex = 17;
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(525, 61);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(104, 13);
            this.label9.TabIndex = 18;
            this.label9.Text = "Data de Nascimento";
            // 
            // btnCadastrar
            // 
            this.btnCadastrar.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(192)))), ((int)(((byte)(0)))));
            this.btnCadastrar.Location = new System.Drawing.Point(757, 50);
            this.btnCadastrar.Name = "btnCadastrar";
            this.btnCadastrar.Size = new System.Drawing.Size(75, 23);
            this.btnCadastrar.TabIndex = 19;
            this.btnCadastrar.Text = "Cadastrar";
            this.btnCadastrar.UseVisualStyleBackColor = false;
            this.btnCadastrar.Click += new System.EventHandler(this.btnCadastrar_Click);
            // 
            // btnAlterar
            // 
            this.btnAlterar.BackColor = System.Drawing.Color.Yellow;
            this.btnAlterar.Location = new System.Drawing.Point(757, 94);
            this.btnAlterar.Name = "btnAlterar";
            this.btnAlterar.Size = new System.Drawing.Size(75, 23);
            this.btnAlterar.TabIndex = 20;
            this.btnAlterar.Text = "Alterar";
            this.btnAlterar.UseVisualStyleBackColor = false;
            this.btnAlterar.Click += new System.EventHandler(this.btnAlterar_Click);
            // 
            // btnLimpar
            // 
            this.btnLimpar.BackColor = System.Drawing.Color.Brown;
            this.btnLimpar.Location = new System.Drawing.Point(757, 133);
            this.btnLimpar.Name = "btnLimpar";
            this.btnLimpar.Size = new System.Drawing.Size(75, 23);
            this.btnLimpar.TabIndex = 21;
            this.btnLimpar.Text = "Limpar";
            this.btnLimpar.UseVisualStyleBackColor = false;
            this.btnLimpar.Click += new System.EventHandler(this.btnLimpar_Click);
            // 
            // btnTesteConexao
            // 
            this.btnTesteConexao.BackColor = System.Drawing.SystemColors.AppWorkspace;
            this.btnTesteConexao.Location = new System.Drawing.Point(688, 184);
            this.btnTesteConexao.Name = "btnTesteConexao";
            this.btnTesteConexao.Size = new System.Drawing.Size(144, 42);
            this.btnTesteConexao.TabIndex = 22;
            this.btnTesteConexao.Text = "TESTE CONEXAO";
            this.btnTesteConexao.UseVisualStyleBackColor = false;
            this.btnTesteConexao.Click += new System.EventHandler(this.btnTesteConexao_Click);
            // 
            // txtBoxId
            // 
            this.txtBoxId.Location = new System.Drawing.Point(338, 76);
            this.txtBoxId.Name = "txtBoxId";
            this.txtBoxId.Size = new System.Drawing.Size(100, 20);
            this.txtBoxId.TabIndex = 23;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(335, 50);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(18, 13);
            this.label10.TabIndex = 24;
            this.label10.Text = "ID";
            // 
            // txtBoxPesquisa
            // 
            this.txtBoxPesquisa.Location = new System.Drawing.Point(395, 222);
            this.txtBoxPesquisa.Name = "txtBoxPesquisa";
            this.txtBoxPesquisa.Size = new System.Drawing.Size(272, 20);
            this.txtBoxPesquisa.TabIndex = 25;
            this.txtBoxPesquisa.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Location = new System.Drawing.Point(266, 225);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(100, 13);
            this.label11.TabIndex = 26;
            this.label11.Text = "Pesquisa Por Nome";
            // 
            // frm_user
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(888, 454);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.txtBoxPesquisa);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.txtBoxId);
            this.Controls.Add(this.btnTesteConexao);
            this.Controls.Add(this.btnLimpar);
            this.Controls.Add(this.btnAlterar);
            this.Controls.Add(this.btnCadastrar);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.dataPickerNascimento);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.maskedTextBoxCpf);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.txtBoxNumero);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.txtBoxCidade);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.txtBoxEndereco);
            this.Controls.Add(this.dataGridCadastroUser);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.cbUf);
            this.Controls.Add(this.maskedtxtBoxCelular);
            this.Controls.Add(this.cbSexo);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtBoxNome);
            this.Name = "frm_user";
            this.Text = "frm_user";
            this.Load += new System.EventHandler(this.frm_user_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridCadastroUser)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtBoxNome;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ComboBox cbSexo;
        private System.Windows.Forms.MaskedTextBox maskedtxtBoxCelular;
        private System.Windows.Forms.ComboBox cbUf;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.DataGridView dataGridCadastroUser;
        private System.Windows.Forms.TextBox txtBoxEndereco;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox txtBoxCidade;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox txtBoxNumero;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.MaskedTextBox maskedTextBoxCpf;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.DateTimePicker dataPickerNascimento;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Button btnCadastrar;
        private System.Windows.Forms.Button btnAlterar;
        private System.Windows.Forms.Button btnLimpar;
        private System.Windows.Forms.Button btnTesteConexao;
        private System.Windows.Forms.TextBox txtBoxId;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.TextBox txtBoxPesquisa;
        private System.Windows.Forms.Label label11;
    }
}