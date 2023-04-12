import React from 'react'

const ListadoPacient = ({pacient, setPacienteEditar, eliminarId}) => {

  const {nombre, email, fecha, sintomas, id} = pacient;

  return (
    <div className='mb-4 shadow-md bg-gray-100 py-4 px-4 rounded-md'>
      <p className='font-bold'>Nombre: <span className='font-normal'>{nombre}</span></p>
      <p className='font-bold'>Email: <span className='font-normal'>{email}</span></p>
      <p className='font-bold'>Fecha: <span className='font-normal'>{fecha}</span></p>
      <p className='font-bold'>Sintomas: <span className='font-normal'>{sintomas}</span></p>

      <div className='flex gap-4 mt-2'>
        <button onClick={() => setPacienteEditar(pacient)} className='bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-6 text-center font-bold rounded-md'>Editar</button>
        <button onClick={() => eliminarId(id)} className='bg-red-600 hover:bg-red-800 text-white py-2 px-6 text-center font-bold rounded-md'>Eliminar</button>
      </div>
    </div>
  )
}

export default ListadoPacient