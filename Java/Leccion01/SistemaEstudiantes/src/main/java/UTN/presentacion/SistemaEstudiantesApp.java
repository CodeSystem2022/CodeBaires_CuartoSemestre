package UTN.presentacion;

import UTN.conexion.Conexion;
import UTN.datos.EstudianteDAO;


import java.util.Scanner;

public class SistemaEstudiantesApp{
    public static void main(String[] args) {
        var salir = false;
        var console=new Scanner(System.in);//Para leer informacion de la consola
        //Se crea una instancia de la clase servicio. Esto lo hacemos fuera del ciclo
        var estudianteDao=new EstudianteDAO(); //Esta instancia debe hacerse una vez
        while(!salir){
            try{
                mostrarMenu(); //Este sera el metodo que devolvera un booleano
                salir=ejecutarOpciones(consola,estudianteDao); //Arroja una exception
            }catch(Exception e){
                System.out.println("Ocurrio un error al ejecutar la operacion "+e.getMessage());
            }
        }//Fin while

}//Fin main