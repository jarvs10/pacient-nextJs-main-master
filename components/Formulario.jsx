import React, { useEffect, useState } from 'react'
import Error from './Error';
import { generarId } from '@/utilities/generarId';

const Formulario = ({ pacientes, setPacientes, pacienteEditar, setPacienteEditar }) => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacienteEditar).length > 0) {
      setNombre(pacienteEditar.nombre);
      setEmail(pacienteEditar.email);
      setFecha(pacienteEditar.fecha);
      setSintomas(pacienteEditar.sintomas);
    }
  }, [pacienteEditar])

  const handleSubmit = (e) => {

    e.preventDefault();

    if ([nombre, email, fecha, sintomas].includes('')) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    const objPaciente = {
      nombre,
      email,
      fecha,
      sintomas
    }

    if (pacienteEditar.id) {
      objPaciente.id = pacienteEditar.id;

      const pacienteUpdate = pacientes.map(pacient => pacient.id === pacienteEditar.id ? objPaciente : pacient);

      setPacientes(pacienteUpdate);

      setPacienteEditar({});

    } else {
      objPaciente.id = generarId();

      setPacientes([...pacientes, objPaciente]);
    }

    setError(false);
    setNombre('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div>
      <h1 className='text-3xl font-bold mb-7 text-center'>Formulario de Registro</h1>

      <form onSubmit={(e) => handleSubmit(e)} className='shadow-md bg-gray-100 py-8 px-3 rounded-md w-4/4'>
        <div className='mb-4'>
          <label className='block mb-2 font-bold' htmlFor="nombre">Nombre: </label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} className='w-full py-2 px-2' type="text" placeholder='Nombre' id='nombre' />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 font-bold' htmlFor="email">Email: </label>
          <input value={email} onChange={e => setEmail(e.target.value)} className='w-full py-2 px-2' type="email" placeholder='Email' id='email' />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 font-bold' htmlFor="fecha">Fecha: </label>
          <input value={fecha} onChange={e => setFecha(e.target.value)} className='w-full py-2 px-2' type="date" id='fecha' />
        </div>

        <div className='mb-6'>
          <label className='block mb-2 font-bold' htmlFor="sintomas">Sintomas: </label>
          <input value={sintomas} onChange={e => setSintomas(e.target.value)} className='w-full py-2 px-2' type="text" id='sintomas' placeholder='sintomas' />
        </div>

        <input type='submit' className='bg-indigo-600 hover:bg-indigo-800 text-center w-full py-2 cursor-pointer text-white font-bold rounded-md' value={pacienteEditar.id ? 'UPDATE' : 'AGREGAR'} />

        {
          error && <Error>Todos los campos son obligatorios</Error>
        }

      </form>
    </div>
  )
}

export default Formulario