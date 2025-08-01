import {Card} from "./components/Card";
import style from "./App.module.css"
function App() {


  const students= [
    {
    name:"Linda Katalina", 
    rol:"Estudiante", 
    image:"https://i.pravatar.cc/100",
    descripcion:"hola hajahjkshjja skhjhasgjas asjjasgdja jgashg"
  },
  {
    name:"Linda Katalina", 
    rol:"Estudiante", 
    image:"https://i.pravatar.cc/100",
    descripcion:"hola hajahjkshjja skhjhasgjas asjjasgdja jgashg"
  },
  {
    name:"Linda Katalina", 
    rol:"Estudiante", 
    image:"https://i.pravatar.cc/100",
    descripcion:"hola hajahjkshjja skhjhasgjas asjjasgdja jgashg"
  },
  {
    name:"Linda Katalina", 
    rol:"Estudiante", 
    image:"https://i.pravatar.cc/100",
    descripcion:"me gusta el front"
  },
]
  return (
    <>
    <h1 className={style.title}>Lista de estudiantes</h1>
   
    <section  className={style.container}>
      {students.map((student, i)=>{
        return(
        <Card
        key={i}
          name={student.name}
          rol={student.rol}
          image={student.image}
          descripcion={student.descripcion}
          />
      )
      })}
      </section>
    </>
    );
};
export default App;
