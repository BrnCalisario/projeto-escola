import useFetch from "../hooks/useFetch";

const Test = () => {

    const alunoSelected = 1;
    const { data: aluno, isPending, error } = useFetch("http://localhost:8000/alunos/" + alunoSelected);
    const { data: materiasCadastradas, isPending: isPendingMaterias, error: errorMaterias } = useFetch("http://localhost:8000/materias");

    if (aluno && materiasCadastradas) {
        const {materias: alunoMaterias } = aluno;


        const idsAluno = alunoMaterias.map((mat) => {
            let { id } = mat
            return id
        })

        var materiasAluno = materiasCadastradas.map((mat, index) => {
            if (mat.id === idsAluno[index]) {
                return mat
            } else { return null };
        })

        materiasAluno = materiasAluno.filter((el) => {
            return el != null
        })
    }



    return (
        <div>
            {materiasAluno.map((mat) => (
                <div> 
                    {mat.nome}
                    {mat.nomeProfessor}
                </div>
            ))}
        </div>
    );
}

export default Test;