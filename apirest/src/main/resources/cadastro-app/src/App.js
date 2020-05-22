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
import {Growl} from 'primereact/growl';


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



export default class App extends Component{
  constructor(){
    super();
    this.state = {
    	visible:false,
    	client:{
    		id:null,
    		nome:null,
    		senha:null
    		},
		selectedClient : {

    }
    };
    this.actionTemplate1 = this.actionTemplate1.bind(this);
    this.actionTemplate2 = this.actionTemplate2.bind(this);
    this.showSaveDialog = this.showSaveDialog.bind(this);
    this.showEditDialog = this.showEditDialog.bind(this);
    this.cadastroservice = new CadastroService();
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
	this.footer = (
	      <div>
	        <Button label="Save" icon="pi pi-check" onClick={this.save} />
	      </div>			
    );
  }
  
 actionTemplate1(rowData, column) {
     return <div>
     	<Button label="Edit" className="p-button-warning" onClick={this.showEditDialog} />
     	
     </div>;
}

 actionTemplate2(rowData, column) {
     return <div>
      	<Button label="Delete" className="p-button-danger" onClick={this.delete} />
     </div>;
}
 
  
  componentDidMount(){
	    this.cadastroservice.getAll().then(data => this.setState({cadastro: data}))
  }
  
  save() {
	  this.cadastroservice.save(this.state.client).then(data => {
		  this.setState({
		  visible: false,
		  client:{
	    		id:null,
	    		nome:null,
	    		senha:null
		  }
		  });
		  this.growl.show({severity: 'success', summary: 'Success!', detail: 'Order Submitted!'});
		  this.cadastroservice.getAll().then(data => this.setState({cadastro: data}))
	  })
  }
  
  delete() {
	    if(window.confirm("Are you sure?")) {
	      this.cadastroservice.delete(this.state.selectedClient.client).then(data => {
	      this.growl.show({severity: 'success', summary: 'Attention!', detail: 'Deleted Order!'});
	      this.cadastroservice.getAll().then(data => this.setState({cadastro: data}));
	      });
	    }
  }
  
  render(){
	  return (
	    <div style={{width:'80%', margin:'0 auto', marginTop:'10px'}}>
	    <br/>
			<Panel header="CRUD APIREST - Cadastro" >
				 <DataTable value={this.state.cadastro} selectionMode="single" selection={this.state.selectedClient} onSelectionChange={e => this.setState({selectedClient: e.value})}>
				 	<Column field="id" header="ID"></Column>
				 	<Column field="nome" header="Nome"></Column>
				 	<Column field="senha" header="Senha"></Column>
				 	<Column header="Editar" body={this.actionTemplate1} style={{textAlign:'center', width: '8em'}}/>
				 	<Column header="Deletar" body={this.actionTemplate2} style={{textAlign:'center', width: '8em'}}/>		
				 </DataTable>	
		<br/>
			<Button label="Save" className="p-button-success" onClick={this.showSaveDialog} />
			</Panel>
				<Dialog header="Criar Cliente" visible={this.state.visible} footer={this.footer} style={{width: '400px'}} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
				<span className="p-float-label">
					<InputText value={this.state.client.nome} style={{width:'100%'}} id="nome" onChange={(e) => {
						let val = e.target.value;
						this.setState(prevState => {
						console.log(val);
						let client = Object.assign({}, prevState.client);
						client.nome = val
						
						return {client};
					})}
					} />
					<label htmlFor="nome">Nome</label>
				</span>
				<span className="p-float-label">
				<InputText value={this.state.client.senha} style={{width:'100%'}} id="senha" onChange={(e) => {
					let val = e.target.value;
					this.setState(prevState => {
					console.log(val);
					let client = Object.assign({}, prevState.client);
					client.senha = val
					
					return {client};
				})}
				} />
				<label htmlFor="senha">Senha</label>
			</span>
				</Dialog>
				<Growl ref={(el) => this.growl = el} />
		</div>
  );
}
  showSaveDialog(){
	    this.setState({
	      visible : true,
	      client : {
	        id: null,
	        nome: null,
	        senha: null
	      }
	    });	   
  }
  
  showEditDialog() {
	    this.setState({
	      visible : true,
	      client : {
	      id: this.state.selectedClient.id,	  
	      nome: this.state.selectedClient.nome,
	      senha: this.state.selectedClient.senha
	      }
	    })
	  }
}