package ru.chudakov.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.chudakov.domain.Clothes;
import ru.chudakov.repository.ClothesRepository;
import ru.chudakov.repository.CollectionRepository;
import ru.chudakov.repository.TypeRepository;

import java.util.List;

@Service
public class ClothesServiceImpl implements ClothesService {
    private ClothesRepository clothesRepository;
    private CollectionRepository collectionRepository;
    private TypeRepository typeRepository;

    @Autowired
    public ClothesServiceImpl(ClothesRepository clothesRepository,
                              CollectionRepository collectionRepository,
                              TypeRepository typeRepository) {
        this.clothesRepository = clothesRepository;
        this.collectionRepository = collectionRepository;
        this.typeRepository = typeRepository;
    }

    @Override
    public List<Clothes> saveClothes(List<Clothes> clothes) {
        return (List<Clothes>) clothesRepository.saveAll(clothes);
    }

    @Override
    public List<Clothes> getAllByType(String typeName) {
        return (List<Clothes>) clothesRepository.getAllByType(typeRepository.getByName(typeName).orElse(null));
    }

    @Override
    public List<Clothes> getAllByCollection(String collectionName) {
        return (List<Clothes>) clothesRepository.getAllByCollection(collectionRepository.getByName(collectionName)
                .orElse(null)
        );
    }
}
