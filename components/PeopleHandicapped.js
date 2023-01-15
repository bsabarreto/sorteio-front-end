import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {useListPeople} from '../context/ListPeople';

function PeopleHandicapped() {

  const {listPeople} = useListPeople();

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
            listPeople !== null && listPeople.deficienteFisico !== null && 
            listPeople.deficienteFisico.map(pessoa=>{
              return (
                <tr key={45646874987}>
                <th></th>
    
                <td>{pessoa.cpf}</td>
                <td>{pessoa.nome}</td>
              </tr>
              );
            }) 
          }

        </tbody>
      </Table>

  );
}

export default PeopleHandicapped;