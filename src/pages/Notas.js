import { Table } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { Oval } from 'react-loader-spinner';
import Boletim from '../components/Boletim';

const Notas = () => {

    

    return (
        <div className="justify-content-center border mt-5">
            
            <Boletim />

            <Table striped border hover responsive>
                <thead>
                    <tr>
                        <th>

                        </th>
                    </tr>
                </thead>
            </Table>


        </div>
    );
}

export default Notas;