import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {
  fizzbuzz(number): any {
  
    if (number <= 0)
    return ;

    if (number >= 100)
    return ;

    if (number % 15 === 0 ) /*pero nunca entraría acá si cumple con el tres primero por eso va acá este : OJO*/
    return "fizzbuzz";

    if (number % 3 === 0 )
    return "fizz";

    if (number % 5 === 0 )
    return "buzz";

    if (number )
    return "no cumple con ninguna de estas condiciones";

  }
}
