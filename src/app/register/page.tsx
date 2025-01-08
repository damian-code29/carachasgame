"use client";

import { userInterface, Usuario } from "@/shared/interfaces/cardClass";
import { useState } from "react";
import { tableUSer } from "../../../database";

export const Registro: React.FC = () => {
  const [user, setUser] = useState<Partial<userInterface>>();
  return (
    <form role="submit">
      <label>
      <span>name</span>
      <input
        value={user?.name}
        onChange={(event) => {
          const value = event.target.value;
          setUser({...user,name:value});
        }}
      />
      </label>
      <label>
      <span>password</span>
      <input
        type="password"
        value={user?.password}
        onChange={(event) => {
          const value = event.target.value;
          setUser({...user,password:value})
        }}
      /></label>
        
      <label>
      <span>mail</span>
      <input
        type="email"
        value={user?.mail}
        onChange={(event) => {
          const value = event.target.value;
          setUser({...user,mail:value});
        }}
      /></label>

      <button type="button"
        onClick={() => {
          if (!user?.name || !user.password || !user.mail) return;
          const newUser = new Usuario(user.name, user.password, user.mail);
          tableUSer.push(newUser); console.log(tableUSer)
          setUser(undefined)
        }} 
      >
        Registro
      </button>
    </form>
  );
};

export default Registro;
