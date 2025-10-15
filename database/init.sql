-- Crear tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(10) NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    presentacion VARCHAR(25),
    descripcion VARCHAR(255)
);

-- Crear tabla ventas
CREATE TABLE IF NOT EXISTS ventas (
    id SERIAL PRIMARY KEY,
    fecha TIMESTAMP NOT NULL,
    codigo_factura VARCHAR(50) NOT NULL,
    vendedor VARCHAR(50),
    comprador VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS ventas_items (
    id SERIAL PRIMARY KEY,
    id_venta INT,
    id_producto INT,
    cantidad INT NOT NULL DEFAULT 1,
    precio_unitario DECIMAL(10,2),
    subtotal DECIMAL(10,2),
    FOREIGN KEY (id_venta) REFERENCES ventas(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);

ALTER TABLE ventas_items
ADD CONSTRAINT unique_venta_producto UNIQUE (id_venta, id_producto);

-- Insertar datos iniciales
INSERT INTO productos (codigo, nombre, presentacion, descripcion) VALUES
('P001', 'Café', '500g', 'Café molido premium'),
('P002', 'Azúcar', '1kg', 'Azúcar blanca refinada'),
('P003', 'Aceite', '900ml', 'Aceite vegetal'),
('P004', 'Arroz', '1kg', 'Arroz blanco extra'),
('P005', 'Leche', '1L', 'Leche entera en caja')
ON CONFLICT (codigo) DO NOTHING;

INSERT INTO ventas (fecha, codigo_factura, vendedor, comprador) VALUES
('2025-10-01 10:30:00', 'FAC-001', 'Juan Pérez', 'Carlos Gómez'),
('2025-10-02 15:45:00', 'FAC-002', 'Ana Torres', 'María López'),
('2025-10-03 09:20:00', 'FAC-003', 'Luis Díaz', 'Pedro Ramírez'),
('2025-10-04 18:10:00', 'FAC-004', 'Sofía Núñez', 'Empresa ABC'),
('2025-10-05 11:05:00', 'FAC-005', 'Juan Pérez', 'Laura Castillo')
ON CONFLICT (codigo_factura) DO NOTHING;

INSERT INTO ventas_items (id_venta, id_producto, cantidad, precio_unitario, subtotal) VALUES
(1, 1, 2, 12.50, 25.00),  -- 2 cafés
(1, 4, 1, 5.50, 5.50),    -- 1 arroz
(2, 2, 3, 4.80, 14.40),   -- 3 azúcares
(2, 5, 2, 6.20, 12.40),   -- 2 leches
(3, 3, 1, 9.90, 9.90),    -- 1 aceite
(3, 1, 1, 12.50, 12.50),  -- 1 café
(4, 5, 4, 6.20, 24.80),   -- 4 leches
(4, 2, 2, 4.80, 9.60),    -- 2 azúcares
(4, 4, 3, 5.50, 16.50),   -- 3 arroces
(5, 1, 1, 12.50, 12.50)  -- 1 café
ON CONFLICT (id_venta, id_producto) DO NOTHING;
