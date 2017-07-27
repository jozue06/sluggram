// INTERFACE
export default (err, req, res, next) => {
  console.error(err)
  if(err.status)
    return res.sendStatus(err.status)

  res.sendStatus(500)
}
