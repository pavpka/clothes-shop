package ru.chudakov.repository;

import org.springframework.data.repository.CrudRepository;
import ru.chudakov.domain.Type;

import java.util.Optional;

public interface TypeRepository extends CrudRepository<Type, Integer> {
    Optional<Type> getByName(String name);
}
