function Notfound(request, response, next) {
  response.status(404).json({ error: 'pagina não encontrada' });
}
export default Notfound;