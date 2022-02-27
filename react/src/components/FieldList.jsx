import Field from "./Field"
import FieldForm from './FieldForm';

import { useState, useEffect } from 'react';
import {   getField,  createField,   deleteField} from "../api/field";

const FieldList = () => {
    const [fields, setFields] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateField = (field) => {
        setIsLoading(true);
        createField(field)
            .then((newField) => {
                 setFields((prevState) => [...prevState, newField]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteField = (field) => {
       setIsLoading(true);
       deleteField(field)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getField().then((fields) => {    
            setFields(fields);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            fields.map(field => 
                <Field 
                    key={field._id} 
                    field={field} 
                   onDelete={() => doDeleteField(field)}
                />)}
        <FieldForm createField={doCreateField}></FieldForm>
    </>
        
}
    

export default FieldList;