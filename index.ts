import QuadraFutebol from './QuadraFutebol';
import Clube from './src/Clube';

const CluebeDoGalo = new Clube();

const quadraFutebol = new QuadraFutebol();

CluebeDoGalo.adicionarQuadra(quadraFutebol);
quadraFutebol.reservar<Date>(new Date());

console.log(
  CluebeDoGalo.buscarQuadra<QuadraFutebol>(0).reservar<Date>(new Date())
);
