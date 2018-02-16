class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector('data');
    this._inputQuantidade = <HTMLInputElement>document.querySelector('quantidae');
    this._inputValor = <HTMLInputElement>document.querySelector('valor');
  }

  adicionar(event: Event) {
    event.preventDefault()
    const negociacao = new Negociacao(this._inputData.value, this, this._inputQuantidade.value, this._inputValor.value);
  }
}