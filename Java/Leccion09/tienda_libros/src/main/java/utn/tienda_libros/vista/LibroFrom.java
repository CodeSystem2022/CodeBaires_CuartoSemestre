package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import java.awt.*;

@Component

public class LibroFrom extends JFrame {
    LibroServicio LibroServicio;
    private JPanel panel;

    @Autowired
    public_LibroFrom(LibroServicio libroServicio){
       this.libroServicio = libroServicio;
       iniciarForma();
    }

    private void iniciarForma(){
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        SetVisible(true);
        setSize(900, 700);

        //Para obtener las dimensiones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension TamanioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()/2);
        int y = (tamanioPantalla.height - getHeight()/2);
        setLocation(x,y);

    }
}



