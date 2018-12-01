package ru.chudakov.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.chudakov.domain.Type;
import ru.chudakov.repository.TypeRepository;

@Service
public class TypeServiceImpl implements TypeService {
    private TypeRepository repository;

    @Autowired
    public TypeServiceImpl(TypeRepository repository){
        this.repository = repository;
    }

    @Override
    public Type saveType(Type type) {
        return repository.save(type);
    }
}
