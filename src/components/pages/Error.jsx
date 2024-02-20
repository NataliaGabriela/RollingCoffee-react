import { Image } from 'react-bootstrap';
import imgError from '../../../assets/error404.png';
const Error = () => {
    return (
        <div className='tx-center d-flex justify-content-center'>
            <Image src={imgError} className='imagenError' fluid/>
        </div>
    );
};

export default Error;