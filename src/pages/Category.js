import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { getItemsByCondition } from '../app/api';

const Category = () => {
  const { id } = useParams();
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    getItemsByCondition(id).then((datas) => setItems2(datas));    // OBTENCION DE FILTRADO DE DATOS DE FIRESTORE
  }, [id]);

  return (
    <div>
      <ItemListContainer datosFiltrados={items2} />
      {console.log('datosFiltrados', items2)}
    </div>
  );
};

export default Category;
