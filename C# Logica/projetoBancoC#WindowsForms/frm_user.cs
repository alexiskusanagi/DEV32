using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using System.Data.SqlClient;

//using bancoC#.Classes;


namespace projetoBancoC_WindowsForms
{
    public partial class frm_user : Form
    {
        public frm_user()
        {
            InitializeComponent();
            //AtualizarGrid();
            dataGridCadastroUser.DataBindingComplete += dataGridCadastroUserDataBindingComplete;
        }
        // conexão com o banco - sql connection
        SqlConnection con = new SqlConnection(dados.Conexao);

        private void label1_Click(object sender, EventArgs e)
        {

        }

        //teste de conexão com o banco
        private void btnTesteConexao_Click(object sender, EventArgs e)
        {
            try
            {
                con.Open();
                MessageBox.Show("Conexão OK");
                con.Close();
            }
            catch (SqlException erro)
            {

                MessageBox.Show(erro.Message);

            }

            finally { con.Close(); }

        }


        // CADASTRO DE USUÁRIOS
        private void btnCadastrar_Click(object sender, EventArgs e)
        {
            try
            {
                //validação de campos (se os mesmos estiverem preenchidos)
                if (txtBoxNome.Text == "" || txtBoxEndereco.Text == "" || cbUf == null || txtBoxNumero.Text == "")
                {
                    MessageBox.Show("Preencha os campos necessários", "preenche ai", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                }

                else
                {
                    con.Open();
                    string sql = "Insert into Usuario(user_nome, user_cpf, user_end, user_end_num, user_nascimento, user_sexo, user_cel, user_cidade, user_uf) values (@nome, @cpf, @end, @end_num, @nascimento, @sexo, @cel, @cidade, @uf) ";

                    SqlCommand cmd = new SqlCommand(sql, con); //aplicando o insert
                    cmd.Parameters.Add("@nome", SqlDbType.VarChar).Value = txtBoxNome.Text;
                    cmd.Parameters.Add("@cpf", SqlDbType.VarChar).Value = maskedTextBoxCpf.Text;
                    cmd.Parameters.Add("@end", SqlDbType.VarChar).Value = txtBoxEndereco.Text;
                    cmd.Parameters.Add("@end_num", SqlDbType.VarChar).Value = Convert.ToInt32(txtBoxNumero.Text);
                    cmd.Parameters.Add("@nascimento", SqlDbType.VarChar).Value = dataPickerNascimento.Text;
                    // cmd.Parameters.Add("@nascimento", SqlDbType.VarChar).Value = Convert.ToDateTime(dataPickerNascimento.Text);
                    cmd.Parameters.Add("@sexo", SqlDbType.VarChar).Value = cbSexo.Text;
                    cmd.Parameters.Add("@cel", SqlDbType.VarChar).Value = maskedtxtBoxCelular.Text;
                    cmd.Parameters.Add("@cidade", SqlDbType.VarChar).Value = txtBoxCidade.Text;
                    cmd.Parameters.Add("@uf", SqlDbType.VarChar).Value = cbUf.Text;
                    //executando o query
                    cmd.ExecuteNonQuery();
                    LimparTudo(); //- limpa os campos
                    AtualizarGrid(); // - atualiza o grid

                    MessageBox.Show("Cadastro OK", "Sistema funcional", MessageBoxButtons.OK, MessageBoxIcon.Information);



                }
            }
            catch (SqlException erro)
            {
                MessageBox.Show("Erro:" + erro.Message);

            }

        }
        //função limpar campos

        public void LimparTudo()
        {
            txtBoxNome.Clear();
            txtBoxEndereco.Clear();
            maskedtxtBoxCelular.Clear();
            txtBoxCidade.Clear();
            maskedTextBoxCpf.Clear();
            //cbSexo.Clear();
            //cbUf.Clear();
            txtBoxNumero.Clear();
            txtBoxNome.Focus();

        }

        //preenchimento da grid
        private void dataGridCadastroUserDataBindingComplete(object sender, DataGridViewBindingCompleteEventArgs e)
        {
            if (dataGridCadastroUser.Columns.Count >= 10)
            {
                //cabeçalhos
                dataGridCadastroUser.Columns[0].HeaderText = "ID";
                dataGridCadastroUser.Columns[1].HeaderText = "NOME";
                dataGridCadastroUser.Columns[2].HeaderText = "CPF";
                dataGridCadastroUser.Columns[3].HeaderText = "ENDEREÇO";
                dataGridCadastroUser.Columns[4].HeaderText = "NUM";
                dataGridCadastroUser.Columns[5].HeaderText = "DATA_NASCIMENTO";
                dataGridCadastroUser.Columns[6].HeaderText = "SEXO";
                dataGridCadastroUser.Columns[7].HeaderText = "CELULAR";
                dataGridCadastroUser.Columns[8].HeaderText = "CIDADE";
                dataGridCadastroUser.Columns[9].HeaderText = "UF";

                //largura das colunas

                dataGridCadastroUser.Columns[0].Width = 50;
                dataGridCadastroUser.Columns[1].Width = 150;
                dataGridCadastroUser.Columns[2].Width = 100;
                dataGridCadastroUser.Columns[3].Width = 200;
                dataGridCadastroUser.Columns[4].Width = 50;
                dataGridCadastroUser.Columns[5].Width = 100;
                dataGridCadastroUser.Columns[6].Width = 70;
                dataGridCadastroUser.Columns[7].Width = 100;
                dataGridCadastroUser.Columns[8].Width = 200;
                dataGridCadastroUser.Columns[9].Width = 50;


            }


        }
        public static DataTable ListarUsuario()
        {
            try
            {
                SqlConnection con = new SqlConnection(dados.Conexao);
                con.Open();
                string sqlListar = "SELECT * FROM Usuario";
                SqlDataAdapter da = new SqlDataAdapter(sqlListar, con);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
                con.Close();

            }
            catch (SqlException erro)
            {
                return null;
            }
            
        }

        // Atualizar Grid

        public void AtualizarGrid()
        {
            try
            {
                dataGridCadastroUser.AutoGenerateColumns = true; //gera automaticamente as colunas
                dataGridCadastroUser.DataSource = ListarUsuario(); // chama a função de listar usuário
                dataGridCadastroUser.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
                //configurações de segurança abaixo
                dataGridCadastroUser.AllowUserToAddRows = false; //usuario não pode editar numero de fileiras
                dataGridCadastroUser.AllowUserToDeleteRows = false; //usuario não pode apagar fileiras
                dataGridCadastroUser.ReadOnly = true; // usuario só pode ler os dados.
            }

            catch (SqlException erro)
            {
                MessageBox.Show(erro.Message);
            }
        }

        //Selecionar item grid
        private void dataGridCadastroUser_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            int linha = e.RowIndex; //para selecionar a linha inteira em qualquer parte
            //preecnhimento dos campos do select do dataGridCadastroUser
            txtBoxId.Text = dataGridCadastroUser.Rows[linha].Cells[0].Value?.ToString();
            txtBoxNome.Text= dataGridCadastroUser.Rows[linha].Cells[1].Value?.ToString();
            maskedTextBoxCpf.Text= dataGridCadastroUser.Rows[linha].Cells[2].Value?.ToString();
            txtBoxEndereco.Text= dataGridCadastroUser.Rows[linha].Cells[3].Value?.ToString();
            txtBoxNumero.Text= dataGridCadastroUser.Rows[linha].Cells[4].Value?.ToString();
            // data em padrão brasileiro
            var valorData = dataGridCadastroUser.Rows[linha].Cells[5].Value;
            if (valorData != null && DateTime.TryParse(valorData.ToString(), out DateTime dataNscimento))
            {
                 dataPickerNascimento.Text = dataNscimento.ToString("dd/MM;yyyy");
            }

            else
            {
                dataPickerNascimento.Text= string.Empty;
            }
            cbSexo.Text = dataGridCadastroUser.Rows[linha].Cells[6].Value?.ToString();
            maskedtxtBoxCelular.Text= dataGridCadastroUser.Rows[linha].Cells[7].Value?.ToString();
            txtBoxCidade.Text= dataGridCadastroUser.Rows[linha].Cells[8].Value?.ToString();
            cbUf.Text = dataGridCadastroUser.Rows[linha].Cells[9].Value?.ToString();

        }

        private void btnAlterar_Click(object sender, EventArgs e)
        {
            //Criação do update
            string sql = @"UPDATE Usuario Set" + "user_nome = @nome" + "user_cpf = @cpf" + "user_end = @end" + "user_end_num = @num" + "user_nascimento = @nascimento" + "user_sexo = @sexo" + "user_cel = @cel" + "user_cidade = @cidade" + "user_uf = @uf" + "WHERE user_id =@id";

            //executar o comando
            using (var con = new SqlConnection(dados.Conexao)) 
            using (var cmd = new SqlCommand(sql, con))
            {
                cmd.Parameters.AddWithValue("@id", Convert.ToInt32(txtBoxId.Text));
                cmd.Parameters.AddWithValue("@nome" , txtBoxNome.Text);
                cmd.Parameters.AddWithValue("@cpf", maskedTextBoxCpf.Text);
                cmd.Parameters.AddWithValue("@end", txtBoxEndereco.Text);
                cmd.Parameters.AddWithValue("@num", txtBoxNumero.Text);
                cmd.Parameters.AddWithValue("@nascimento", Convert.ToDateTime(dataPickerNascimento.Text));
                cmd.Parameters.AddWithValue("@sexo", cbSexo.Text);
                cmd.Parameters.AddWithValue("@cel", maskedtxtBoxCelular.Text);
                cmd.Parameters.AddWithValue("@cidade", txtBoxCidade.Text);
                cmd.Parameters.AddWithValue("@uf", cbUf.Text);

                con.Open();
                cmd.ExecuteNonQuery();
            }
            AtualizarGrid();
            LimparTudo();
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            //pergunta de confirmação
            var resp = MessageBox.Show("Tem certeza da exclusão?", "Confirmação", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            if (resp == DialogResult.Yes)
            {
                //executar o delete sem sim
                string sql = "DELETE from Usuario WHERE user_id = @id";
                using (var con = new SqlConnection(dados.Conexao))
                using (var cmd = new SqlCommand())
                {
                    cmd.Parameters.AddWithValue("@id", Convert.ToInt32(txtBoxId.Text));
                    con.Open();
                    cmd.ExecuteNonQuery();

                }
                AtualizarGrid();
                LimparTudo();

            }


        }

        //função de pesquisar usuario por nome
        public static DataTable PesquisarNome(string termo)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(dados.Conexao))
                {
                    string sql = "SELECT * FROM Usuario WHERE user_nome LIKE @termo";
                    SqlDataAdapter da = new SqlDataAdapter(sql, con);
                    da.SelectCommand.Parameters.AddWithValue("@termo", "%" + termo + "%");
                    DataTable dt = new DataTable();
                    da.Fill(dt);
                    return dt;
                }
            }

            catch (SqlException ex)
            {
                MessageBox.Show(ex.Message);
                return null;
            }
        }

        private void txtBoxNome_TextChanged(object sender, EventArgs e)  // VAZIO
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e) //pesquisa por nome
        {
            dataGridCadastroUser.DataSource = PesquisarNome(txtBoxPesquisa.Text);

            dataGridCadastroUser.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            //normas de acesso (igual do selecionar usuario)
            dataGridCadastroUser.AllowUserToAddRows = false; //usuario não pode editar numero de fileiras
            dataGridCadastroUser.AllowUserToDeleteRows = false; //usuario não pode apagar fileiras
            dataGridCadastroUser.ReadOnly = true; // usuario só pode ler os dados.


        }

        private void frm_user_Load(object sender, EventArgs e)
        {
            // mascara para cel - no meu já está maskedtxtBoxCelular. no do PRFESSOR está txtCelular
           /* txtCelular.Mask = "(00)00000 - 0000";
            txtCelular.PromptChar = '_';
            txtCelular.TextMaskFormat = MaskFormat.ExcludePromptAndLiterals; // salva apenas os números

            //Mascara para o cpf
            textCpf.Mask = "000.000.000.00";
            textCpf.PromptChar = '_';
            textCpf.TextMaskFormat = MaskFormat.ExcludePromptAndLiterals; // salva apenas os números

            //Mascara para seleção de sexo - no meu está cbSexo e cbUf. no do PROFESSOR está txtSexo e txtUf
            txtSexo.DropDownStyle = ComboBoxStyle.DropDownList;

            //Mascara para seleção de estado
            txtUf.DropDownStyle = ComboBoxStyle.DropDownList;  */
        }

        private void maskedTextBoxCpf_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar))
            {
                e.Handled = true;

            }
        }

        private void maskedtxtBoxCelular_MaskInputRejected(object sender, MaskInputRejectedEventArgs e) //vazio
        {
            
        }

        private void maskedtxtBoxCelular_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar))
            {
                e.Handled = true;

            }
        }
        //permitir apenas letras
        private void txtBoxNome_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsLetter(e.KeyChar))
            {
                e.Handled = true;

            }
        }
    }
}
