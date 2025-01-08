"use client";

import { Character,characterInterface, linaje } from "@/shared/interfaces/cardClass";
import { useState } from "react";
import { tableCharacter } from "../../../database";

export const CharacterCreation: React.FC = () => {
  const [char, setChar] = useState<Partial<characterInterface>>();
  return (
    <form role="submit">
      <label>
      <span>name</span>
      <input
        value={char?.name}
        onChange={(event) => {
          const value = event.target.value;
          setChar({...char,name:value});
        }}
      />
      </label>

      <select value={char?.linaje}
              onChange={(event)=>{
                const value = event.target.value as linaje;
                setChar({...char,linaje:value});
              }}>
        <option value="lagartija">lagartijas</option>
        <option value="culebras">culebras</option>
        <option value="sapos">sapos</option>
        <option value="hormigas">hormigas</option>
        <option value="gusanos">gusanos</option>

      </select>
      

      <button type="button"
        onClick={() => {
          if (!char?.name  || !char.linaje) return;
          const newChar = new Character(char.name, char.linaje);
          tableCharacter.push(newChar);
          setChar(undefined)
          console.log(tableCharacter)
        }} 
      >
        Registro
      </button>
    </form>
  );
};

export default CharacterCreation;
