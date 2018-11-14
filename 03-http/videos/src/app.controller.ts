import {Get, Controller, Query, Param, Headers} from '@nestjs/common';
import { AppService } from './app.service';
import {Observable, ObservableInput, of} from "rxjs";

@Controller('Usuario')
export class AppController {
  //constructor(private readonly appService: AppService) {}

  @Get('saludar')
  //@Put, @Post
  saludar(): string {
    return 'Hola mundo';
  }

    @Get('despedirse')
    //@Put, @Post
    despedirse(): Promise <string> {
      return new Promise<string>((resolve, reject)=> {
          resolve('Adios!');
      })

    };

    @Get('saludarObservable')
    //@Put, @Post
    saludarObservable(): Observable <string> {
        return of('Hola mundo');

    };

    @Get('saludarP')
    //@Put, @Post
    saludarP(
        @Query() queryParams,
        @Query('nombre') nombre,
    ): string {
        return queryParams;
        //return nombre;

    };

    @Get('segmentoUno/:idUsuario/segmentoDos/')
    //@Put, @Post
    ruta(
        @Param() todosParametrosRuta,
        @Param('idUsuario') idUsuario,
    ): string {
        return idUsuario;
        //return nombre;
    };

    @Get('saludo')
    //@Put, @Post
    saludo(
        @Param() todosParametrosRuta,
        @Param('idUsuario') idUsuario,
        @Headers('seguridad') seguridad
    ): string {
        return idUsuario;
        //return nombre;
    };
}


