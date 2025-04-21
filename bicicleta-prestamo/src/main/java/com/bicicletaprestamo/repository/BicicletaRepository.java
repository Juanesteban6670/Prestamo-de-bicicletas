package com.bicicletaprestamo.repository;

import com.bicicletaprestamo.model.Bicicleta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BicicletaRepository extends JpaRepository<Bicicleta, Long> {
}
