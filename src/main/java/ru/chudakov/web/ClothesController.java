package ru.chudakov.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.chudakov.domain.Clothes;
import ru.chudakov.service.ClothesService;

import java.util.List;

@RestController
public class ClothesController {
    private ClothesService clothesService;

    @Autowired
    public ClothesController(ClothesService clothesService){
        this.clothesService = clothesService;
    }

    @GetMapping("/clothes/type")
    public List<Clothes> getAllByTypeName(@RequestParam("name") String name){
        return clothesService.getAllByType(name);
    }

    @GetMapping("/clothes/collection")
    public List<Clothes> getAllByCollectionName(@RequestParam("name") String name){
        return clothesService.getAllByCollection(name);
    }
}
