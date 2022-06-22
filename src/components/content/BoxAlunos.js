import Box from '@mui/material/Box';
import Content from './Content';


const ContentBox = ({ contents, title, shouldLink }) => {

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
                {contents && contents.map((content) => (
                    <div className="materia text-dark" key={content.id}>
                        <Content
                            key={content.id}
                            title={content.title}
                            body={content.body}
                        /></div>)) 
                    }
            </Box>



        </Box>

    );
}

export default ContentBox;