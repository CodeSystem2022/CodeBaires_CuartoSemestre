package utn.tienda_libros.servicio;

public interface ILibroServicio {
    public List<Libro> listarLibros();

    public Libro buscarLibroPorId(Integer idLibro);

    public void guardarLibro (Libro libro);

    public void eliminarLibro(Libro libro);
}
