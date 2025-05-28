namespace projetoWindowsForms2
{
    partial class Form2
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
            this.components = new System.ComponentModel.Container();
            this.lblCadastroClientes = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.dtClendario = new System.Windows.Forms.DateTimePicker();
            this.rbFeminino = new System.Windows.Forms.RadioButton();
            this.rbMasculino = new System.Windows.Forms.RadioButton();
            this.txtBoxEstado = new System.Windows.Forms.TextBox();
            this.txtBoxCidade = new System.Windows.Forms.TextBox();
            this.txtBoxEndereco = new System.Windows.Forms.TextBox();
            this.txtBoxNome = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.lblCpft = new System.Windows.Forms.Label();
            this.lblNomet = new System.Windows.Forms.Label();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.label9 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.txtBoxInformacoesAdicionais = new System.Windows.Forms.TextBox();
            this.listBoxLeitura = new System.Windows.Forms.ListBox();
            this.checkedListBoxMusica = new System.Windows.Forms.CheckedListBox();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.lblInformacoesAdicionais = new System.Windows.Forms.Label();
            this.lblNascimento = new System.Windows.Forms.Label();
            this.lblEstado = new System.Windows.Forms.Label();
            this.lblCep = new System.Windows.Forms.Label();
            this.lblCpfR = new System.Windows.Forms.Label();
            this.lblLeitura = new System.Windows.Forms.Label();
            this.lblMusica = new System.Windows.Forms.Label();
            this.lblSexo = new System.Windows.Forms.Label();
            this.lblCidade = new System.Windows.Forms.Label();
            this.lblEndereco = new System.Windows.Forms.Label();
            this.lblNomeR = new System.Windows.Forms.Label();
            this.label20 = new System.Windows.Forms.Label();
            this.label19 = new System.Windows.Forms.Label();
            this.label18 = new System.Windows.Forms.Label();
            this.label17 = new System.Windows.Forms.Label();
            this.label16 = new System.Windows.Forms.Label();
            this.label15 = new System.Windows.Forms.Label();
            this.label14 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.label12 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.btnGerarDados = new System.Windows.Forms.Button();
            this.btnLimparCampos = new System.Windows.Forms.Button();
            this.toolTip1 = new System.Windows.Forms.ToolTip(this.components);
            this.txtBoxCpf = new System.Windows.Forms.MaskedTextBox();
            this.txtBoxCep = new System.Windows.Forms.MaskedTextBox();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.groupBox3.SuspendLayout();
            this.SuspendLayout();
            // 
            // lblCadastroClientes
            // 
            this.lblCadastroClientes.AutoSize = true;
            this.lblCadastroClientes.Font = new System.Drawing.Font("Verdana", 17.25F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblCadastroClientes.Location = new System.Drawing.Point(22, 23);
            this.lblCadastroClientes.Name = "lblCadastroClientes";
            this.lblCadastroClientes.Size = new System.Drawing.Size(276, 28);
            this.lblCadastroClientes.TabIndex = 0;
            this.lblCadastroClientes.Text = "Cadastro de Clientes";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.txtBoxCep);
            this.groupBox1.Controls.Add(this.txtBoxCpf);
            this.groupBox1.Controls.Add(this.dtClendario);
            this.groupBox1.Controls.Add(this.rbFeminino);
            this.groupBox1.Controls.Add(this.rbMasculino);
            this.groupBox1.Controls.Add(this.txtBoxEstado);
            this.groupBox1.Controls.Add(this.txtBoxCidade);
            this.groupBox1.Controls.Add(this.txtBoxEndereco);
            this.groupBox1.Controls.Add(this.txtBoxNome);
            this.groupBox1.Controls.Add(this.label6);
            this.groupBox1.Controls.Add(this.label5);
            this.groupBox1.Controls.Add(this.label4);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Controls.Add(this.lblCpft);
            this.groupBox1.Controls.Add(this.lblNomet);
            this.groupBox1.Font = new System.Drawing.Font("Microsoft Sans Serif", 13F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox1.Location = new System.Drawing.Point(72, 68);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(746, 257);
            this.groupBox1.TabIndex = 1;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Dados Pessoais";
            // 
            // dtClendario
            // 
            this.dtClendario.Format = System.Windows.Forms.DateTimePickerFormat.Short;
            this.dtClendario.Location = new System.Drawing.Point(576, 191);
            this.dtClendario.Name = "dtClendario";
            this.dtClendario.Size = new System.Drawing.Size(135, 27);
            this.dtClendario.TabIndex = 16;
            this.dtClendario.ValueChanged += new System.EventHandler(this.dateTimePicker1_ValueChanged);
            // 
            // rbFeminino
            // 
            this.rbFeminino.AutoSize = true;
            this.rbFeminino.Location = new System.Drawing.Point(154, 216);
            this.rbFeminino.Name = "rbFeminino";
            this.rbFeminino.Size = new System.Drawing.Size(101, 26);
            this.rbFeminino.TabIndex = 15;
            this.rbFeminino.TabStop = true;
            this.rbFeminino.Text = "Feminino";
            this.rbFeminino.UseVisualStyleBackColor = true;
            // 
            // rbMasculino
            // 
            this.rbMasculino.AutoSize = true;
            this.rbMasculino.Location = new System.Drawing.Point(27, 216);
            this.rbMasculino.Name = "rbMasculino";
            this.rbMasculino.Size = new System.Drawing.Size(108, 26);
            this.rbMasculino.TabIndex = 14;
            this.rbMasculino.TabStop = true;
            this.rbMasculino.Text = "Masculino";
            this.rbMasculino.UseVisualStyleBackColor = true;
            // 
            // txtBoxEstado
            // 
            this.txtBoxEstado.Location = new System.Drawing.Point(610, 153);
            this.txtBoxEstado.Name = "txtBoxEstado";
            this.txtBoxEstado.Size = new System.Drawing.Size(53, 27);
            this.txtBoxEstado.TabIndex = 13;
            // 
            // txtBoxCidade
            // 
            this.txtBoxCidade.Location = new System.Drawing.Point(125, 153);
            this.txtBoxCidade.Name = "txtBoxCidade";
            this.txtBoxCidade.Size = new System.Drawing.Size(260, 27);
            this.txtBoxCidade.TabIndex = 12;
            // 
            // txtBoxEndereco
            // 
            this.txtBoxEndereco.Location = new System.Drawing.Point(125, 76);
            this.txtBoxEndereco.Name = "txtBoxEndereco";
            this.txtBoxEndereco.Size = new System.Drawing.Size(615, 27);
            this.txtBoxEndereco.TabIndex = 10;
            // 
            // txtBoxNome
            // 
            this.txtBoxNome.Location = new System.Drawing.Point(125, 36);
            this.txtBoxNome.Name = "txtBoxNome";
            this.txtBoxNome.Size = new System.Drawing.Size(318, 27);
            this.txtBoxNome.TabIndex = 8;
            this.txtBoxNome.TextChanged += new System.EventHandler(this.txtBoxNome_TextChanged);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(386, 191);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(172, 22);
            this.label6.TabIndex = 7;
            this.label6.Text = "Data de Nascimento";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(519, 152);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(71, 22);
            this.label5.TabIndex = 6;
            this.label5.Text = "Estado:";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(23, 191);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(56, 22);
            this.label4.TabIndex = 5;
            this.label4.Text = "Sexo:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(23, 152);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(72, 22);
            this.label3.TabIndex = 4;
            this.label3.Text = "Cidade:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(23, 118);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(52, 22);
            this.label2.TabIndex = 3;
            this.label2.Text = "CEP:";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(23, 75);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(92, 22);
            this.label1.TabIndex = 2;
            this.label1.Text = "Endereço:";
            // 
            // lblCpft
            // 
            this.lblCpft.AutoSize = true;
            this.lblCpft.Location = new System.Drawing.Point(519, 35);
            this.lblCpft.Name = "lblCpft";
            this.lblCpft.Size = new System.Drawing.Size(51, 22);
            this.lblCpft.TabIndex = 1;
            this.lblCpft.Text = "CPF:";
            // 
            // lblNomet
            // 
            this.lblNomet.AutoSize = true;
            this.lblNomet.Location = new System.Drawing.Point(23, 35);
            this.lblNomet.Name = "lblNomet";
            this.lblNomet.Size = new System.Drawing.Size(62, 22);
            this.lblNomet.TabIndex = 0;
            this.lblNomet.Text = "Nome:";
            this.lblNomet.Click += new System.EventHandler(this.lblNome_Click);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.label9);
            this.groupBox2.Controls.Add(this.label8);
            this.groupBox2.Controls.Add(this.label7);
            this.groupBox2.Controls.Add(this.txtBoxInformacoesAdicionais);
            this.groupBox2.Controls.Add(this.listBoxLeitura);
            this.groupBox2.Controls.Add(this.checkedListBoxMusica);
            this.groupBox2.Font = new System.Drawing.Font("Microsoft Sans Serif", 13F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox2.Location = new System.Drawing.Point(72, 331);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(740, 222);
            this.groupBox2.TabIndex = 2;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Interesses Pessoais";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(344, 38);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(194, 22);
            this.label9.TabIndex = 5;
            this.label9.Text = "Informações Adicionais";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(190, 38);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(65, 22);
            this.label8.TabIndex = 4;
            this.label8.Text = "Leitura";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(38, 38);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(66, 22);
            this.label7.TabIndex = 3;
            this.label7.Text = "Música";
            // 
            // txtBoxInformacoesAdicionais
            // 
            this.txtBoxInformacoesAdicionais.Location = new System.Drawing.Point(335, 69);
            this.txtBoxInformacoesAdicionais.Multiline = true;
            this.txtBoxInformacoesAdicionais.Name = "txtBoxInformacoesAdicionais";
            this.txtBoxInformacoesAdicionais.Size = new System.Drawing.Size(378, 136);
            this.txtBoxInformacoesAdicionais.TabIndex = 2;
            // 
            // listBoxLeitura
            // 
            this.listBoxLeitura.FormattingEnabled = true;
            this.listBoxLeitura.ItemHeight = 20;
            this.listBoxLeitura.Items.AddRange(new object[] {
            "Mistério",
            "Ação",
            "Biografia"});
            this.listBoxLeitura.Location = new System.Drawing.Point(194, 69);
            this.listBoxLeitura.Name = "listBoxLeitura";
            this.listBoxLeitura.Size = new System.Drawing.Size(106, 64);
            this.listBoxLeitura.TabIndex = 1;
            // 
            // checkedListBoxMusica
            // 
            this.checkedListBoxMusica.FormattingEnabled = true;
            this.checkedListBoxMusica.Items.AddRange(new object[] {
            "Rock",
            "Metal",
            "Blues"});
            this.checkedListBoxMusica.Location = new System.Drawing.Point(6, 69);
            this.checkedListBoxMusica.Name = "checkedListBoxMusica";
            this.checkedListBoxMusica.Size = new System.Drawing.Size(147, 70);
            this.checkedListBoxMusica.TabIndex = 0;
            this.checkedListBoxMusica.SelectedIndexChanged += new System.EventHandler(this.checkedListBoxMusica_SelectedIndexChanged);
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.lblInformacoesAdicionais);
            this.groupBox3.Controls.Add(this.lblNascimento);
            this.groupBox3.Controls.Add(this.lblEstado);
            this.groupBox3.Controls.Add(this.lblCep);
            this.groupBox3.Controls.Add(this.lblCpfR);
            this.groupBox3.Controls.Add(this.lblLeitura);
            this.groupBox3.Controls.Add(this.lblMusica);
            this.groupBox3.Controls.Add(this.lblSexo);
            this.groupBox3.Controls.Add(this.lblCidade);
            this.groupBox3.Controls.Add(this.lblEndereco);
            this.groupBox3.Controls.Add(this.lblNomeR);
            this.groupBox3.Controls.Add(this.label20);
            this.groupBox3.Controls.Add(this.label19);
            this.groupBox3.Controls.Add(this.label18);
            this.groupBox3.Controls.Add(this.label17);
            this.groupBox3.Controls.Add(this.label16);
            this.groupBox3.Controls.Add(this.label15);
            this.groupBox3.Controls.Add(this.label14);
            this.groupBox3.Controls.Add(this.label13);
            this.groupBox3.Controls.Add(this.label12);
            this.groupBox3.Controls.Add(this.label11);
            this.groupBox3.Controls.Add(this.label10);
            this.groupBox3.Font = new System.Drawing.Font("Microsoft Sans Serif", 13F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox3.Location = new System.Drawing.Point(72, 605);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(746, 255);
            this.groupBox3.TabIndex = 3;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "Resultados";
            this.groupBox3.Visible = false;
            this.groupBox3.Enter += new System.EventHandler(this.groupBox3_Enter);
            // 
            // lblInformacoesAdicionais
            // 
            this.lblInformacoesAdicionais.AutoSize = true;
            this.lblInformacoesAdicionais.Location = new System.Drawing.Point(572, 173);
            this.lblInformacoesAdicionais.Name = "lblInformacoesAdicionais";
            this.lblInformacoesAdicionais.Size = new System.Drawing.Size(32, 22);
            this.lblInformacoesAdicionais.TabIndex = 21;
            this.lblInformacoesAdicionais.Text = "==";
            // 
            // lblNascimento
            // 
            this.lblNascimento.AutoSize = true;
            this.lblNascimento.Location = new System.Drawing.Point(545, 129);
            this.lblNascimento.Name = "lblNascimento";
            this.lblNascimento.Size = new System.Drawing.Size(32, 22);
            this.lblNascimento.TabIndex = 20;
            this.lblNascimento.Text = "==";
            this.lblNascimento.Click += new System.EventHandler(this.label30_Click);
            // 
            // lblEstado
            // 
            this.lblEstado.AutoSize = true;
            this.lblEstado.Location = new System.Drawing.Point(511, 91);
            this.lblEstado.Name = "lblEstado";
            this.lblEstado.Size = new System.Drawing.Size(32, 22);
            this.lblEstado.TabIndex = 19;
            this.lblEstado.Text = "==";
            // 
            // lblCep
            // 
            this.lblCep.AutoSize = true;
            this.lblCep.Location = new System.Drawing.Point(511, 59);
            this.lblCep.Name = "lblCep";
            this.lblCep.Size = new System.Drawing.Size(32, 22);
            this.lblCep.TabIndex = 18;
            this.lblCep.Text = "==";
            // 
            // lblCpfR
            // 
            this.lblCpfR.AutoSize = true;
            this.lblCpfR.Location = new System.Drawing.Point(507, 23);
            this.lblCpfR.Name = "lblCpfR";
            this.lblCpfR.Size = new System.Drawing.Size(51, 22);
            this.lblCpfR.TabIndex = 17;
            this.lblCpfR.Text = "CpfR";
            // 
            // lblLeitura
            // 
            this.lblLeitura.AutoSize = true;
            this.lblLeitura.Location = new System.Drawing.Point(178, 207);
            this.lblLeitura.Name = "lblLeitura";
            this.lblLeitura.Size = new System.Drawing.Size(32, 22);
            this.lblLeitura.TabIndex = 16;
            this.lblLeitura.Text = "==";
            // 
            // lblMusica
            // 
            this.lblMusica.AutoSize = true;
            this.lblMusica.Location = new System.Drawing.Point(178, 173);
            this.lblMusica.Name = "lblMusica";
            this.lblMusica.Size = new System.Drawing.Size(32, 22);
            this.lblMusica.TabIndex = 15;
            this.lblMusica.Text = "==";
            // 
            // lblSexo
            // 
            this.lblSexo.AutoSize = true;
            this.lblSexo.Location = new System.Drawing.Point(73, 141);
            this.lblSexo.Name = "lblSexo";
            this.lblSexo.Size = new System.Drawing.Size(32, 22);
            this.lblSexo.TabIndex = 14;
            this.lblSexo.Text = "==";
            // 
            // lblCidade
            // 
            this.lblCidade.AutoSize = true;
            this.lblCidade.Location = new System.Drawing.Point(93, 105);
            this.lblCidade.Name = "lblCidade";
            this.lblCidade.Size = new System.Drawing.Size(32, 22);
            this.lblCidade.TabIndex = 13;
            this.lblCidade.Text = "==";
            // 
            // lblEndereco
            // 
            this.lblEndereco.AutoSize = true;
            this.lblEndereco.Location = new System.Drawing.Point(176, 69);
            this.lblEndereco.Name = "lblEndereco";
            this.lblEndereco.Size = new System.Drawing.Size(32, 22);
            this.lblEndereco.TabIndex = 12;
            this.lblEndereco.Text = "==";
            // 
            // lblNomeR
            // 
            this.lblNomeR.AutoSize = true;
            this.lblNomeR.Location = new System.Drawing.Point(130, 33);
            this.lblNomeR.Name = "lblNomeR";
            this.lblNomeR.Size = new System.Drawing.Size(70, 22);
            this.lblNomeR.TabIndex = 11;
            this.lblNomeR.Text = "NomeR";
            this.lblNomeR.Click += new System.EventHandler(this.lblNomeR_Click);
            // 
            // label20
            // 
            this.label20.AutoSize = true;
            this.label20.Location = new System.Drawing.Point(433, 59);
            this.label20.Name = "label20";
            this.label20.Size = new System.Drawing.Size(47, 22);
            this.label20.TabIndex = 10;
            this.label20.Text = "CEP";
            // 
            // label19
            // 
            this.label19.AutoSize = true;
            this.label19.Location = new System.Drawing.Point(433, 173);
            this.label19.Name = "label19";
            this.label19.Size = new System.Drawing.Size(116, 22);
            this.label19.TabIndex = 9;
            this.label19.Text = "Observações";
            // 
            // label18
            // 
            this.label18.AutoSize = true;
            this.label18.Location = new System.Drawing.Point(434, 129);
            this.label18.Name = "label18";
            this.label18.Size = new System.Drawing.Size(104, 22);
            this.label18.TabIndex = 8;
            this.label18.Text = "Nascimento";
            this.label18.Click += new System.EventHandler(this.label18_Click);
            // 
            // label17
            // 
            this.label17.AutoSize = true;
            this.label17.Location = new System.Drawing.Point(434, 91);
            this.label17.Name = "label17";
            this.label17.Size = new System.Drawing.Size(66, 22);
            this.label17.TabIndex = 7;
            this.label17.Text = "Estado";
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Location = new System.Drawing.Point(433, 23);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(51, 22);
            this.label16.TabIndex = 6;
            this.label16.Text = "CPF:";
            this.label16.Click += new System.EventHandler(this.label16_Click);
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Location = new System.Drawing.Point(16, 207);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(143, 22);
            this.label15.TabIndex = 5;
            this.label15.Text = "Leitura Preferida";
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Location = new System.Drawing.Point(16, 173);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(156, 22);
            this.label14.TabIndex = 4;
            this.label14.Text = "Seu Estilo Musical";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Location = new System.Drawing.Point(16, 141);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(56, 22);
            this.label13.TabIndex = 3;
            this.label13.Text = "Sexo:";
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Location = new System.Drawing.Point(16, 105);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(72, 22);
            this.label12.TabIndex = 2;
            this.label12.Text = "Cidade:";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Location = new System.Drawing.Point(16, 69);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(129, 22);
            this.label11.TabIndex = 1;
            this.label11.Text = "Seu Endereço:";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(16, 33);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(99, 22);
            this.label10.TabIndex = 0;
            this.label10.Text = "Seu Nome:";
            // 
            // btnGerarDados
            // 
            this.btnGerarDados.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnGerarDados.Location = new System.Drawing.Point(487, 559);
            this.btnGerarDados.Name = "btnGerarDados";
            this.btnGerarDados.Size = new System.Drawing.Size(122, 40);
            this.btnGerarDados.TabIndex = 4;
            this.btnGerarDados.Text = "Gerar Dados";
            this.btnGerarDados.UseVisualStyleBackColor = true;
            this.btnGerarDados.Click += new System.EventHandler(this.btnGerarDados_Click);
            // 
            // btnLimparCampos
            // 
            this.btnLimparCampos.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnLimparCampos.Location = new System.Drawing.Point(629, 559);
            this.btnLimparCampos.Name = "btnLimparCampos";
            this.btnLimparCampos.Size = new System.Drawing.Size(117, 40);
            this.btnLimparCampos.TabIndex = 5;
            this.btnLimparCampos.Text = "Limpar Campos";
            this.btnLimparCampos.UseVisualStyleBackColor = true;
            this.btnLimparCampos.Click += new System.EventHandler(this.btnLimparCampos_Click);
            // 
            // toolTip1
            // 
            this.toolTip1.AutoPopDelay = 5000;
            this.toolTip1.InitialDelay = 100;
            this.toolTip1.IsBalloon = true;
            this.toolTip1.ReshowDelay = 100;
            this.toolTip1.ToolTipIcon = System.Windows.Forms.ToolTipIcon.Warning;
            this.toolTip1.ToolTipTitle = "Campo Vazio";
            this.toolTip1.Popup += new System.Windows.Forms.PopupEventHandler(this.toolTip1_Popup);
            // 
            // txtBoxCpf
            // 
            this.txtBoxCpf.Location = new System.Drawing.Point(576, 36);
            this.txtBoxCpf.Mask = "000,000,000-00";
            this.txtBoxCpf.Name = "txtBoxCpf";
            this.txtBoxCpf.Size = new System.Drawing.Size(150, 27);
            this.txtBoxCpf.TabIndex = 9;
            this.txtBoxCpf.MaskInputRejected += new System.Windows.Forms.MaskInputRejectedEventHandler(this.txtBoxCpf_MaskInputRejected);
            // 
            // txtBoxCep
            // 
            this.txtBoxCep.Location = new System.Drawing.Point(125, 118);
            this.txtBoxCep.Mask = "00000-999";
            this.txtBoxCep.Name = "txtBoxCep";
            this.txtBoxCep.Size = new System.Drawing.Size(156, 27);
            this.txtBoxCep.TabIndex = 11;
            this.txtBoxCep.TextMaskFormat = System.Windows.Forms.MaskFormat.ExcludePromptAndLiterals;
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.ClientSize = new System.Drawing.Size(967, 881);
            this.Controls.Add(this.btnLimparCampos);
            this.Controls.Add(this.btnGerarDados);
            this.Controls.Add(this.groupBox3);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.lblCadastroClientes);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.SystemColors.ControlText;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Form2";
            this.Text = "Formulário Cliente (atividade Extra)";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.groupBox3.ResumeLayout(false);
            this.groupBox3.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblCadastroClientes;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.GroupBox groupBox3;
        private System.Windows.Forms.Label lblCpft;
        private System.Windows.Forms.Label lblNomet;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.RadioButton rbFeminino;
        private System.Windows.Forms.RadioButton rbMasculino;
        private System.Windows.Forms.TextBox txtBoxEstado;
        private System.Windows.Forms.TextBox txtBoxCidade;
        private System.Windows.Forms.TextBox txtBoxEndereco;
        private System.Windows.Forms.TextBox txtBoxNome;
        private System.Windows.Forms.DateTimePicker dtClendario;
        private System.Windows.Forms.CheckedListBox checkedListBoxMusica;
        private System.Windows.Forms.TextBox txtBoxInformacoesAdicionais;
        private System.Windows.Forms.ListBox listBoxLeitura;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Button btnGerarDados;
        private System.Windows.Forms.Button btnLimparCampos;
        private System.Windows.Forms.Label label20;
        private System.Windows.Forms.Label label19;
        private System.Windows.Forms.Label label18;
        private System.Windows.Forms.Label label17;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label lblInformacoesAdicionais;
        private System.Windows.Forms.Label lblNascimento;
        private System.Windows.Forms.Label lblEstado;
        private System.Windows.Forms.Label lblCep;
        private System.Windows.Forms.Label lblCpfR;
        private System.Windows.Forms.Label lblLeitura;
        private System.Windows.Forms.Label lblMusica;
        private System.Windows.Forms.Label lblSexo;
        private System.Windows.Forms.Label lblCidade;
        private System.Windows.Forms.Label lblEndereco;
        private System.Windows.Forms.Label lblNomeR;
        private System.Windows.Forms.ToolTip toolTip1;
        private System.Windows.Forms.MaskedTextBox txtBoxCep;
        private System.Windows.Forms.MaskedTextBox txtBoxCpf;
    }
}