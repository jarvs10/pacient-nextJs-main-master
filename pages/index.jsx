import Formulario from "@/components/Formulario";
import Pacientes from "@/components/Pacientes";
import { useState } from "react";

export default function Home() {

  const [pacientes, setPacientes] = useState([]);

  const [pacienteEditar, setPacienteEditar] = useState({});

  const eliminarId = (id) => {
    const pacientDelete = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientDelete);
  }

  return (
    <>
      <h1 className="text-6xl font-black mt-8 text-center">My Pacients App</h1>

      <div className="container mx-auto mt-20 grid grid-cols-2 gap-11">

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteEditar={pacienteEditar}
          setPacienteEditar={setPacienteEditar}
        />

        <Pacientes 
          pacientes={pacientes}
          setPacienteEditar={setPacienteEditar}
          eliminarId={eliminarId}
        />

      </div>
      
    </>
  )
}
