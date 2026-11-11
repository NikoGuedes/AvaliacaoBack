import express from "express";
import db from "./repository/index.js";

const app = express();
 
app.use(express.json());


app.post("/api/listaDeTarefas", (req, res) => {
    
    const { id, descricao, data, concluido } = req.body;

    if (!id || !descricao || !data || !concluido ){ 
    res.send({ message: "Preencha todos os campos!"});
    return;
    }

    db.push({ id, descricao, data, concluido })
    res.send ({message: "Tarefa criada"})
   
});

app.get("/api/tarefa", (req, res) => {
    const id = Number(req.params.id);
    const tarefa = tarefa.find;  

    if(!tarefa){
      res.status.send ({message: "tarefa nao encontrada"})
      return;
    }
    res.send ({message: "tarefa encontrada"})
});
 
app.put("/api/alterar/api", (req, res) => {
    const id = Number(req.params.id);
    const tarefa = db.find

    if(!tarefa){
      res.status.send ({message: "favor informar id"})
      return;
    }
    // capotamo o corsakkkkkkkkkkkkk k
    tarefa.descricao = descricao;
    tarefa.data = data;
    tarefa.concluido = concluido;

    res.send({message:"tarefa alterada"});

});

app.put ("/api/status/:id", (req, res) => {
  const id = Number(req.params.id)
  const tarefa = db.find(tarefa => tarefa.id == id)

  if(!tarefa) {
    res.send({message: "favor informar o id"});
    return 
  }
  tarefa.concluido = !tarefa.concluido
  res.send({ message: "status alterado"})

});
 
app.delete("/api/deletar/:id", (req, res) => {
  const id = Number(req.params.id);
  const  tarefa = db.find(tarefa => tarefa.id == id);

  if(!tarefa){
    res.send({message: "favor informar id da tarefa"})
    return;
  }
  db.delete(!tarefa)
  res.send({message:"apagando tarefa..."})

});
 
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});