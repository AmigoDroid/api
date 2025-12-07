function pageError(err, request, response, next) {
  console.error(err);
  response.status(500).json({ error: 'erro interno do servidor' , details: err.message });
}
export default pageError;