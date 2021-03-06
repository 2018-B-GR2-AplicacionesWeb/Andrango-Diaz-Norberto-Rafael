import {
    Get,
    Controller,
    Request,
    Response,
    Headers,
    HttpCode,
    HttpException,
    Query,
    Param,
    Res,
    Post, Body
} from '@nestjs/common';
import {AppService} from './app.service';
import {Observable, of} from "rxjs";
import {Usuario, UsuarioService} from "./usuario.service";

// http://192.168.1.2:3000/Usuario/saludar     METODO -> GET
// http://192.168.1.2:3000/Usuario/salir   METODO -> POST
// http://192.168.1.2:3000/Usuario/registrar METODO -> PUT
// http://192.168.1.2:3000/Usuario/borrar METODO -> DELETE
// http://192.168.1.2:3000/Notas


// Decorador -> FUNCION
// SE EJECUTA ANTES DE ALGO
@Controller('Usuario') // Decoradores!
export class AppController {

    // CONSTRUCTOR NO ES UN CONSTRUCTOR NORMAL!!!

    constructor(
        private readonly _usuarioService: UsuarioService,
        // private readonly _appService:AppService,
    ) {

    }


    @Get('saludar')
    saludar(
        @Query() queryParams,
        @Query('nombre') nombre,
        @Headers('seguridad') seguridad,
    ): string { // metodo!
        return nombre;
    }

    // /Usuario/segmentoUno/12/segmentoDos
    @Get('segmentoUno/:idUsuario/segmentoDos')
    ruta(
        @Param() todosParametrosRuta,
        @Param('idUsuario') idUsuario,
    ): string { // metodo!
        return idUsuario;
    }


    @Get('despedirse')
    @HttpCode(201)
    despedirse(): Promise<string> {
        return new Promise<string>(
            (resolve, reject) => {

                throw new HttpException({
                        mensaje: 'Error en despedirse',
                    },
                    400);
            }
        );
    }

    @Get('tomar')
    @HttpCode(201)
    tomar(): string { // metodo!
        return 'Estoy borracho';
    }

    @Get('saludarObservable')
    saludarObservable(): Observable<string> { // metodo!
        return of('Hola mundo');
    }


    @Get('inicio')
    inicio(
        @Res() response
    ) {
        response.render('inicio', {
            nombre: 'Adrian',
            arreglo: this._usuarioService.usuarios
        });
    }

    @Post('borrar/:idUsuario')
    borrar(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        this._usuarioService.borrar(Number(idUsuario));

        response.redirect('/Usuario/inicio');
    }

    @Get('crear-usuario')
    crearUsuario(
        @Res() response
    ) {
        response.render(
            'crear-usuario'
        )
    }

    @Get('actualizar-usuario/:idUsuario')
    actualizarUsuario(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuarioAActualizar = this
            ._usuarioService
            .buscarPorId(Number(idUsuario));

        response.render(
            'crear-usuario', {
                usuario: usuarioAActualizar
            }
        )
    }

    @Post('crear-usuario')
    crearUsuarioFormulario(
        @Body() usuario: Usuario,
        @Res() response
    ) {

        this._usuarioService.crear(usuario);

        response.redirect('/Usuario/inicio')
    }

}
