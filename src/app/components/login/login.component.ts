import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../shared/services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario,UsuarioLogueado } from '../../shared/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
	usuario: UsuarioLogueado = {
		nombre: '',
		password: ''
	}

	constructor(private router: Router, private usuarioService: AuthService){}

	async login(){
		try{
			if(this.usuario.nombre !== '' && this.usuario.password !== ''){
				const U1 = await this.usuarioService.login(this.usuario);
				if(U1 !== undefined && U1 !== null){
					this.usuarioService.usuarioLogueado = U1;
					this.usuarioService.logged = true;
					this.router.navigate(['/home']);
				}else{
					alert("USUARIO Y/O CONTRASEÑA INCORRECTOS.");
				}
			}else{
				alert('Llene los campos por favor.');
			}
			
		}catch(err){
			alert(err)
		}	
	}	
}

