package com.bicicletaprestamo.controller;

import com.bicicletaprestamo.model.Bicicleta;
import com.bicicletaprestamo.repository.BicicletaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bicicletas")
public class BicicletaController {

    @Autowired
    private BicicletaRepository bicicletaRepository;

    // Obtener todas las bicicletas
    @GetMapping
    public List<Bicicleta> obtenerTodas() {
        return bicicletaRepository.findAll();
    }

    // Agregar una nueva bicicleta
    @PostMapping
    public Bicicleta agregarBicicleta(@RequestBody Bicicleta bicicleta) {
        return bicicletaRepository.save(bicicleta);
    }

    // Cambiar la disponibilidad de la bicicleta (prestada o disponible)
    @PutMapping("/{id}")
    public Bicicleta cambiarDisponibilidad(@PathVariable Long id, @RequestBody Boolean disponible) {
        Bicicleta existente = bicicletaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bicicleta no encontrada con el ID: " + id));
        existente.setDisponible(disponible);
        return bicicletaRepository.save(existente);
    }

    // Devolver la bicicleta, marcándola como disponible
    @PutMapping("/{id}/devolver")
    public Bicicleta devolverBicicleta(@PathVariable Long id) {
        Bicicleta existente = bicicletaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bicicleta no encontrada con el ID: " + id));
        existente.setDisponible(true); // Marcar como disponible
        return bicicletaRepository.save(existente);
    }

    // Prestar la bicicleta, marcándola como no disponible
    @PutMapping("/{id}/prestar")
    public Bicicleta prestarBicicleta(@PathVariable Long id) {
        Bicicleta existente = bicicletaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bicicleta no encontrada con el ID: " + id));
        existente.setDisponible(false); // Marcar como prestada
        return bicicletaRepository.save(existente);
    }
}
