import React, { createContext, useState, useEffect, useContext } from 'react';
import {  GetListPeople,GetWinners } from '../../services/people'


const ListPeopleContext = createContext({ showList: false, listPeople: {deficienteFisico:[], idosos:[], geral:[], numeroDeParticipantes:0}, loading: true });

export const ListPeopleProvider = ({ children }) => {

  const [listPeople, setListPeople] = useState({deficienteFisico:[], idosos:[], geral:[], numeroDeParticipantes:0});
  const [listWinners, setListWinners] = useState({ idososGanhador:{}, deficienteFisicoGanhador:{}, geralGanhador:[]});


  useEffect(async()=>{
    const response = await GetListPeople();
    setListPeople(response);

  }, []);


   async function  raffleHousing() {

    const response = await GetWinners();
    setListWinners(response);
  }

  return (
    <ListPeopleContext.Provider
      value={{
        listPeople,
        raffleHousing,
        listWinners

      }}
    >
      {children}
    </ListPeopleContext.Provider>
  );
}

export function useListPeople() {
  const context = useContext(ListPeopleContext);
  const {
    listPeople,
    raffleHousing,
    listWinners

  } = context;
  return {
    listPeople,
    raffleHousing,
    listWinners
  };
}
