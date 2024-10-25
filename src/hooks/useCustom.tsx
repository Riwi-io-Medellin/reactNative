import React, { useCallback, useEffect, useRef, useState } from 'react';

export const useCustom = () => {

  const [suma, setSuma] = useState<number | null>(0);
  const [name, setName] = useState<string>('Ramiro');


  useEffect(()=> {
    console.log('hola desde el useEffect');
  },[]);

  const onChange = (num : number) => {
    setSuma(3 + num);
    setName('Riwi');
  };

  const myOnchange = useCallback(()=> {
    console.log('desde el useCallback');
  },[]);

  const ref = useRef(null);

  return {
    onChange,
    myOnchange,
    ref,
    suma,
    name,
  };
};
