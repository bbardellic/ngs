class Question{
    constructor(maxanswers){
        this.titulo = ""
        this.answers = []
        this.maxanswers = maxanswers
    }

    AgregarTitulo(tit){
        this.titulo = tit
    }
    AgregarAnswer(ans){
        if (this.answers.length < this.maxanswers){
            this.answers.push(ans)
        }else{
            console.log("El numero maximo de answers se ha excedido de " + this.titulo)
        }
       
    }
    ImprimirAnswer(){
        
        console.log("\nTitulo: " + this.titulo + "\n" +
                    "Numero maximo de answers: " + this.maxanswers + "\n"
                    );
        
        for (let i = 0; i < this.answers.length;i++){
            console.log(this.answers[i])
        }
    }
}

class SingleChoice extends Question {
    constructor(){
        super(10)
        
        
    }
}

class MultipleChoice extends Question {
    constructor(){
        super(12)
    }
}

const q1 = new Question(5)

q1.AgregarTitulo("Titulo 1")
q1.AgregarAnswer("Como te llamas?")
q1.AgregarAnswer("Como estas?")
q1.AgregarAnswer("Como sdasd?")
q1.AgregarAnswer("Como deeeeeee?")
q1.AgregarAnswer("Como aaaaaaaaaa?")

const q2 = new SingleChoice

q2.AgregarTitulo("Titulo 2")
q2.AgregarAnswer("Como te llamas?111")
q2.AgregarAnswer("Como estas?11")
q2.AgregarAnswer("Como sdasd?11")
q2.AgregarAnswer("Como deeeeeee?11")
q2.AgregarAnswer("Como aaaaaaaaaa?11")
q2.AgregarAnswer("111Como te llamas?111")
q2.AgregarAnswer("111Como estas?11")
q2.AgregarAnswer("111Como sdasd?11")
q2.AgregarAnswer("111Como deeeeeee?11")
q2.AgregarAnswer("111Como aaaaaaaaaa?11")

const q3 = new MultipleChoice

q3.AgregarTitulo("Titulo 2")
q3.AgregarAnswer("C31123omo te llamas?111")
q3.AgregarAnswer("312213Como estas?11")
q3.AgregarAnswer("312231Como sdasd?11")
q3.AgregarAnswer("C321213omo deeeeeee?11")
q3.AgregarAnswer("321213Como aaaaaaaaaa?11")
q3.AgregarAnswer("aa11aa1a1a1Como te llamas?111")
q3.AgregarAnswer("a2a2a2a2Como estas?11")
q3.AgregarAnswer("Ca3a33aa3a3omo sdasd?11")
q3.AgregarAnswer("a44a44aComo deeeeeee?11")
q3.AgregarAnswer("a555a55a55Como aaaaaaaaaa?11")
q3.AgregarAnswer("00000a44a44aComo deeeeeee?11")
q3.AgregarAnswer("0000a555a55a55Como aaaaaaaaaa?11")



q1.ImprimirAnswer()
q2.ImprimirAnswer()
q3.ImprimirAnswer()