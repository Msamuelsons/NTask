module.exports = (app) => {
  app.get('/tasks', (req, res) => {
    res.json({
      tasks: [{ title: 'Jogar Video Game' }, { title: 'Começar a estudar!' }],
    })
  })
}
