class Contato {
  idContato: number
  nomeContato: string
  emailContato: string
  numeroCelular: string

  constructor(id: number, nome: string, email: string, numero: string) {
    this.idContato = id
    this.nomeContato = nome
    this.emailContato = email
    this.numeroCelular = numero
  }
}

export default Contato
