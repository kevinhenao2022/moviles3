import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import {styles} from './assets/style/Mystyles'


//conts App = () =>{

export default function App() {

// hooks para estados con use states

const[Valor1,setValor1] = useState('');
const[Valor2,setValor2] = useState('');
const[resultado,setresultado] = useState('');

//para mostrar metodo

let mostrar = ()=>{
  alert(`el valor 1 es ${Valor1}`)
}

const limpiar = ()=>{
  setValor1('');
  setValor2('');
  setresultado(0);
}



//creamos a sumar como una funcion anomina
let Sumar = function(){
  setValor1('');
  setresultado(parseFloat(Valor1) + parseFloat(Valor2));
}

let calcular = (oper)=>{
  let mresult = 0;
  switch(oper){
    case "+":
      mresult = parseFloat(Valor1) + parseFloat(Valor2);
      break;
    case "-":
      mresult = parseFloat(Valor1) - parseFloat(Valor2);
      break;
    case "*":
      mresult = parseFloat(Valor1) * parseFloat(Valor2);
        break;
    case "/":
      mresult = parseFloat(Valor1) / parseFloat(Valor2);
       break;
  }
  setresultado(mresult)
}
  return (
    <View style={[styles.container,styles.alingView]}>
      <Header src="calc1.jpg" ></Header>
      <View style={[styles.viewChild,styles.alingView,{marginTop:10}]}>

        <Image
        source={{uri : "https://images.vexels.com/media/users/3/205996/isolated/preview/81d3f60bca6d3b2cbef6ba1ff1e0b4f7-cute-dibujos-animados-calculadora.png"}}
        style={{width:120, height:120}}
        />

        <Text>Valor 1</Text>
        <TextInput
        placeholder='Ingrese un Valo 1'
        style={{borderWidth:1, borderStyle:"solid", padding:5, textAlign:"center",}}
        onChangeText= {Valor1 => setValor1(Valor1)}
        value = {Valor1}
        
        />

        <Text>Valor 2</Text>
        <TextInput
        placeholder='Ingrese un Valo 2'
        style={{borderWidth:1, borderStyle:"solid", padding:5, textAlign:"center",}}
        onChangeText= {Valor2 => setValor2(Valor2)}
        value = {Valor2}
        
        />
        <Text>resultado</Text>
        <Text>{resultado}</Text>
        <Text>{'\n'}</Text>
        
        {/*<Text>{'\n'}</Text>
        <Button title = "Sumar"
          onPress = {Sumar}
        />

        <Text>{'\n'}</Text>
        <Button
        title='Limpiar'
        onPress={limpiar}
        />*/}
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <TouchableOpacity style={{backgroundColor:'red', padding:10,borderRadius:10 }} onPress={()=>calcular('+')}>
          <Text style={{color:'white',fontWeight:'bold'}}>+</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'red', padding:10,borderRadius:10, marginLeft:10  }} onPress={()=>calcular('-')}>
          <Text style={{color:'white',fontWeight:'bold'}}>-</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'red', padding:10,borderRadius:10,  marginLeft:10 }} onPress={()=>calcular('*')}>
          <Text style={{color:'white',fontWeight:'bold'}}>x</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'red', padding:10,borderRadius:10,  marginLeft:10 }} onPress={()=>calcular('/')}>
          <Text style={{color:'white',fontWeight:'bold'}}>/</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'red', padding:10,borderRadius:10,  marginLeft:10 }} onPress={limpiar}>
          <Text style={{color:'white',fontWeight:'bold'}}>C</Text>

        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



