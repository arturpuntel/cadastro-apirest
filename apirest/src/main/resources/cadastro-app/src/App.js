import React, { Component } from 'react';
import { CadastroService } from './service/CadastroService';
import logo from './logo.svg';
import './App.css';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/components/column/Column';
import {Panel} from 'primereact/panel';
import {Menubar} from 'primereact/menubar';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



export default class App extends Component{
  constructor(){
    super();
    this.state = {};
    this.cadastroservice = new CadastroService();
  }
  
  componentDidMount(){
	    this.cadastroservice.getAll().then(data => this.setState({cadastro: data}))
	    this.setState({
	    	visible:false,
	    	client:{
	    		id:null,
	    		nome:null,
	    		senha:null
	    	}
	    });
  }
  
  render(){
	  return (
	    <div style={{width:'80%', margin:'0 auto', marginTop:'10px'}}>
	    <br/>
			<Panel header="CRUD APIREST - Cadastro" >
				 <DataTable value={this.state.cadastro}>
				 	<Column field="id" header="ID"></Column>
				 	<Column field="nome" header="Nome"></Column>
				 	<Column field="senha" header="Senha"></Column>
				 </DataTable>
			</Panel>
			<br/>
			<Button label="Save" className="p-button-success" />
			<Button label="Edit" className="p-button-warning" />
			<Button label="Delete" className="p-button-danger" />
		</div>
  );
}
}