import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'

const EditTask = ({ taskId }) => {
  let { id } = useParams();

  useEffect(() => {
    console.log('edit task page init');
  }, []);

  return <h1>{id}</h1>;
};

export default EditTask;
