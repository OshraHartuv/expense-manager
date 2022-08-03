import { memo } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useFormRegister } from '../hooks/useFormRegister.js'

export const SearchTransaction = memo((props) => {
    
    const [register] = useFormRegister({
        text: '',
    }, props.onChangeFilter)

    console.log('Filter rendered');

    return (
        <section className="search-transaction">
            <BsSearch className="search-icon" />
            <input type="text" placeholder="Search Transaction" {...register('text')}/>
        </section>
    );
});
