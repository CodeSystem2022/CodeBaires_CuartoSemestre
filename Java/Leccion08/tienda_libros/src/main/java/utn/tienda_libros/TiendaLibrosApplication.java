package utn.tienda_libros;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

import java.EventQueue;

@SpringBootApplication
public class TiendaLibrosApplication 

	public static void main(String[] args) {
		
	}
		ConfigurableApplicationContext contextoSpring =
				 new SpringApplicationBuilder(TiendaLibrosApplication.class)
                      .headlees(false)
					  .web(WebAPlicationType.NONE)
					  .rum(args);
       
//Ejecutamos el codigo para el formulario
EventQueue.invokeLater(( )-> { //Metodo Lambda
	//obtenemos el objeto from a traves del spring
	LibroFrom libroFrom = contextoSpring.getBean(LibroFrom.class);
	LibroFrom.setVisible(true);
    });	



