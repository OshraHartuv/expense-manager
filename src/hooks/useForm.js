import { useState } from 'react';
import { useEffectUpdate } from './useEffectUpdate';

export const useForm = (initialState, cb = () => {}) => {
    const [fields, setFields] = useState(initialState);

    useEffectUpdate(() => {
        cb(fields);
    }, fields);

    const handleChange = ({ target }) => {
        const field = target.name;
        let value;
        if (target.type === 'number')  value = +target.value
        else if (target.type === 'date') value = +new Date(target.value)
        else value = target.value
        console.log('val',value);
        setFields((prevFields) => ({ ...prevFields, [field]: value }));
    };

    return [fields, handleChange, setFields];
};
