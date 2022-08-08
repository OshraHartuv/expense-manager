import { AiOutlinePlus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export function CreateTransaction() {
    const navigate = useNavigate();
    return (
        <button
            className="create-transaction"
            onClick={() => navigate('/transaction/edit')}
        >
            <div className="icon">
                <AiOutlinePlus />
            </div>
        </button>
    );
}
