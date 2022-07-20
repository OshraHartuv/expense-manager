import { AiOutlinePlus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';

export function CreateTransaction() {
    return (
        // <section className="create-transaction">
            <button
                className="create-transaction"
                onClick={() => (window.location.href = '/transaction/edit')}
            >
                <div>
                    <AiOutlinePlus className="icon" />
                    {/* <span className='fa fa-plus'></span> */}
                    {/* <span className='create-txt'>Create</span> */}
                </div>
            </button>
        // </section>
    );
}
