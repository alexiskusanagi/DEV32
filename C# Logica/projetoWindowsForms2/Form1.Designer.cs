namespace projetoWindowsForms2
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
            this.components = new System.ComponentModel.Container();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.lblResultado = new System.Windows.Forms.Label();
            this.btnLimpar = new System.Windows.Forms.Button();
            this.btnDividir = new System.Windows.Forms.Button();
            this.btnMultiplicar = new System.Windows.Forms.Button();
            this.btnSubtrair = new System.Windows.Forms.Button();
            this.btnSomar = new System.Windows.Forms.Button();
            this.txtValor2 = new System.Windows.Forms.TextBox();
            this.txtValor1 = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.btnApagar = new System.Windows.Forms.Button();
            this.lblIndice = new System.Windows.Forms.Label();
            this.lblNome = new System.Windows.Forms.Label();
            this.cbNome = new System.Windows.Forms.ComboBox();
            this.label4 = new System.Windows.Forms.Label();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.lblCor = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.rbAmarelo = new System.Windows.Forms.RadioButton();
            this.rbAzul = new System.Windows.Forms.RadioButton();
            this.groupBox4 = new System.Windows.Forms.GroupBox();
            this.lblItem = new System.Windows.Forms.Label();
            this.ckItem2 = new System.Windows.Forms.CheckBox();
            this.ckItem1 = new System.Windows.Forms.CheckBox();
            this.label6 = new System.Windows.Forms.Label();
            this.groupBox5 = new System.Windows.Forms.GroupBox();
            this.lblDia = new System.Windows.Forms.Label();
            this.lblHora = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.groupBox6 = new System.Windows.Forms.GroupBox();
            this.lblData = new System.Windows.Forms.Label();
            this.dtCalendario = new System.Windows.Forms.DateTimePicker();
            this.groupBox7 = new System.Windows.Forms.GroupBox();
            this.txtBoxNumero = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.groupBox8 = new System.Windows.Forms.GroupBox();
            this.txtBoxDica = new System.Windows.Forms.TextBox();
            this.label8 = new System.Windows.Forms.Label();
            this.groupBox9 = new System.Windows.Forms.GroupBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.toolTip1 = new System.Windows.Forms.ToolTip(this.components);
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.groupBox3.SuspendLayout();
            this.groupBox4.SuspendLayout();
            this.groupBox5.SuspendLayout();
            this.groupBox6.SuspendLayout();
            this.groupBox7.SuspendLayout();
            this.groupBox8.SuspendLayout();
            this.groupBox9.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.lblResultado);
            this.groupBox1.Controls.Add(this.btnLimpar);
            this.groupBox1.Controls.Add(this.btnDividir);
            this.groupBox1.Controls.Add(this.btnMultiplicar);
            this.groupBox1.Controls.Add(this.btnSubtrair);
            this.groupBox1.Controls.Add(this.btnSomar);
            this.groupBox1.Controls.Add(this.txtValor2);
            this.groupBox1.Controls.Add(this.txtValor1);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Location = new System.Drawing.Point(24, 13);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(383, 292);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Calculadora";
            this.groupBox1.Enter += new System.EventHandler(this.groupBox1_Enter);
            // 
            // lblResultado
            // 
            this.lblResultado.AutoSize = true;
            this.lblResultado.Location = new System.Drawing.Point(83, 182);
            this.lblResultado.Name = "lblResultado";
            this.lblResultado.Size = new System.Drawing.Size(32, 24);
            this.lblResultado.TabIndex = 10;
            this.lblResultado.Text = "==";
            this.lblResultado.Click += new System.EventHandler(this.lblResultado_Click);
            // 
            // btnLimpar
            // 
            this.btnLimpar.Location = new System.Drawing.Point(221, 132);
            this.btnLimpar.Name = "btnLimpar";
            this.btnLimpar.Size = new System.Drawing.Size(75, 34);
            this.btnLimpar.TabIndex = 9;
            this.btnLimpar.Text = "Limpar";
            this.btnLimpar.UseVisualStyleBackColor = true;
            this.btnLimpar.Click += new System.EventHandler(this.btnLimpar_Click);
            // 
            // btnDividir
            // 
            this.btnDividir.Location = new System.Drawing.Point(164, 132);
            this.btnDividir.Name = "btnDividir";
            this.btnDividir.Size = new System.Drawing.Size(35, 30);
            this.btnDividir.TabIndex = 8;
            this.btnDividir.Text = "/";
            this.btnDividir.UseVisualStyleBackColor = true;
            this.btnDividir.Click += new System.EventHandler(this.btnDividir_Click);
            // 
            // btnMultiplicar
            // 
            this.btnMultiplicar.Location = new System.Drawing.Point(107, 132);
            this.btnMultiplicar.Name = "btnMultiplicar";
            this.btnMultiplicar.Size = new System.Drawing.Size(35, 30);
            this.btnMultiplicar.TabIndex = 7;
            this.btnMultiplicar.Text = "x";
            this.btnMultiplicar.UseVisualStyleBackColor = true;
            this.btnMultiplicar.Click += new System.EventHandler(this.btnMultiplicar_Click);
            // 
            // btnSubtrair
            // 
            this.btnSubtrair.Location = new System.Drawing.Point(57, 132);
            this.btnSubtrair.Name = "btnSubtrair";
            this.btnSubtrair.Size = new System.Drawing.Size(35, 30);
            this.btnSubtrair.TabIndex = 6;
            this.btnSubtrair.Text = "-";
            this.btnSubtrair.UseVisualStyleBackColor = true;
            this.btnSubtrair.Click += new System.EventHandler(this.btnSubtrair_Click);
            // 
            // btnSomar
            // 
            this.btnSomar.Location = new System.Drawing.Point(6, 132);
            this.btnSomar.Name = "btnSomar";
            this.btnSomar.Size = new System.Drawing.Size(35, 30);
            this.btnSomar.TabIndex = 5;
            this.btnSomar.Text = "+";
            this.btnSomar.UseVisualStyleBackColor = true;
            this.btnSomar.Click += new System.EventHandler(this.button1_Click);
            // 
            // txtValor2
            // 
            this.txtValor2.Location = new System.Drawing.Point(87, 84);
            this.txtValor2.Name = "txtValor2";
            this.txtValor2.Size = new System.Drawing.Size(100, 29);
            this.txtValor2.TabIndex = 4;
            // 
            // txtValor1
            // 
            this.txtValor1.Location = new System.Drawing.Point(87, 40);
            this.txtValor1.Name = "txtValor1";
            this.txtValor1.Size = new System.Drawing.Size(100, 29);
            this.txtValor1.TabIndex = 3;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(12, 182);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(51, 24);
            this.label3.TabIndex = 2;
            this.label3.Text = "Total";
            this.label3.Click += new System.EventHandler(this.label3_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(12, 84);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(69, 24);
            this.label2.TabIndex = 1;
            this.label2.Text = "Valor2:";
            this.label2.Click += new System.EventHandler(this.label2_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 40);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(69, 24);
            this.label1.TabIndex = 0;
            this.label1.Text = "Valor1:";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.btnApagar);
            this.groupBox2.Controls.Add(this.lblIndice);
            this.groupBox2.Controls.Add(this.lblNome);
            this.groupBox2.Controls.Add(this.cbNome);
            this.groupBox2.Controls.Add(this.label4);
            this.groupBox2.Location = new System.Drawing.Point(469, 24);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(383, 281);
            this.groupBox2.TabIndex = 1;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "ComboBox";
            // 
            // btnApagar
            // 
            this.btnApagar.Location = new System.Drawing.Point(6, 220);
            this.btnApagar.Name = "btnApagar";
            this.btnApagar.Size = new System.Drawing.Size(82, 34);
            this.btnApagar.TabIndex = 4;
            this.btnApagar.Text = "Limpar";
            this.btnApagar.UseVisualStyleBackColor = true;
            this.btnApagar.Click += new System.EventHandler(this.btnApagar_Click);
            // 
            // lblIndice
            // 
            this.lblIndice.AutoSize = true;
            this.lblIndice.Location = new System.Drawing.Point(6, 182);
            this.lblIndice.Name = "lblIndice";
            this.lblIndice.Size = new System.Drawing.Size(42, 24);
            this.lblIndice.TabIndex = 3;
            this.lblIndice.Text = "..--..";
            // 
            // lblNome
            // 
            this.lblNome.AutoSize = true;
            this.lblNome.Location = new System.Drawing.Point(6, 127);
            this.lblNome.Name = "lblNome";
            this.lblNome.Size = new System.Drawing.Size(34, 24);
            this.lblNome.TabIndex = 2;
            this.lblNome.Text = "----";
            // 
            // cbNome
            // 
            this.cbNome.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cbNome.FormattingEnabled = true;
            this.cbNome.Items.AddRange(new object[] {
            "Selecione um nome",
            "Ana",
            "Beatrice",
            "Carlos",
            "Danilo",
            "Eduarda"});
            this.cbNome.Location = new System.Drawing.Point(6, 65);
            this.cbNome.Name = "cbNome";
            this.cbNome.Size = new System.Drawing.Size(207, 32);
            this.cbNome.TabIndex = 1;
            this.cbNome.SelectedIndexChanged += new System.EventHandler(this.cbNome_SelectedIndexChanged);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(6, 34);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(189, 24);
            this.label4.TabIndex = 0;
            this.label4.Text = "Selecione um Nome:";
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.lblCor);
            this.groupBox3.Controls.Add(this.label5);
            this.groupBox3.Controls.Add(this.rbAmarelo);
            this.groupBox3.Controls.Add(this.rbAzul);
            this.groupBox3.Location = new System.Drawing.Point(24, 352);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(383, 235);
            this.groupBox3.TabIndex = 2;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "RadioButton";
            // 
            // lblCor
            // 
            this.lblCor.AutoSize = true;
            this.lblCor.Location = new System.Drawing.Point(12, 148);
            this.lblCor.Name = "lblCor";
            this.lblCor.Size = new System.Drawing.Size(38, 24);
            this.lblCor.TabIndex = 3;
            this.lblCor.Text = "****";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(12, 39);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(177, 24);
            this.label5.TabIndex = 2;
            this.label5.Text = "Selecione uma Cor:";
            // 
            // rbAmarelo
            // 
            this.rbAmarelo.AutoSize = true;
            this.rbAmarelo.Location = new System.Drawing.Point(16, 106);
            this.rbAmarelo.Name = "rbAmarelo";
            this.rbAmarelo.Size = new System.Drawing.Size(99, 28);
            this.rbAmarelo.TabIndex = 1;
            this.rbAmarelo.TabStop = true;
            this.rbAmarelo.Text = "Amarelo";
            this.rbAmarelo.UseVisualStyleBackColor = true;
            this.rbAmarelo.CheckedChanged += new System.EventHandler(this.rbAmarelo_CheckedChanged);
            // 
            // rbAzul
            // 
            this.rbAzul.AutoSize = true;
            this.rbAzul.Location = new System.Drawing.Point(16, 72);
            this.rbAzul.Name = "rbAzul";
            this.rbAzul.Size = new System.Drawing.Size(65, 28);
            this.rbAzul.TabIndex = 0;
            this.rbAzul.TabStop = true;
            this.rbAzul.Text = "Azul";
            this.rbAzul.UseVisualStyleBackColor = true;
            this.rbAzul.CheckedChanged += new System.EventHandler(this.rbAzul_CheckedChanged);
            // 
            // groupBox4
            // 
            this.groupBox4.Controls.Add(this.lblItem);
            this.groupBox4.Controls.Add(this.ckItem2);
            this.groupBox4.Controls.Add(this.ckItem1);
            this.groupBox4.Controls.Add(this.label6);
            this.groupBox4.Location = new System.Drawing.Point(502, 352);
            this.groupBox4.Name = "groupBox4";
            this.groupBox4.Size = new System.Drawing.Size(350, 208);
            this.groupBox4.TabIndex = 3;
            this.groupBox4.TabStop = false;
            this.groupBox4.Text = "CheckBox";
            // 
            // lblItem
            // 
            this.lblItem.AutoSize = true;
            this.lblItem.Location = new System.Drawing.Point(12, 159);
            this.lblItem.Name = "lblItem";
            this.lblItem.Size = new System.Drawing.Size(34, 24);
            this.lblItem.TabIndex = 3;
            this.lblItem.Text = "*//*";
            // 
            // ckItem2
            // 
            this.ckItem2.AutoSize = true;
            this.ckItem2.Location = new System.Drawing.Point(16, 117);
            this.ckItem2.Name = "ckItem2";
            this.ckItem2.Size = new System.Drawing.Size(74, 28);
            this.ckItem2.TabIndex = 2;
            this.ckItem2.Text = "Item2";
            this.ckItem2.UseVisualStyleBackColor = true;
            this.ckItem2.CheckedChanged += new System.EventHandler(this.ckItem2_CheckedChanged);
            // 
            // ckItem1
            // 
            this.ckItem1.AutoSize = true;
            this.ckItem1.Location = new System.Drawing.Point(16, 83);
            this.ckItem1.Name = "ckItem1";
            this.ckItem1.Size = new System.Drawing.Size(74, 28);
            this.ckItem1.TabIndex = 1;
            this.ckItem1.Text = "Item1";
            this.ckItem1.UseVisualStyleBackColor = true;
            this.ckItem1.CheckedChanged += new System.EventHandler(this.ckItem1_CheckedChanged);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(12, 39);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(167, 24);
            this.label6.TabIndex = 0;
            this.label6.Text = "Selecione um Item";
            // 
            // groupBox5
            // 
            this.groupBox5.Controls.Add(this.lblDia);
            this.groupBox5.Controls.Add(this.lblHora);
            this.groupBox5.Location = new System.Drawing.Point(30, 610);
            this.groupBox5.Name = "groupBox5";
            this.groupBox5.Size = new System.Drawing.Size(407, 209);
            this.groupBox5.TabIndex = 4;
            this.groupBox5.TabStop = false;
            this.groupBox5.Text = "Timer";
            // 
            // lblDia
            // 
            this.lblDia.AutoSize = true;
            this.lblDia.Location = new System.Drawing.Point(51, 117);
            this.lblDia.Name = "lblDia";
            this.lblDia.Size = new System.Drawing.Size(35, 24);
            this.lblDia.TabIndex = 1;
            this.lblDia.Text = "dia";
            // 
            // lblHora
            // 
            this.lblHora.AutoSize = true;
            this.lblHora.Location = new System.Drawing.Point(50, 63);
            this.lblHora.Name = "lblHora";
            this.lblHora.Size = new System.Drawing.Size(60, 24);
            this.lblHora.TabIndex = 0;
            this.lblHora.Text = "label7";
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // groupBox6
            // 
            this.groupBox6.Controls.Add(this.lblData);
            this.groupBox6.Controls.Add(this.dtCalendario);
            this.groupBox6.Location = new System.Drawing.Point(502, 610);
            this.groupBox6.Name = "groupBox6";
            this.groupBox6.Size = new System.Drawing.Size(350, 163);
            this.groupBox6.TabIndex = 5;
            this.groupBox6.TabStop = false;
            this.groupBox6.Text = "DateTimePicker";
            // 
            // lblData
            // 
            this.lblData.AutoSize = true;
            this.lblData.Location = new System.Drawing.Point(12, 81);
            this.lblData.Name = "lblData";
            this.lblData.Size = new System.Drawing.Size(60, 24);
            this.lblData.TabIndex = 1;
            this.lblData.Text = "label7";
            // 
            // dtCalendario
            // 
            this.dtCalendario.Format = System.Windows.Forms.DateTimePickerFormat.Short;
            this.dtCalendario.Location = new System.Drawing.Point(6, 37);
            this.dtCalendario.Name = "dtCalendario";
            this.dtCalendario.Size = new System.Drawing.Size(301, 29);
            this.dtCalendario.TabIndex = 0;
            this.dtCalendario.ValueChanged += new System.EventHandler(this.dtCalendario_ValueChanged);
            // 
            // groupBox7
            // 
            this.groupBox7.Controls.Add(this.txtBoxNumero);
            this.groupBox7.Controls.Add(this.label7);
            this.groupBox7.Location = new System.Drawing.Point(923, 53);
            this.groupBox7.Name = "groupBox7";
            this.groupBox7.Size = new System.Drawing.Size(289, 143);
            this.groupBox7.TabIndex = 6;
            this.groupBox7.TabStop = false;
            this.groupBox7.Text = "Restrição de Letras";
            // 
            // txtBoxNumero
            // 
            this.txtBoxNumero.Location = new System.Drawing.Point(10, 76);
            this.txtBoxNumero.Name = "txtBoxNumero";
            this.txtBoxNumero.Size = new System.Drawing.Size(100, 29);
            this.txtBoxNumero.TabIndex = 1;
            this.txtBoxNumero.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.txtBoxNumero_KeyPress);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(6, 36);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(204, 24);
            this.label7.TabIndex = 0;
            this.label7.Text = "Insira apenas Números";
            this.label7.Click += new System.EventHandler(this.label7_Click);
            // 
            // groupBox8
            // 
            this.groupBox8.Controls.Add(this.txtBoxDica);
            this.groupBox8.Controls.Add(this.label8);
            this.groupBox8.Location = new System.Drawing.Point(923, 230);
            this.groupBox8.Name = "groupBox8";
            this.groupBox8.Size = new System.Drawing.Size(355, 164);
            this.groupBox8.TabIndex = 7;
            this.groupBox8.TabStop = false;
            this.groupBox8.Text = "ToolTip";
            // 
            // txtBoxDica
            // 
            this.txtBoxDica.Location = new System.Drawing.Point(42, 104);
            this.txtBoxDica.Name = "txtBoxDica";
            this.txtBoxDica.Size = new System.Drawing.Size(100, 29);
            this.txtBoxDica.TabIndex = 1;
            this.txtBoxDica.TextChanged += new System.EventHandler(this.txtBoxDica_TextChanged);
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(6, 40);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(291, 24);
            this.label8.TabIndex = 0;
            this.label8.Text = "Passe o mouse no campo abaixo";
            // 
            // groupBox9
            // 
            this.groupBox9.Controls.Add(this.pictureBox1);
            this.groupBox9.Location = new System.Drawing.Point(933, 481);
            this.groupBox9.Name = "groupBox9";
            this.groupBox9.Size = new System.Drawing.Size(396, 328);
            this.groupBox9.TabIndex = 8;
            this.groupBox9.TabStop = false;
            this.groupBox9.Text = "PictureBox";
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = global::projetoWindowsForms2.Properties.Resources.sub_conteudoGangrel01;
            this.pictureBox1.Location = new System.Drawing.Point(135, 55);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(101, 140);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // toolTip1
            // 
            this.toolTip1.AutoPopDelay = 5000;
            this.toolTip1.InitialDelay = 100;
            this.toolTip1.IsBalloon = true;
            this.toolTip1.ReshowDelay = 100;
            this.toolTip1.ToolTipIcon = System.Windows.Forms.ToolTipIcon.Info;
            this.toolTip1.ToolTipTitle = "Sistema ABC";
            this.toolTip1.Popup += new System.Windows.Forms.PopupEventHandler(this.toolTip1_Popup);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(11F, 24F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1467, 831);
            this.Controls.Add(this.groupBox9);
            this.Controls.Add(this.groupBox8);
            this.Controls.Add(this.groupBox7);
            this.Controls.Add(this.groupBox6);
            this.Controls.Add(this.groupBox5);
            this.Controls.Add(this.groupBox4);
            this.Controls.Add(this.groupBox3);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Margin = new System.Windows.Forms.Padding(6);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Ferramentas da Toolbox";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.groupBox3.ResumeLayout(false);
            this.groupBox3.PerformLayout();
            this.groupBox4.ResumeLayout(false);
            this.groupBox4.PerformLayout();
            this.groupBox5.ResumeLayout(false);
            this.groupBox5.PerformLayout();
            this.groupBox6.ResumeLayout(false);
            this.groupBox6.PerformLayout();
            this.groupBox7.ResumeLayout(false);
            this.groupBox7.PerformLayout();
            this.groupBox8.ResumeLayout(false);
            this.groupBox8.PerformLayout();
            this.groupBox9.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.GroupBox groupBox3;
        private System.Windows.Forms.GroupBox groupBox4;
        private System.Windows.Forms.GroupBox groupBox5;
        private System.Windows.Forms.Button btnLimpar;
        private System.Windows.Forms.Button btnDividir;
        private System.Windows.Forms.Button btnMultiplicar;
        private System.Windows.Forms.Button btnSubtrair;
        private System.Windows.Forms.Button btnSomar;
        private System.Windows.Forms.TextBox txtValor2;
        private System.Windows.Forms.TextBox txtValor1;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label lblResultado;
        private System.Windows.Forms.Label lblNome;
        private System.Windows.Forms.ComboBox cbNome;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label lblCor;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.RadioButton rbAmarelo;
        private System.Windows.Forms.RadioButton rbAzul;
        private System.Windows.Forms.Label lblItem;
        private System.Windows.Forms.CheckBox ckItem2;
        private System.Windows.Forms.CheckBox ckItem1;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label lblHora;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.GroupBox groupBox6;
        private System.Windows.Forms.Label lblData;
        private System.Windows.Forms.DateTimePicker dtCalendario;
        private System.Windows.Forms.Label lblDia;
        private System.Windows.Forms.Label lblIndice;
        private System.Windows.Forms.Button btnApagar;
        private System.Windows.Forms.GroupBox groupBox7;
        private System.Windows.Forms.TextBox txtBoxNumero;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.GroupBox groupBox8;
        private System.Windows.Forms.GroupBox groupBox9;
        private System.Windows.Forms.TextBox txtBoxDica;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.ToolTip toolTip1;
        private System.Windows.Forms.PictureBox pictureBox1;
    }
}

