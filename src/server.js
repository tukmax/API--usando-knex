import server from './app';

const PORT = 3333;

server.listen(PORT, (req, res)=> console.log(`Runing at: ${PORT}`));
