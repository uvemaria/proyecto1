class HOSPITAL
{
    constructor()
	{
        this._personas = [];
        this._citas = [];
        this._pruebas = [];
        this._ambulancias = [];
        this._tratamientos = [];
        //this._medicamentos = [];
    }
    /*longitudPrueba()
    {
    	var sMensaje = this._pruebas.length;
    	return sMensaje;
    }*/
    //MODIFICACION 20/01
    altaPaciente(oPaciente)
    {
        var encontrado = false;
        var sMensaje = "";
        var indice = 0;
        
            for (var i = 0; i < this._personas.length && !encontrado; i++)
            {
                if((this._personas[i].nif == oPaciente.nif || this._personas[i].numSS == oPaciente.numSS) && this._personas[i] instanceof Paciente)
                {
                    encontrado = true;
                    indice = i;
                }
            }
        
        if(encontrado==true)
        {
            if (this._personas[indice].nif == oPaciente.nif)
            {
                sMensaje = "Paciente con dni: "+this._personas[indice].nif+"  ya registrado con anterioridad";
            }
            else
            {
                sMensaje = "Paciente con número SS: "+this._personas[indice].numSS+"  ya registrado con anterioridad";
            }
        } 
        else
        {
            this._personas.push(oPaciente);
            sMensaje = "Paciente dado de alta";		
        }
            
        return sMensaje;
    }
    listadoPacientes()
    {
        var tablas = document.querySelectorAll(".tablas");

        for (var x = 0; x < tablas.length; x++) 
        {
            tablas[x].remove();
        }
        var tCabeceras = new Array("DNI","Nombre","Apellidos","Dirección","Correo Electrónico","Teléfono","Nº Seg. Social");
        var oTabla = document.createElement("table");
        oTabla.setAttribute("border","2");
        oTabla.setAttribute("align","center");
        oTabla.classList.add("tablas");
        var oTHead = oTabla.createTHead();
        oTHead.style.backgroundColor = "#94B2D4";
        var oFila = oTHead.insertRow(-1);
        //var oTH = document.createElement("th");
        var oTH = "";
        for (var i=0;i<tCabeceras.length;i++)  //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
        {
            oTH = document.createElement("th");
            oTH.textContent = tCabeceras[i];
            oFila.appendChild(oTH); 
        }
        /*oTH.textContent = "DNI";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Nombre";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Apellidos";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Dirección";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Correo electrónico";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Teléfono";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Nº Seg. Social";
        oFila.appendChild(oTH);*/

        for(var i=0;i<this._personas.length;i++)
        {
            
            if(this._personas[i] instanceof Paciente)
                this._personas[i].toHTMLRow(oTabla);
            
        }

        return oTabla;
    }

    altaMedico(oMedico)
    {
        var encontrado = false;
        var sMensaje = "";
        var indice = 0;
        
            for (var i = 0; i < this._personas.length && !encontrado; i++)
            {
                if((this._personas[i].nif == oMedico.nif || this._personas[i].numColegiado == oMedico.numColegiado) && this._personas[i] instanceof Medico)
                {
                    encontrado = true;
                    indice = i;
                }
            }
        
        if(encontrado==true)
        {
            if (this._personas[indice].nif == oMedico.nif)
            {
                sMensaje = "Médico con dni: "+this._personas[indice].nif+"  ya registrado con anterioridad";
            }
            else
            {
                sMensaje = "Médico con número Colegiado: "+this._personas[indice].numColegiado+"  ya registrado con anterioridad";
            }
        } 
        else
        {
            this._personas.push(oMedico);
            sMensaje = "Médico dado de alta";		
        }
            
        return sMensaje;
    }

    //MODIFICACION 25/01
    listadoMedicos()
    {
        var tablas = document.querySelectorAll(".tablas");

        for (var x = 0; x < tablas.length; x++) 
        {
            tablas[x].remove();
        }
        var tCabeceras = new Array("DNI","Nombre","Apellidos","Direección","Correo Electrónico","Teléfono","Nº Colegiado");
        var oTabla = document.createElement("table");
        oTabla.setAttribute("border","2");
        oTabla.setAttribute("align","center");
        oTabla.classList.add("tablas");
        var oTHead = oTabla.createTHead();
        oTHead.style.backgroundColor = "#94B2D4";
        var oFila = oTHead.insertRow(-1);
        //var oTH = document.createElement("th");
        var oTH = "";
        for (var i=0;i<tCabeceras.length;i++) //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
        {
            oTH = document.createElement("th");
            oTH.textContent = tCabeceras[i];
            oFila.appendChild(oTH);
        }
        /*oTH.textContent = "DNI";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Nombre";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Apellidos";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Dirección";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Correo electrónico";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Teléfono";
        oFila.appendChild(oTH);
        oTH = document.createElement("th");
        oTH.textContent = "Nº Colegiado";
        oFila.appendChild(oTH);*/

        for(var i=0;i<this._personas.length;i++)
        {
            
            if(this._personas[i] instanceof Medico)
                this._personas[i].toHTMLRow(oTabla);
            
        }

        return oTabla;
    }
    //FIN MODIFICACION 25/01 
    
    listaPacientes()
    {
        var sPacientes = new Array();
        var iIndice = 0;
        for(var i=0;i<this._personas.length;i++)
        {            
            if(this._personas[i] instanceof Paciente)
            {
                sPacientes[iIndice] = this._personas[i].nif;            
                iIndice++;
            }
        }
        sPacientes.sort();
       
        return sPacientes;
    }
    listaMedicos()
    {
        var sMedicos = new Array();
        var iIndi = 0;
        for(var j=0;j<this._personas.length;j++)
        {
            if(this._personas[j] instanceof Medico)
            {
                sMedicos[iIndi] = this._personas[j].numColegiado;
                iIndi++;
            }
        }
        sMedicos.sort();
       
        return sMedicos;
    }

    listaMedicos2()
    {
        var sMedicos = new Array();
        var iIndi = 0;
        for(var j=0;j<this._personas.length;j++)
        {
            if(this._personas[j] instanceof Medico)
            {
                sMedicos[iIndi] = this._personas[j].nif;
                iIndi++;
            }
        }
        sMedicos.sort();
       
        return sMedicos;
    }

    listaAmbulancias()
    {
        var sAmbulancias = new Array();
        var iIndi = 0;
        for(var j=0;j<this._ambulancias.length;j++)
        {
            sAmbulancias[iIndi] = this._ambulancias[j].matricula;
            iIndi++;
        }
        sAmbulancias.sort();
       
        return sAmbulancias;
    }

    listaPruebas()
    {
        var sPruebas = new Array();
        var iIndi = 0;
        for(var j=0;j<this._pruebas.length;j++)
        {
            sPruebas[iIndi] = this._pruebas[j].ID;
            iIndi++;
        }
        sPruebas.sort();
       
        return sPruebas;
    }
    datosPrueba(pruebaID)
    {
        var oPrueba = new Prueba();
        var bEncontrado = false;
        for (var i = 0; i<this._pruebas.length && !bEncontrado; i++)
        {
            if (this._pruebas[i].ID == pruebaID)
            {
                oPrueba = this._pruebas[i];
                bEncontrado = true;
            }
        }
        return oPrueba;
    }

    listaTratamientos()
    {
        var sTra = new Array();
        var iIndi = 0;
        for(var j=0;j<this._tratamientos.length;j++)
        {
            sTra[iIndi] = this._tratamientos[j].ID;
            iIndi++;
        }
        sTra.sort();
       
        return sTra;
    }

    datosAmbulancia(matricula)
    {
        var oAmbulancia = new Ambulancia();
        var bEncontrado = false;
        for(var j=0;j<this._ambulancias.length && !bEncontrado;j++)
        {
            if(this._ambulancias[j].matricula == matricula)
                {
                    bEncontrado = true;
                    oAmbulancia = this._ambulancias[j];
                    //alert("Tengo ambulancia");
                }
        }
        return oAmbulancia;
    }

    datosPaciente(pacienteNif)
    {
        var oPaciente = new Paciente();
        var bEncontrado = false;
        for (var j=0;j<this._personas.length && !bEncontrado;j++)
        {
            //alert("Entra en el for");
            if(this._personas[j] instanceof Paciente)
            {
                if(this._personas[j].nif == pacienteNif)
                {
                    bEncontrado = true;
                    oPaciente = this._personas[j];
                    //alert("Tengo medico");
                }
            }
        }
        return oPaciente;
    }

    modificarAmbulancia(matricula,marca,capacidad)
    {
        var sMensaje = "";
        var bEncontrado = false;
        //alert("Entro en modificar");
        for (var j=0;j<this._ambulancias.length && !bEncontrado;j++)
        {
            if(this._ambulancias[j].matricula == matricula)
            {
                bEncontrado = true;
                //alert("Tengo medico");
                this._ambulancias[j].marca = marca;
                this._ambulancias[j].capacidad = capacidad;
                sMensaje = "Ambulancia modificada correctamente.";
            }
        }
        return sMensaje;
    }

    modificarPaciente(nif,ss,nombre,apellidos,dir,email,tlf)
    {
        var sMensaje = "";
        var bEncontrado = false;
        //alert("Entro en modificar");
        for (var j=0;j<this._personas.length && !bEncontrado;j++)
        {
            if(this._personas[j] instanceof Paciente)
            {
                if(this._personas[j].nif == nif)
                {
                    bEncontrado = true;
                    this._personas[j].numSS = ss;
                    this._personas[j].nombre = nombre;
                    this._personas[j].apellidos = apellidos;
                    this._personas[j].direccion = dir;
                    this._personas[j].email = email;
                    this._personas[j].telefono = tlf;
                    sMensaje = "Paciente modificado correctamente.";
                }
            }
        }
        return sMensaje;
    }

    datosMedico(medicoNumCole)
    {
        var oMedico = new Medico();
        var bEncontrado = false;
        //alert("Estoy en objetos "+medicoNumCole);
        for (var j=0;j<this._personas.length && !bEncontrado;j++)
        {
            //alert("Entra en el for");
            if(this._personas[j] instanceof Medico)
            {
                //alert("Soy medico "+this._personas[j].numColegiado);
                if(this._personas[j].numColegiado == medicoNumCole)
                {
                    bEncontrado = true;
                    oMedico = this._personas[j];
                    //alert("Tengo medico");
                }
            }
        }
        return oMedico;
    }

    modificarMedico(medicoNif,numCole,nombre,apellidos,dir,email,tlf)
    {
        var sMensaje = "";
        var bEncontrado = false;
        //alert("Entro en modificar");
        for (var j=0;j<this._personas.length && !bEncontrado;j++)
        {
            if(this._personas[j] instanceof Medico)
            {
                if(this._personas[j].numColegiado == numCole)
                {
                    bEncontrado = true;
                    //alert("Tengo medico");
                    this._personas[j].nif = medicoNif;
                    this._personas[j].nombre = nombre;
                    this._personas[j].apellidos = apellidos;
                    this._personas[j].direccion = dir;
                    this._personas[j].email = email;
                    this._personas[j].telefono = tlf;
                    sMensaje = "Médico modificado correctamente.";
                }
            }
        }
        return sMensaje;
    }
    
    altaCita(oCita)
    {
        var encontrado = false;
        var sMensaje = "";
        
        for (var i = 0; i < this._citas.length && !encontrado; i++)
        {
             //MODIFICACION 21/01
            if (this._citas[i].id == oCita.id)
            {
                encontrado = true;              
            }
             // FIN MODIFICACION 21/01
        }
        
        if(encontrado==true)
        {
            sMensaje = "Cita ya registrada con anterioridad";
        } 
        else
        {
            this._citas.push(oCita);
            sMensaje = "Cita creada";		
        }
            
        return sMensaje;
    }

    // MODIFICACION 25/01
    listadoCitas()
    {
        var tablas = document.querySelectorAll(".tablas");

        for (var x = 0; x < tablas.length; x++) 
        {
            tablas[x].remove();
        }
        var tCabeceras = new Array("ID","Paciente","Médico","Fecha","Hora","Descripción","Anulada");
        var oTabla = document.createElement("table");
        oTabla.setAttribute("border","2");
        oTabla.setAttribute("align","center");
        oTabla.classList.add("tablas");
        var oTHead = oTabla.createTHead();
        oTHead.style.backgroundColor = "#94B2D4";
        var oFila = oTHead.insertRow(-1);
        //var oTH = document.createElement("th");
        var oTH = "";
        for (var i=0;i<tCabeceras.length;i++)    
        {
            oTH = document.createElement("th");
            oTH.textContent = tCabeceras[i];
            oFila.appendChild(oTH);
        }

        for(var i=0;i<this._citas.length;i++)
        {
                this._citas[i].toHTMLRow(oTabla);   
        }

        return oTabla;
    }
     // FIN MODIFICACION 25/01

    //MODIFICACION 21/01
    listaCitas()
    {
        var sCitas = new Array();
        var indi = 0;
        for(var j=0;j<this._citas.length;j++)
        {
        	if (this._citas[j].anulada == false)
        	{
            	sCitas[indi] = this._citas[j].id;
            	indi++;
            }
        }
        sCitas.sort();
       
        return sCitas;
    }
    datosCita(citaId)
    {
        var oCita = new Cita();
        var bEncontrado = false;
        for (var i=0;i<this._citas.length && !bEncontrado;i++)
        {
            if (this._citas[i].id == citaId)
            {
                bEncontrado = true;
                oCita = this._citas[i];
            }
        }
        return oCita;
    }

    datosTratamiento(tratamientoID)
    {
        var oTratamiento = new Tratamiento();
        var bEncontrado = false;
        for (var i=0;i<this._tratamientos.length && !bEncontrado;i++)
        {
            if (this._tratamientos[i].ID == tratamientoID)
            {
                bEncontrado = true;
                oTratamiento = this._tratamientos[i];
            }
        }
        return oTratamiento;
    }
    anularCita(citaId)
    {
        var sMensaje = "";
        var bEncontrado = false;
        for (var i=0;i<this._citas.length && !bEncontrado;i++)
        {
            if (this._citas[i].id == citaId && !bEncontrado)
            {
                bEncontrado = true;
                this._citas[i].anulada = true;
                sMensaje = "Cita anulada, crear nueva cita si el paciente lo desea";
            }
        }
        return sMensaje;
    }
   altaAmbulancia(oAmbulancia)
    {
        var encontrado = false;
        var sMensaje = "";
        
        for (var i = 0; i < this._ambulancias.length && !encontrado; i++)
        {
            if (this._ambulancias[i].matricula == oAmbulancia.matricula)
            {
                encontrado = true;              
            }
        }
        
        if(encontrado==true)
        {
            sMensaje = "Ambulancia ya registrada con anterioridad";
        } 
        else
        {
            this._ambulancias.push(oAmbulancia);
            sMensaje = "Ambulancia dada de alta";		
        }
            
        return sMensaje;
    }
    //MODIFICADO POR IVÁN 25/01
    listadoAmbulancias()
    {
        var tablas = document.querySelectorAll(".tablas");

        for (var x = 0; x < tablas.length; x++) 
        {
            tablas[x].remove();
        }
        var tCabeceras = new Array("Matrícula","Capacidad","Marca");
        var oTabla = document.createElement("table");
        oTabla.setAttribute("border","2");
        oTabla.setAttribute("align","center");
        oTabla.classList.add("tablas");
        var oTHead = oTabla.createTHead();
        oTHead.style.backgroundColor = "#94B2D4";
        var oFila = oTHead.insertRow(-1);
        //var oTH = document.createElement("th");
        var oTH = "";
        for (i=0;i<tCabeceras.length;i++)    //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
        {
            oTH = document.createElement("th");
            oTH.textContent = tCabeceras[i];
            oFila.appendChild(oTH);
        }

        for(var i=0;i<this._ambulancias.length;i++)
        {
            this._ambulancias[i].toHTMLRow(oTabla);   
        }

        return oTabla;
    }
    //FIN MODIFICADO POR IVÁN 25/01
    altaPrueba(oPrueba)
    {
        var encontrado = false;
        var sMensaje = "";
        
        for (var i = 0; i < this._pruebas.length && !encontrado; i++)
        {
            if (this._pruebas[i].ID == oPrueba.ID)
            {
                encontrado = true;              
            }
        }
        
        if(encontrado==true)
        {
            sMensaje = "Prueba ya registrada con anterioridad";
        } 
        else
        {
            this._pruebas.push(oPrueba);
            
            sMensaje = "Prueba añadida al sistema";
        }

        return sMensaje;
    }
    // FIN MODIFICACION 21/01

    //MODIFICACION 27/01 MARINA
    modificarPrueba(oPrueba)
    {
        var bEncontrado = false;
        var sMensaje = "";
        for (var i=0;i<this._pruebas.length && !bEncontrado;i++)
        {
            if (this._pruebas[i].ID == oPrueba.ID)
            {
                this._pruebas[i].fecha = oPrueba.fecha;
                this._pruebas[i].hora = oPrueba.hora;
                this._pruebas[i].tipo = oPrueba.tipo;
                this._pruebas[i].descripcion = oPrueba.descripcion;
                this._pruebas[i].paciente = oPrueba.paciente;
                this._pruebas[i].medico = oPrueba.medico;
                bEncontrado = true;
                sMensaje = "Prueba modificada";
            }
        }
        return sMensaje;
    }

    altaTratamiento(oTratamiento)
    {
        var bEncontrado = false;
        var sMensaje = "";
        for (var i = 0; i < this._tratamientos.length && !bEncontrado; i++)
        {
            if (this._tratamientos[i].ID == oTratamiento.ID)
            {
                bEncontrado = true;              
            }
        }
        
        if(bEncontrado==true)
        {
            sMensaje = "Tratamiento ya registrado con anterioridad";
        } 
        else
        {
            this._tratamientos.push(oTratamiento);
            
            sMensaje = "Tratamiento añadido al sistema";
        }
        return sMensaje;
    }
    modificarTratamiento(oTratamiento)
    {
        var bEncontrado = false;
        var sMensaje = "";
        for (var i=0;i<this._tratamientos.length && !bEncontrado;i++)
        {
            if (this._tratamientos[i].ID == oTratamiento.ID)
            {
                bEncontrado = true;
                this._tratamientos[i].posologia = oTratamiento.posologia;
                this._tratamientos[i].inicio = oTratamiento.inicio;
                this._tratamientos[i].fin = oTratamiento.fin;
                this._tratamientos[i].paciente = oTratamiento.paciente;
                this._tratamientos[i].medico = oTratamiento.medico;
                this._tratamientos[i].medicamento = oTratamiento.medicamento;
                this._tratamientos[i].instrucciones = oTratamiento.instrucciones;
                sMensaje = "Tratamiento modificado";
            }
        }
        return sMensaje;
    }
    //FIN MODIFICACION 27/01
    //mio
    listadoPruebas()
    {
        var tablas = document.querySelectorAll(".tablas");

        for (var x = 0; x < tablas.length; x++) 
        {
            tablas[x].remove();
        }
        var tCabeceras = new Array("ID","Fecha","Hora","Tipo","Descripción","Paciente","Médico");
        var oTabla = document.createElement("table");
        oTabla.setAttribute("border","2");
        oTabla.setAttribute("align","center");
        oTabla.classList.add("tablas");
        var oTHead = oTabla.createTHead();
        oTHead.style.backgroundColor = "#94B2D4";
        var oFila = oTHead.insertRow(-1);
        //var oTH = document.createElement("th");
        var oTH = "";
        for (var i=0;i<tCabeceras.length;i++)    //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
        {
            oTH = document.createElement("th");
            oTH.textContent = tCabeceras[i];
            oFila.appendChild(oTH);
        }
        
        for(var i=0;i<this._pruebas.length;i++)
        {
                this._pruebas[i].toHTMLRow(oTabla);   
        }

        return oTabla;
    }
    //FIN MODIFICADO POR IVÁN 25/01
    //MODIFICACION MARINA 28/01
    listadoTratamientosPaciente(pacienteID)
    {
        var tablas = document.querySelectorAll(".tablas");
        
        for (var x = 0; x < tablas.length; x++) 
        {
            tablas[x].remove();
        }
        var tCabeceras = new Array("ID","Posologia","Fecha Inicio","Fecha Fin","Médico","Medicamento","Instrucciones");
        var oTabla = document.createElement("table");
        oTabla.setAttribute("border","2");
        oTabla.setAttribute("align","center");
        oTabla.classList.add("tablas");
        var oTHead = oTabla.createTHead();
        oTHead.style.backgroundColor = "#94B2D4";
        var oFila = oTHead.insertRow(-1);
        //var oTH = document.createElement("th");
        var oTH = "";
        for (var i=0;i<tCabeceras.length;i++)   
        {
            oTH = document.createElement("th");
            oTH.textContent = tCabeceras[i];
            oFila.appendChild(oTH);
        }
        for(var i=0;i<this._tratamientos.length;i++)
        {
            if(this._tratamientos[i].paciente == pacienteID)
            {
                this._tratamientos[i].toHTMLRowPac(oTabla);   
            }
        }

        return oTabla;
    }
    //FIN MODIFICACION MARINA 28/01

    //MODIFICACION valme 28/01
    listadoCitasMedico(med)
    {
        var tablas = document.querySelectorAll(".tablas");
        
        for (var x = 0; x < tablas.length; x++) 
        {
            tablas[x].remove();
        }
        var tCabeceras = new Array("ID","Paciente","Médico","Fecha","Hora","Descripción","Anulada");
        var oTabla = document.createElement("table");
        oTabla.setAttribute("border","2");
        oTabla.setAttribute("align","center");
        oTabla.classList.add("tablas");
        var oTHead = oTabla.createTHead();
        oTHead.style.backgroundColor = "#94B2D4";
        var oFila = oTHead.insertRow(-1);
        //var oTH = document.createElement("th");
        var oTH = "";
        for (var i=0;i<tCabeceras.length;i++)   
        {
            oTH = document.createElement("th");
            oTH.textContent = tCabeceras[i];
            oFila.appendChild(oTH);
        }
        for(var j=0;j<this._citas.length;j++)
        {
            if(this._citas[j].medico == med)
            {
                //alert("entro en medico igual medico");
                this._citas[j].toHTMLRow(oTabla);   
            }
        }
        return oTabla;
    }
    //FIN MODIFICACION valme 28/01

}

//persona:
function Persona(sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono,sFoto)
{
    this.nif = sNif;
    this.nombre = sNombre;
    this.apellidos = sApellidos;
    this.direccion = sDireccion;
    this.email = sEmail;
    this.telefono = sTelefono;
}
// MODIFICACION 25/01
Persona.prototype.toHTMLRow=function(oTabla)
{
    var tCeldas = new Array(this.nif,this.nombre,this.apellidos,this.direccion,this.email,this.telefono);
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    for (var i=0;i<tCeldas.length;i++)   //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
    {
        oCelda.textContent = tCeldas[i];
        oCelda = oFila.insertCell(-1);
    }
    return oFila;
}
// FIN MODIFICACION 25/01

//Medico:
function Medico(sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono,iColegiado)
{
    Persona.call(this,sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono);
    this.numColegiado = iColegiado;
}
Medico.prototype = Object.create(Persona.prototype);
Medico.prototype.constructor = Medico;
//MODIFICACION 25/01
Medico.prototype.toHTMLRow = function(oTabla)
{
    var tCeldas = new Array(this.nif,this.nombre,this.apellidos,this.direccion,this.email,this.telefono,this.numColegiado);
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    for (var i=0;i<tCeldas.length;i++)   //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
    {
        oCelda.textContent = tCeldas[i];
        oCelda = oFila.insertCell(-1);
    }
    return oFila;
}
// FIN MODIFICACION 25/01

//Paciente:
function Paciente(sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono,iSegSocial)
{
    Persona.call(this,sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono);
    this.numSS = iSegSocial;
}
Paciente.prototype = Object.create(Persona.prototype);
Paciente.prototype.constructor = Paciente;
//MODIFICACION 25/01
Paciente.prototype.toHTMLRow = function(oTabla)
{
    var tCeldas = new Array(this.nif,this.nombre,this.apellidos,this.direccion,this.email,this.telefono,this.numSS);
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    for (var i=0;i<tCeldas.length;i++)    //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
    {
        oCelda.textContent = tCeldas[i];
        oCelda = oFila.insertCell(-1);
    }
    return oFila;
}
// FIN MODIFICACION 25/01

//Ambulancia:
function Ambulancia(sMatricula,iCapacidad,sMarca)
{
    this.matricula = sMatricula;
    this.capacidad = iCapacidad;
    this.marca = sMarca;
}
//MODIFICACION IVAN 25-01 - AÑADIDO
Ambulancia.prototype.toHTMLRow = function(oTabla)
{
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = this.matricula;
    oCelda = oFila.insertCell(-1);
    oCelda.textContent = this.capacidad;
    oCelda = oFila.insertCell(-1);
    oCelda.textContent = this.marca;
    return oFila;    
}
//FIN MODIFICACION IVAN 25-01

//Prueba:
function Prueba(id,sFecha,sHora,sTipo,sDescripcion,iPaciente,iMedico)
{
    this.ID = id;
    this.fecha = sFecha;
    this.hora = sHora;
    this.tipo = sTipo;
    this.descripcion = sDescripcion;
    this.paciente = iPaciente;
    this.medico = iMedico;
}

//MODIFICACION 25/01
//Modificion Ivan - fix para la function para que haga bien los listados
Prueba.prototype.toHTMLRow=function(oTabla)
{
    var tCeldas = new Array(this.ID,this.fecha,this.hora,this.tipo,this.descripcion,this.paciente,this.medico);
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    for (var i=0;i<tCeldas.length;i++)    //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
    {
        oCelda.textContent = tCeldas[i];
        oCelda = oFila.insertCell(-1);
    }
    
 
    return oFila;
}
// FIN MODIFICACION 25/01

//Tratamiento
function Tratamiento(iID,sPosologia,sInicio,sFin,oMedico,oPaciente,sMedicamento,sInstrucciones)
{
    this.ID = iID;
    this.posologia = sPosologia;
    this.inicio = sInicio;
    this.fin = sFin;
    this.medico = oMedico;
    this.paciente = oPaciente;
    this.medicamento = sMedicamento;
    this.instrucciones = sInstrucciones;
}

//MODIFICACION 25/01
Tratamiento.prototype.toHTMLRow=function(oTabla)
{
    var tCeldas = new Array(this.ID,this.posologia,this.inicio,this.fin,this.medico,this.paciente,this.medicamento,this.instrucciones);
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    for (var i=0;i<tCeldas.length;i++)     //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
    {
        oCelda.textContent = tCeldas[i];
        oCelda = oFila.insertCell(-1);
    }
    return oFila;
}
// FIN MODIFICACION 25/01
// MODIFICACION MARINA 28/01
Tratamiento.prototype.toHTMLRowPac=function(oTabla)
{
    var tCeldas = new Array(this.ID,this.posologia,this.inicio,this.fin,this.medico,this.medicamento,this.instrucciones);
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    for (var i=0;i<tCeldas.length;i++)     //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
    {
        oCelda.textContent = tCeldas[i];
        oCelda = oFila.insertCell(-1);
    }
    return oFila;
}
//FIN MODIFICACION MARINA 28/01
//Medicamento
function Medicamento(sNombre,sProspecto,iId)
{
    this.nombre = sNombre;
    this.prospecto = sProspecto;
    this.id = iId;
}
//MODIFICACION 25/01
Medicamento.prototype.toHTMLRow=function(oTabla)
{
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = this.nombre;
    oCelda = oFila.insertCell(-1);
    oCelda.textContent = this.prospecto;
    oCelda = oFila.insertCell(-1);
    oCelda.textContent = this.id;
    return oFila;
}
// FIN MODIFICACION 25/01

function Cita(iId,sNifPaciente,sNifMedico,sFecha,sHora,sDescripcion)
{
	this.id = iId;
	this.medico = sNifMedico;
	this.paciente = sNifPaciente;
	this.fecha = sFecha;
	this.hora = sHora;
    this.descripcion = sDescripcion;
    this.anulada = false;
}
//MODIFICACION 25/01
Cita.prototype.toHTMLRow=function(oTabla)
{
    var tCeldas = new Array(this.id,this.medico,this.paciente,this.fecha,this.hora,this.descripcion,this.anulada);
    // Cuerpo de la tabla
    var oTBody = oTabla.createTBody();
    var oFila = oTBody.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    for (var i=0;i<tCeldas.length;i++)    //Modificacion Marina. Pongo este for y la tabla para hacer más legible el código.
    {
        oCelda.textContent = tCeldas[i];
        oCelda = oFila.insertCell(-1);
    }
    return oFila;
}
// FIN MODIFICACION 25/01



