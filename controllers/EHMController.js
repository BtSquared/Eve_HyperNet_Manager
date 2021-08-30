// Reqiure Models Here

const GetExample = async (req, res) => {
  res.send({ msg: `${req.method} Example` })
}
const PostExample = async (req, res) => {
  res.send({ msg: `${req.method} Example`, data: req.body || [] })
}
const UpdateExample = async (req, res) => {
  res.send({ msg: `${req.method} Example`, data: req.body || [] })
}
const DeleteExample = async (req, res) => {
  res.send({ msg: `${req.method} Example` })
}

module.exports = {}
