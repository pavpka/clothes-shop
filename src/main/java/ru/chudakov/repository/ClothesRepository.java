package ru.chudakov.repository;

import org.springframework.data.repository.CrudRepository;
import ru.chudakov.domain.Clothes;
import ru.chudakov.domain.Collection;
import ru.chudakov.domain.Type;

import java.util.List;

public interface ClothesRepository extends CrudRepository<Clothes, Integer> {
    List<Clothes> getAllByType(Type type);

    List<Clothes> getAllByCollection(Collection collection);
}
