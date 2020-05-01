import knex from '../dbs'
class  UsersContoller {

  async create(req, res) {
    const { username, password, email } = req.body;
    const newuser = await knex('users').returning([{ id: 'id', user: 'username', email: 'email' }]).insert({ username, password, email })
    return res.json({ msg: 'create', newuser })
  }

  async index(req, res) {
    const users = await knex('users').select('id', 'username', 'email', 'created_at', 'updated_at');
    return res.json({ msg: 'index', users })
  }

  async profile(req, res) {
    const { id } = req.params;
    const user = await knex('users').where({ 'id': id }).select('id', 'username', 'email', 'created_at', 'updated_at')
    return res.json({ msg: 'profile', user })
  }

  async update(req, res) {
    const { id } = req.params;
    const { username, password , email } = req.body;
    const user = await knex('users').where({ 'id': id }).update({ username, password , email }, ['id', 'username', 'email', 'created_at', 'updated_at'] )
    return res.json({ msg: 'update', user})
  }

  async delete(req, res) {
    const { id } = req.params;
    const del = await knex('users').where({'id':id}).returning(['id', 'username', 'email', 'created_at', 'updated_at']).del()
    console.log(del)
    if(del){
      return res.json({msg: 'Usuario deletado!', del })
    }
    return res.json({msg:'Usuario nao encontrado', del})
  }

}

export default new UsersContoller;
