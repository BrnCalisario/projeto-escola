import Box from '@mui/material/Box';
import Content from './Content';


import { Link } from "react-router-dom";

const ContentBox = ({ content: materias, title, shouldLink }) => {

    return (
        <Box sx={{
            width: 'auto',
            height: 'auto',
            maxHeight: '500',
            border: '2px solid grey',
            marginBottom: 0
        }} className="">
            <h1 className='text-center bg-light border-bottom mb-0'>{title}</h1>

            <Box sx={{
                width: 'auto',
                height: 'auto',
            }}
                className='content-box overflow-auto'>
                {materias && materias.map((materia) => (
                    <div className="materia text-dark" key={materia.id}>

                        {shouldLink ? <Link to={'/materias/' + materia.id}>
                            <Content
                                key={materia.id}
                                title={materia.nome}
                                body={materia.nomeProfessor}
                            />
                        </Link> : <Content
                            key={materia.id}
                            title={materia.nome}
                            body={materia.nomeProfessor}
                        />}
                    </div>
                )
                )}
            </Box>



        </Box>

    );
}

export default ContentBox;