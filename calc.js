const students = [
    {
        name: 'Ana',
        note1: 8,
        note2: 6
    },
    {
        name: 'Victor',
        note1: 7,
        note2: 10
    },
    {
        name: 'Ramon',
        note1: 5,
        note2: 8
    },
]

function media(n1, n2) {
    let result = (n1 + n2) /2
    return result
}

function printMenssage(student) {
    let resultMedia = media(student.note1, student.note2)
    if(resultMedia >= 7){
        return `
            A média do aluno(a) ${student.name} é: ${resultMedia}
            Parabéns, ${student.name}!, você foi aprovado(a) no concurso!
        `
    } else {
        return `
            A média do aluno(a) ${student.name} é: ${resultMedia}
            Não foi dessa vez, ${student.name}! Tente novamente!
        `
    }
}

for (let student of students) {
    let mediaMenssage = printMenssage(student)
    alert(mediaMenssage)
}

