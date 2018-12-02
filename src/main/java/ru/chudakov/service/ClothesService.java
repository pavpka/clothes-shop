package ru.chudakov.service;

import ru.chudakov.domain.Clothes;

import java.util.List;

public interface ClothesService {
    public List<Clothes> saveClothes(List<Clothes> clothes);

    public List<Clothes> getAllByType(String typeName);

    public List<Clothes> getAllByCollection(String collectionName);
}
