import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {useListPeople} from '../context/ListPeople';

function PeopleOld() {

  const {listPeople} = useListPeople();
  const {  } = useListPeople();

  return (
      <Table  striped size='lg'>
        <thead>
          <tr>
            <th></th>
            <th>CPF</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>

          {
            listPeople !== null && listPeople.idosos !== null && 
            listPeople.idosos.map(pessoa=>{
              return (
                <tr key={456846849874}>
                <th></th>
    
                <td>{pessoa.cpf} </td>
                <td>{pessoa.nome}</td>
              </tr>
              );
            }) 
          }

        </tbody>
      </Table>

  );
}

export default PeopleOld;