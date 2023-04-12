import React from 'react'
import ListadoPacient from './ListadoPacient'

const Pacientes = ({ pacientes, setPacienteEditar, eliminarId }) => {

  return (
    <div>
      <h1 className='text-3xl font-bold mb-7 text-center'>Listado Pacientes</h1>

      {
        pacientes.length ? (
          <div className='w-4/4'>
          {
            pacientes.map(pacient => {
              return (
                <ListadoPacient
                  key={pacient.id}
                  pacient={pacient}
                  setPacienteEditar={setPacienteEditar}
                  eliminarId={eliminarId}
                />
              )
            })
          }
        </div>
        ) : (
          null
        )
      }
    </div>
  )
}

export default Pacientes