import Box from '@mui/material/Box';
import Content from './Content';

const ContentBox = ( { content: materias } ) => {
    return (
        <Box sx={{
            width: 'auto',
            height: 'auto',
            maxHeight: '300',
            border: '2px solid grey',
            marginBottom: 0
        }} className="">
            <h1 className='text-center bg-light border-bottom mb-0'>Matérias</h1>
            <Box sx={{
                width: 'auto',
                height: 'auto',
        }}
                className='content-box overflow-auto'>
                {materias.map((materia) => (
                    <Content
                        key={ materia.id }
                        title={materia.nome}
                        body={materia.nomeProfessor}
                    />
                )
                )}
            </Box>
        </Box>

    );
}

export default ContentBox;