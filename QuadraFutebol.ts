import Quadra from './src/Quadra';
import IAgenda from './src/interfaces/IAgenda';
import IFutebol from './src/interfaces/IFutebol';
import normas from './src/normas/normasDeUso';

class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;

  public reservar<IFutebol>(horario: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horario,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}

export default QuadraFutebol;
