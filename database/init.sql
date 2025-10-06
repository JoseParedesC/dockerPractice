-- Crear tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(10) NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    presentacion VARCHAR(25),
    descripcion VARCHAR(255)
);

-- Insertar datos iniciales
INSERT INTO productos (codigo, nombre, presentacion, descripcion) VALUES
('P001', 'Café', '500g', 'Café molido premium'),
('P002', 'Azúcar', '1kg', 'Azúcar blanca refinada'),
('P003', 'Aceite', '900ml', 'Aceite vegetal'),
('P004', 'Arroz', '1kg', 'Arroz blanco extra'),
('P005', 'Leche', '1L', 'Leche entera en caja')
ON CONFLICT (codigo) DO NOTHING;