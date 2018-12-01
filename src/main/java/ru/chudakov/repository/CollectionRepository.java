package ru.chudakov.repository;

import org.springframework.data.repository.CrudRepository;
import ru.chudakov.domain.Collection;

import java.util.List;
import java.util.Optional;

public interface CollectionRepository extends CrudRepository<Collection, Integer> {
    Optional<Collection> getByName(String name);
}
