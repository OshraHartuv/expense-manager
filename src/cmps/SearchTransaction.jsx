import { BsSearch } from 'react-icons/bs';

export function SearchTransaction() {
    return (
        <section className="search-transaction">
            <BsSearch className='search-icon'/>
            <input type="text" />
        </section>
    );
}
