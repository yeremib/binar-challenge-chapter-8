import { useState } from 'react';
import './App.css';
import Table from "./components/Table.js";
import Form from "./components/Form.js";



function App() {

  const DUMMY_PLAYER = [
    { id: 1, username: "brimstone", email: "brim@gmail.com", experience: "1500xp", level: "20"},
    { id: 2, username: "sova", email: "sova@gmail.com", experience: "3560xp", level: "35"},
  ];
  
  const [playerData, setPlayerData] = useState(DUMMY_PLAYER);
  const [newData, setNewData] = useState(null);

  const addPlayer = (data) => {
    const lastPlayer = playerData[playerData.length - 1];
    console.log('panjang data:', lastPlayer)
    const newPlayer = {
      ...data,
      id: lastPlayer.id + 1,
    };

    setPlayerData((prevState) => {
      return [
      ...prevState,
      newPlayer,
    ]});

  };

  const getPlayerData = (data) => {
    setNewData(data);
  };

  const updatePlayer = (data) => {
    
    setPlayerData((prevState) => {
      const newPlayerData = prevState.filter((player) => player.id !== newData.id);

      return [
        ...newPlayerData,
        data,
      ];
    }) 
  };

  const deletePlayer = (data) => {
    setPlayerData ((prevState) => {
      const newPlayerData = prevState.filter((player) => player.id !== newData.id);
      console.log('new data:', newPlayerData);
      return [
        ...newPlayerData,
      ]
    })
  };


  return (
    <div className="app">
      <Form
        form={newData} 
        onAddPlayer={addPlayer} 
        onUpdatePlayer={updatePlayer}
        onDeletePlayer={deletePlayer}
      />

      <Table 
        players={playerData}
        onEditData={getPlayerData}
        onDeleteData={getPlayerData}
        />
    </div>
    
    
  );
}

export default App;
 