import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {useListPeople} from '../context/ListPeople';

function PeopleGeral() {

  const {listPeople} = useListPeople();

  return (
      <Table striped size='lg'>
        <thead>
          <tr>
            <th></th>
            <th>CPF</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>

          {
            listPeople !== null && listPeople.geral !== null && 
            listPeople.geral.map(pessoa=>{
              return (
                <tr  key={41541654654}>
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

export default PeopleGeral;