// Rota para Cadastrar um Novo Usuário
app.post('/usuarios', async (req, res) => {
  try {
    // Pega os dados enviados no corpo da requisição (body)
    const { name, email, telefone, pass } = req.body;

    // Validação simples para garantir que os campos obrigatórios existem
    if (!name || !email || !pass) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
    }

    // Cria o usuário no banco de dados do XAMPP
    const novoUsuario = await User.create({
      name,
      email,
      telefone,
      pass
    });

    // Retorna o usuário criado com status 201 (Created)
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuario: novoUsuario });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário: ' + error.message });
  }
});
